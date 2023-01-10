import Button from "components/lib/buttons/Button";
import SectionCard from "components/lib/cards/SectionCard";
import Input from "components/lib/inputs/Input";
import { useTranslation } from "react-i18next";
import { ActionFunction, Form } from "react-router-dom";
import ItemComboBox from "./ItemComboBox";

function UnbilledSellForm() {
	const { t, i18n } = useTranslation();
	return (
		<SectionCard title={t("unbilled-sell")} className={`max-w-[35.06rem]`}>
			<Form
				id="new-unbilled-sell"
				action={`/${i18n.resolvedLanguage}/#new-unbilled-sell`}
				method={"post"}
				className={`bg-white p-5 grid grid-cols-[auto_1fr] grid-rows-4 gap-y-[1rem] gap-x-2.5 items-center`}
			>
				<ItemComboBox />
				<label className="text-appText justify-self-end" htmlFor="item-count">
					{t("count")}
				</label>
				<Input
					className="max-h-9"
					wrapperClassName="max-w-[20rem]"
					style={{ padding: "0.25rem" }}
					id="item-count"
					name="item-count"
				/>
				<label className="text-appText justify-self-end" htmlFor="item-price">
					{t("price")}
				</label>
				<Input
					className="max-h-9"
					wrapperClassName="max-w-[20rem]"
					style={{ padding: "0.25rem" }}
					id="item-price"
					name="item-price"
				/>
				<div className="w-[20rem] col-start-2 flex flex-row justify-end">
					<Button
						className="w-[6.56rem] h-[2.38rem]"
						style={{ padding: "0px" }}
					>
						<span className="m-auto">{t("unbilled-form-register-btn")}</span>
					</Button>
				</div>
			</Form>
		</SectionCard>
	);
}

export default UnbilledSellForm;

export const unbilledSellFormAction: ActionFunction = ({ request }) => {
	return null;
};
