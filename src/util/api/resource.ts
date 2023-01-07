export type Resource<ResourceType> = {
	read(): ResourceType;
};

export type BaseComponentStatuses =
	| "IDLE"
	| "PENDING"
	| "RESOLVED"
	| "REJECTED";

export function createResource<ResourceType>(promise: Promise<any>) {
	let status: Exclude<BaseComponentStatuses, "IDLE"> = "PENDING";
	let result: ResourceType;
	let fetchErr: Error;

	promise = promise
		.then((bestSellers) => {
			status = "RESOLVED";
			result = bestSellers;
		})
		.catch((error) => {
			status = "REJECTED";
			fetchErr = error;
		});

	return {
		read() {
			if (status === "PENDING") throw promise;
			else if (status === "REJECTED") throw fetchErr;
			else return result;
		},
	};
}
