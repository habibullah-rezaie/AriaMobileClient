const queryKeys = {
	token: ["token"] as const,
	user: () => ["user"] as const,
};

export default Object.freeze(queryKeys);
