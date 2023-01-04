import { renewTkQueryOpts } from "api/cache/queryBuilders/token";
import { useQuery } from "react-query";

export function useRenewTkQuery(onError?: (err: unknown) => void) {
	const query = useQuery({
		...renewTkQueryOpts(),
		onError,
	});

	return query;
}
