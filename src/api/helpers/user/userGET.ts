import api from "../api";

export async function getUser() {
	(window as any).api = api;
	try {
		return await api("/user");
	} catch (err) {
		throw new Error("Something went wrong!", {
			cause: err,
		});
	}
}
