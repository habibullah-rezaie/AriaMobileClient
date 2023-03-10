import api from "../api";

const loginAPI = (conf: RequestInit) => api("/login", conf);

export async function loginUser({ email, password }: LoginData) {
	return loginAPI({
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ email, password }),
	});
}

export async function logoutUser() {
	return api("/logout", { method: "DELETE" });
}

export type LoginData = {
	email: string;
	password: string;
};
