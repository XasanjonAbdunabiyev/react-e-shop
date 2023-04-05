// import { useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import LoadingComp from "../../../components/loading/loading";
// import { useGetData } from "../../../hooks/useGetData";

// export default function ProductDetails() {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [show, setShow] = useState(false);
//   const singleReaclProduct = useGetData(
//     ["singlereacl_data"],
//     `/products/${id}`
//   );

//   const singCategoryProduct = useGetData(
//     ["singlereacp_category_productl_data"],
//     `/products/category/${singleReaclProduct?.data?.data?.categoryId}`
//   );

//   function mainSetShow() {
//     setShow(!show);

//     if (singCategoryProduct?.isLoading) {
//       return <LoadingComp />;
//     }
//   }

//   return (
//     <div>
//       <div className="container mx-auto">
//         <h1 className="text-[30px] capitalize font-bold">
//           основные отдельные продукты
//         </h1>
//         <div className="py-2">
//           {singleReaclProduct.isLoading ? (
//             <>
//               <LoadingComp />
//             </>
//           ) : (
//             <div className="border py-4 px-4">
//               <div className="border shadow py-4 px-4 my-3">
//                 <h3 className="flex my-3 items-center gap-x-3">
//                   <b className="capitalize">имя En : </b>
//                   <p className="text-blue-700 font-semibold capitalize">
//                     {singleReaclProduct?.data?.data?.name_En}
//                   </p>
//                 </h3>

//                 <h3 className="flex my-3 items-center gap-x-3">
//                   <b className="capitalize">имя Ru :</b>
//                   <p className="text-blue-700 font-semibold capitalize">
//                     {singleReaclProduct?.data?.data?.name_Ru}
//                   </p>
//                 </h3>
//                 <h3 className="flex my-3 items-center gap-x-3">
//                   <b className="capitalize">имя uz :</b>
//                   <p className="text-blue-700 font-semibold capitalize">
//                     {singleReaclProduct?.data?.data?.name_Uz}
//                   </p>
//                 </h3>
//               </div>

//               <div className="border shadow py-4 px-4 my-3">
//                 <h3 className="flex my-3 items-center gap-x-3">
//                   <b className="capitalize">описание на англ : </b>
//                   <p className="text-blue-700 font-semibold capitalize">
//                     {singleReaclProduct?.data?.data?.description_En}
//                   </p>
//                 </h3>

//                 <h3 className="flex my-3 items-center gap-x-3">
//                   <b className="capitalize">описание Русь : </b>
//                   <p className="text-blue-700 font-semibold capitalize">
//                     {singleReaclProduct?.data?.data?.description_Ru}
//                   </p>
//                 </h3>

//                 <h3 className="flex my-3 items-center gap-x-3">
//                   <b className="capitalize">описание узбекский : </b>
//                   <p className="text-blue-700 font-semibold capitalize">
//                     {singleReaclProduct?.data?.data?.description_Uz}
//                   </p>
//                 </h3>

//                 <main className="flex gap-7">
//                   <input type={"checkbox"} id="check" />
//                   <label
//                     htmlFor="check"
//                     className="bg-blue-400 cursor-pointer text-white py-1 px-4 font-semibold"
//                   >
//                     active
//                   </label>
//                 </main>
//               </div>

//               <div className="border py-3 px-3 my-2">
//                 <input type="color" />
//                 <h3 className="flex items-center gap-x-2">
//                   <b className="capitalize">скидка : </b>
//                   <del>{singleReaclProduct?.data?.data?.discount}</del>
//                   <div className="flex items-center gap-x-2">
//                     <b className="capitalize">цена :</b>
//                     <p>{singleReaclProduct?.data?.data?.price}</p>
//                   </div>
//                 </h3>
//               </div>

//               <div className="my-4">
//                 <p className="font-bold text-[15px]">
//                   Это решение должно полностью исходить из того, для чего сам
//                   ноутбук необходим. Например, если ноутбук понадобится в
//                   основном для путешествий и работы в интернете, то наилучшим
//                   решением окажется небольшой компактный нетбук с экраном
//                   11-12ʺ. Если же нам нужен ноутбук для игр, то лучше всего
//                   выбирать средний ноутбук с диагональю 15,6ʺ, но с
//                   соответствующими параметрами производительности и охлаждения.
//                   Большой ноутбук с 17-дюймовым экраном может понадобиться, если
//                   мы выбираем универсальное устройство для работы, возможно, для
//                   обработки графики, фото и редактирования видео.
//                 </p>
//               </div>

//               <br />
//               <hr />
//             </div>
//           )}

//           {singCategoryProduct?.isLoading ? <LoadingComp /> : null}

//           <div className={show ? "main_single_real" : "hidden"}>
//             <h3 className="capitalize text-[30px] my-4">Категория продукта</h3>
//             <div className="main_single_category">
//               {singCategoryProduct?.data?.data?.data?.map((elements, index) => {
//                 return (
//                   <div key={index} className="border shadow py-4 px-5">
//                     <div className="content">
//                       <div className="py-1 px-2 border">
//                         <h3 className="flex my-3 items-center gap-x-3">
//                           <b className="capitalize">имя En : </b>
//                           <p className="text-blue-700 font-semibold capitalize">
//                             {elements?.name_En}
//                           </p>
//                         </h3>

