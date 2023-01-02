export default async function api(path: string, reqInit?: RequestInit) {
	const origin = process.env.REACT_APP_BASE_URL;
	const url = path.startsWith("/")
		? origin + "/" + path.slice(1)
		: origin + path;

	let error = null;

	try {
		const resp = await fetch(url, {
			credentials: "include",
			...reqInit,
		});

		if (resp.headers.get("Content-Type")?.includes("application/json")) {
			if (resp.ok) {
				return resp.json();
			} else if (resp.status < 500) {
				const errorJson = await resp.json();
				error = createError(errorJson.message, {
					status: resp.status,
					actualError: errorJson,
				});
			} else {
				const errorJson = await resp.json();
				error = createError("Something went wrong", {
					status: 500,
					actualError: errorJson,
				});
			}
		} else if (resp.ok) {
			return resp;
		} else {
			error = resp;
		}
	} catch (err) {
		throw createError("Something went wrong", {
			actualError: err,
			status: 500,
		});
	}

	throw error;
}

export function createError(
	message: string,
	cause?: { actualError?: any; status: number }
) {
	return new Error(message, {
		cause,
	});
}
