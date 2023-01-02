import { userQuery } from "api/cache/queryBuilders/user";
import { LoginData, loginUser } from "api/helpers/auth/login";
import { User } from "api/types/user";
import LoginForm from "components/pages/LoginPage/LoginForm";
import { QueryClient } from "react-query";
import {
	ActionFunction,
	redirect,
	useActionData,
	useLoaderData,
} from "react-router-dom";

function LoginPage() {
	useLoaderData();
	const data = useActionData();

	if (data) console.log("DATA", data);
	return (
		<div className="flex items-center justify-center w-screen h-screen">
			<main className="w-[22rem]">
				<LoginForm />
			</main>
		</div>
	);
}

export default LoginPage;

export function getLoginAction(qClient: QueryClient): ActionFunction {
	return async function action({ request }) {
		try {
			const formData = await request.formData();
			const updates = Object.fromEntries(formData);

			const resp = await loginUser(updates as LoginData);

			if (resp.user) {
				qClient.setQueryData<User>(userQuery().queryKey, () => {
					return resp.user;
				});

				return redirect("/");
			}
		} catch (err: any) {
			if (err.message && err?.cause?.status < 500) {
				return { error: { message: err.message } };
			}

			return { error: err };
		}

		return null;
	};
}
