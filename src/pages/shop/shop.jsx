import React, { useContext } from "react";
import i18next from "i18next";
import { useTranslation } from "react-i18next";
import "./shop.scss";
import { Context } from "../../context/context";
import { FiTrash } from "react-icons/fi";
import Empty from "../../components/noData/empty";
import { Button } from "@nextui-org/react";
export default function Shop() {
	const { t } = useTranslation();
	const { data, incrementAmount, removeFromCart, clearCart } =
		useContext(Context);

	return (
		<div className="shop">
			<div className="container">
				<h1 className="shop__title">{i18next.t("shop")}</h1>

				<div className="shop__wrapper">
					<>
						{data?.length <= 0 ? (
							""
						) : (
							<>
								<div
									onClick={() => clearCart()}
									className="cursor-pointer text-white w-12 h-12 flex justify-center items-center text-xl bg-red-500 py-4"
								>
									<FiTrash />
								</div>
							</>
						)}
					</>

					{data?.map((element, value) => {
						return (
							<div key={value} className="shop__wrapper__item">
								<div className="my-2 filter__img">
									<img
										src={`http://3.138.204.20/upload/${element?.photo?.path}`}
										alt=""
									/>
								</div>

								<div className="px-3 border shadow flex items-center gap-3">
									<button
										className="py-2 px-4 text-[30px]"
										onClick={() => incrementAmount()}
									>
										+
									</button>
									<h2 className="text-[30px]">{element?.amount}</h2>
									<button className="py-2 px-4 text-[30px]">-</button>
								</div>

								<div className="shop__content">
									<div className="my-2 flex items-center gap-3">
										<h3 className="font-bold uppercase text-[19px]">
											{i18next.t("price")} :
										</h3>
										<p className="text-[20px]">{element?.price}</p>
									</div>

									<div className="my-2 flex items-center gap-3">
										<h3 className="font-bold uppercase text-[19px]">color:</h3>
										<p className="text-[20px] uppercase">
											{element?.color.slice(0, 10)}
										</p>
									</div>

									<div>
										<h2 className="my-2 flex items-center gap-x-3">
											<b className="capitalize  text-[20px]">
												{i18next.t("gendor")} :
											</b>
											<p className="capitalize">{element?.gender}</p>
										</h2>
									</div>
								</div>

								<div className="delete__product">
									<Button
										className="bg-red-600"
										onClick={() => removeFromCart(element?.id)}
									>
										{i18next.t("ochirish")}
									</Button>
								</div>
							</div>
						);
					})}
				</div>
			</div>
			{data?.length <= 0 ? <Empty /> : null}
		</div>
	);
}
