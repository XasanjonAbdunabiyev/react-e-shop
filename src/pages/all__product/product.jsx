import React, { useContext } from "react";
import i18next from "i18next";
import { useTranslation } from "react-i18next";
import "./product.scss";
import { useGetData } from "../../hooks/useGetData";
import LoadingComp from "../../components/loading/loading";
import Empty from "../../components/noData/empty";
import { Popover, Button, Image, Text } from "@nextui-org/react";
import { FiShoppingCart } from "react-icons/fi";
import { Context } from "../../context/context";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
export default function Product() {
	const { t } = useTranslation();
	const productAll = useGetData(["products"], "/products");
	const { addToCart } = useContext(Context);
	const navigate = useNavigate();
	const { isLoading } = productAll;
	return (
		<div className="product">
			<div className="container">
				{isLoading ? <LoadingComp /> : null}

				{productAll?.data?.data?.total <= 0 ? <Empty /> : null}
				<div className="product__container">
					<h1 className="product__title">{i18next.t("product")}</h1>

					<div className="product__wrapper">
						{productAll?.data?.data?.data?.map((element, value) => {
							return (
								<motion.div
									initial={{ scale: 0 }}
									animate={{ rotate: 360, scale: 1 }}
									transition={{
										type: "spring",
										stiffness: 260,
										damping: 20,
									}}
									key={value}
								>
									<div className="product__wrapper__item">
										<div className="my-4">
											<Image
												showSkeleton
												className="object-cover"
												src={`http://3.138.204.20/upload/${element?.photo?.path}`}
												alt={`${element?.photo?.path}`}
											/>
										</div>

										<div className="cart__content">
											<div className="my-4 flex items-center gap-3">
												<h3 className="font-bold uppercase text-[19px]">
													{i18next.t("price")} :
												</h3>
												<p className="text-[20px]">{element?.price}</p>
											</div>

											<div className="my-4 flex items-center gap-3">
												<h3 className="font-bold uppercase text-[19px]">
													color:
												</h3>
												<p className="text-[20px] uppercase">
													{element?.color.slice(0, 10)}
												</p>
											</div>

											<div>
												<h2 className="my-4 flex items-center gap-x-3">
													<b className="capitalize  text-[20px]">
														{i18next.t("gendor")} :
													</b>
													<p className="capitalize">{element?.gender}</p>
												</h2>
											</div>

											<div className="flex items-center gap-3">
												<Popover>
													<Popover.Trigger>
														<Button
															auto
															className="bg-blue-500 text-white text-[20px]"
															flat
														>
															<FiShoppingCart />
														</Button>
													</Popover.Trigger>
													<Popover.Content>
														<Text
															className="text-[18px] font-bold"
															// onClick={() => setData((e) => [...e, element])}

															onClick={() => {
																addToCart(element, element?.id);
															}}
															css={{ p: "$4", cursor: "pointer" }}
														>
															{i18next.t("karzinkagaQoshish")}
														</Text>
													</Popover.Content>
												</Popover>

												<Button
													onClick={() =>
														navigate(`/all_product/${element?.id}`)
													}
													className="bg-blue-600 text-[20px]"
												>
													{" "}
													{i18next.t("details")}
												</Button>
											</div>
										</div>
									</div>
								</motion.div>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
}
