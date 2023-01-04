import { renewToken } from "api/helpers/auth/token";
import { UseQueryOptions } from "react-query";
import queryKeys from "../queryKeys";

export function renewTkQueryOpts(): UseQueryOptions<
	null,
	unknown,
	null,
	readonly ["token"]
> {
	return {
		queryKey: queryKeys.token,
		queryFn: async () => {
			try {
				return await renewToken();
			} catch (err) {
				return Promise.reject(err);
			}
		},
		retry: false,
		refetchInterval: 50 * 60 * 1000,
		refetchOnWindowFocus: true,
	};
}
