import { renewTkQueryOpts } from "api/cache/queryBuilders/token";
import { useQuery } from "react-query";

export function useRenewTkQuery(
	autoRefetch = true,
	onError?: (err: unknown) => void
) {
	const query = useQuery({
		...renewTkQueryOpts(autoRefetch),
		onError,
	});

	return query;
}