//                         <h3 className="flex my-3 items-center gap-x-3">
//                           <b className="capitalize">имя Ru :</b>
//                           <p className="text-blue-700 font-semibold capitalize">
//                             {elements?.name_Ru}
//                           </p>
//                         </h3>
//                         <h3 className="flex my-3 items-center gap-x-3">
//                           <b className="capitalize">имя uz :</b>
//                           <p className="text-blue-700 font-semibold capitalize">
//                             {elements?.name_Uz}
//                           </p>
//                         </h3>
//                       </div>

//                       <h3 className="flex my-3 items-center gap-x-3">
//                         <b className="capitalize">описание на англ : </b>
//                         <p className="text-blue-700 font-semibold capitalize">
//                           {elements?.description_En}
//                         </p>
//                       </h3>

//                       <h3 className="flex my-3 items-center gap-x-3">
//                         <b className="capitalize">описание Русь : </b>
//                         <p className="text-blue-700 font-semibold capitalize">
//                           {elements?.description_Ru}
//                         </p>
//                       </h3>

//                       <h3 className="flex my-3 items-center gap-x-3">
//                         <b className="capitalize">описание узбекский : </b>
//                         <p className="text-blue-700 font-semibold capitalize">
//                           {elements?.description_Uz}
//                         </p>
//                       </h3>
//                     </div>

//                     <div>
//                       <img
//                         src={`http://3.19.30.204/upload/${elements?.photo?.path}`}
//                         alt="img..."
//                       />
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>

//           <div className="my-4 flex gap-x-4 items-center">
//             <button
//               onClick={() => navigate(-1)}
//               className="bg-blue-500 text-white py-1 font-bold px-5"
//             >
//               назад
//             </button>

//             <button
//               onClick={() => mainSetShow()}
//               className={
//                 !show === true
//                   ? "bg-blue-500 text-white py-1 font-bold px-5"
//                   : "hidden"
//               }
//             >
//               Категория продукта
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useContext } from "react";
// import moize from "moize";
import { useParams } from "react-router-dom";
import { useGetData } from "../../../hooks/useGetData";
import i18next from "i18next";
import "./productDetails.scss";
import { Popover, Button, Text } from "@nextui-org/react";
import { useTranslation } from "react-i18next";
import { FiShoppingCart } from "react-icons/fi";
import { Context } from "../../../context/context";
export default function ProductDetails() {
	const { id } = useParams();
	const single__products = useGetData(["single__products"], `/products/${id}`);
	const { t } = useTranslation();
	const { addToCart } = useContext(Context);
	return (
		<div className="single__products">
			<div className="container">
				<h1 className="single__products__title">
					{i18next.t("product")} {i18next.t("details")}
				</h1>

				<div className="single__products_wrapper">
					{console.log(single__products?.data?.data?.photo?.path)}
					<img
						src={`http://3.138.204.20/upload/${single__products?.data?.data?.photo?.path}`}
						alt=""
					/>
				</div>

				<h3 className="flex my-3 items-center gap-x-3">
					<b className="capitalize text-[20px]">имя Ru :</b>
					<p className="text-blue-700 text-[20px] font-semibold capitalize">
						{single__products?.data?.data?.name_Ru}
					</p>
				</h3>

				<div className="my-2">
					<h2 className="my-4 flex items-center gap-x-3">
						<b className="capitalize  text-[20px]">{i18next.t("gendor")} :</b>
						<p className="capitalize">{single__products?.data?.data?.gender}</p>
					</h2>
				</div>

				<div className="my-2">
					<h3 className="flex items-center gap-x-2">
						<b className="capitalize text-[20px] font-bold">скидка : </b>
						<p className="font-bold">
							{single__products?.data?.data?.discount}
						</p>
						<div className="flex items-center gap-x-2">
							<b className="capitalize">{i18next.t("price")} :</b>
							<del className="font-bold">
								{single__products?.data?.data?.price}
							</del>
						</div>
					</h3>
				</div>

				<h3 className="flex my-3 items-center gap-x-3">
					<b className="text-[20px] capitalize">описание узбекский : </b>
					<p className="text-blue-700 text-[20px] font-semibold capitalize">
						{single__products?.data?.data?.description_Uz}
					</p>
				</h3>

				<div className="flex items-center gap-3">
					<Popover>
						<Popover.Trigger>
							<Button auto className="bg-blue-500 text-white text-[20px]" flat>
								<FiShoppingCart />
							</Button>
						</Popover.Trigger>
						<Popover.Content>
							<Text
								className="text-[18px] font-bold"
								onClick={() => {
									addToCart(
										single__products?.data?.data,
										single__products?.data?.data?.id
									);
								}}
								css={{ p: "$4", cursor: "pointer" }}
							>
								{i18next.t("karzinkagaQoshish")}
							</Text>
						</Popover.Content>
					</Popover>
				</div>
			</div>
		</div>
	);
}
