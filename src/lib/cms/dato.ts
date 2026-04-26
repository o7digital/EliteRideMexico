const DATO_CMS_GRAPHQL_ENDPOINT = 'https://graphql.datocms.com/';

type GraphQlError = {
	message: string;
};

type GraphQlResponse<T> = {
	data?: T;
	errors?: GraphQlError[];
};

export function isDatoCmsConfigured(): boolean {
	return Boolean(import.meta.env.DATOCMS_API_TOKEN);
}

export async function datoCmsRequest<T>(
	query: string,
	variables: Record<string, unknown> = {},
	options?: { includeDrafts?: boolean }
): Promise<T | null> {
	const token = import.meta.env.DATOCMS_API_TOKEN;

	if (!token) {
		return null;
	}

	const headers: Record<string, string> = {
		Authorization: `Bearer ${token}`,
		'Content-Type': 'application/json',
		Accept: 'application/json'
	};

	if (import.meta.env.DATOCMS_ENVIRONMENT) {
		headers['X-Environment'] = import.meta.env.DATOCMS_ENVIRONMENT;
	}

	if (options?.includeDrafts || import.meta.env.DATOCMS_INCLUDE_DRAFTS === 'true') {
		headers['X-Include-Drafts'] = 'true';
	}

	const response = await fetch(DATO_CMS_GRAPHQL_ENDPOINT, {
		method: 'POST',
		headers,
		body: JSON.stringify({ query, variables })
	});

	if (!response.ok) {
		throw new Error(`DatoCMS request failed with status ${response.status}`);
	}

	const payload = (await response.json()) as GraphQlResponse<T>;

	if (payload.errors && payload.errors.length > 0) {
		throw new Error(payload.errors.map((error) => error.message).join(' | '));
	}

	return payload.data ?? null;
}
