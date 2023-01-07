import { getUser } from "api/fetchers/user/userGET";
import { User } from "api/types/user";
import { QueryClient } from "react-query";
import queryKeys from "../queryKeys";

export function userQuery() {
	return {
		queryKey: queryKeys.user(),
		queryFn: async () => {
			try {
				const data: { user: User } = await getUser();

				return data.user;
			} catch (err) {
				return Promise.reject(err);
			}
		},
		staleTime: 3600 * 1000, // 1hour
		retry: 1,
	};
}

export function prefetchUser(qClient: QueryClient) {
	qClient.prefetchQuery(userQuery());
}
