import { datoCmsRequest, isDatoCmsConfigured } from './dato';
import {
	defaultHomeEsContent,
	mergeHomeEsEditableContent,
	type HomeEsContent
} from '../../data/cms/homeEsContent';

type DatoHomeEsRecord = {
	content?: unknown;
};

type HomeEsQueryResponse = {
	homePage: DatoHomeEsRecord | null;
};

const HOME_ES_QUERY = `
	query HomeEsPage($slug: String!, $locale: SiteLocale) {
		homePage(filter: { slug: { eq: $slug } }, locale: $locale) {
			content
		}
	}
`;

export async function getHomeEsContent(): Promise<HomeEsContent> {
	if (!isDatoCmsConfigured()) {
		return defaultHomeEsContent;
	}

	const slug = import.meta.env.DATOCMS_HOME_ES_SLUG ?? 'home-es';
	const locale = import.meta.env.DATOCMS_HOME_ES_LOCALE ?? 'es';

	try {
		const result = await datoCmsRequest<HomeEsQueryResponse>(HOME_ES_QUERY, {
			slug,
			locale
		});

		if (!result?.homePage) {
			return defaultHomeEsContent;
		}

		const editable = mergeHomeEsEditableContent(result.homePage.content);

		return {
			...defaultHomeEsContent,
			...editable
		};
	} catch (error) {
		console.warn('DatoCMS home ES query failed, using fallback content.', error);
		return defaultHomeEsContent;
	}
}
