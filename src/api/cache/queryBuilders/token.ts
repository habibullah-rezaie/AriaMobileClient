import { renewToken } from "api/fetchers/auth/token";
import { UseQueryOptions } from "react-query";
import queryKeys from "../queryKeys";

export function renewTkQueryOpts(
	autoRefetch: boolean
): UseQueryOptions<null, unknown, null, readonly ["token"]> {
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
		refetchInterval: autoRefetch ? 50 * 60 * 1000 : undefined,
		refetchOnWindowFocus: true,
	};
}
