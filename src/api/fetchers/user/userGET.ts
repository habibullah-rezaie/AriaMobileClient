import api from "../api";

export async function getUser() {
	return api("/user");
}
