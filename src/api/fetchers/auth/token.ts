import api from "../api";

export async function renewToken() {
	return api("/token", {
		method: "POST",
	});
}
