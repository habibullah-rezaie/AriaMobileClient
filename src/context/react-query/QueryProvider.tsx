import React, { PropsWithChildren } from "react";
import { QueryClient, QueryClientProvider } from "react-query";

export const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
			retry(count) {
				return count <= 2;
			},
		},
	},
});

function QueryProvider({ children }: PropsWithChildren<{}>) {
	return (
		<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
	);
}

export default QueryProvider;
