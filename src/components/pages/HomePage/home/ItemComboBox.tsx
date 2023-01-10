import { Combobox, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { useTranslation } from "react-i18next";
import { BsChevronExpand } from "react-icons/bs";
import { HiCheck } from "react-icons/hi";

const items = [
	{ id: 1, name: "سلام لالا", count: 10, price: 300 },
	{ id: 2, name: "Arlene Mccoy", count: 5, price: 40 },
	{ id: 3, name: "Devon Webb", count: 20, price: 3000 },
	{ id: 4, name: "Tom Cook", count: 6, price: 9000 },
	{ id: 5, name: "Tanya Fox", count: 0, price: 3000 },
	{ id: 6, name: "Hellen Schmidt", count: 2, price: 40 },
];

export default function ItemComboBox() {
	const { t } = useTranslation();
	const [selected, setSelected] = useState(items[0]);
	const [query, setQuery] = useState("");

	const filteredPeople =
		query === ""
			? items
			: items.filter((person) =>
					person.name
						.toLowerCase()
						.replace(/\s+/g, "")
						.includes(query.toLowerCase().replace(/\s+/g, ""))
			  );

	return (
		<>
			<Combobox value={selected} onChange={setSelected}>
				<Combobox.Label className={"text-appText justify-self-end"}>
					{t("item")}
				</Combobox.Label>
				<div className="relative mt-1 w-[20rem] rounded-lg">
					{/* <div className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left border-[1px] focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-thirdGray sm:text-sm"> */}
					<div className=" w-full border-[1px] rounded-md border-appGray/50 hover:ring-[3px] hover:ring-appGray/50 focus-within:border-appText">
						<Combobox.Input
							as="input"
							className={`w-full rounded-lg border-none py-1 align-middle ${
								document.dir === "ltr" ? "pl-3 pr-10" : "pr-3 pl-10"
							} text-sm leading-5 text-gray-900 focus:ring-0 focus:outline-none`}
							displayValue={(item: typeof items[0]) => item.name}
							onChange={(event) => setQuery(event.target.value)}
						/>
						<Combobox.Button
							className={`absolute inset-y-0 ${
								document.dir === "ltr" ? "right-0 pr-2" : "left-0 pl-2"
							} flex items-center `}
						>
							<BsChevronExpand
								className="h-5 w-5 text-gray-400"
								aria-hidden="true"
							/>
						</Combobox.Button>
					</div>
					<Transition
						as={Fragment}
						leave="transition ease-in duration-100"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
						afterLeave={() => setQuery("")}
					>
						<Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
							{filteredPeople.length === 0 && query !== "" ? (
								<div className="relative cursor-default select-none py-2 px-4 text-gray-700">
									Nothing found.
								</div>
							) : (
								filteredPeople.map((person) => (
									<Combobox.Option
										key={person.id}
										className={({ active }) =>
											`relative cursor-default select-none py-2 pl-10 pr-4 ${
												active ? "bg-appBase text-white" : "text-gray-900"
											}`
										}
										value={person}
									>
										{({ selected, active }) => (
											<>
												<span
													className={`block truncate ${
														selected ? "font-medium" : "font-normal"
													}`}
												>
													{person.name}
												</span>
												{selected ? (
													<span
														className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
															active ? "text-white" : "text-appBase"
														}`}
													>
														<HiCheck className="h-5 w-5" aria-hidden="true" />
													</span>
												) : null}
											</>
										)}
									</Combobox.Option>
								))
							)}
						</Combobox.Options>
					</Transition>
				</div>
			</Combobox>
		</>
	);
}
