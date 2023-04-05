import Layout from "../components/layouts/layout";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import Information from "../pages/information";
import Message from "../pages/message/message";
import Shop from "../pages/shop/shop";
import Product from "../pages/all__product/product";
import { useMode } from "../zustand/state";
import SingleMessages from "../pages/message/messages_single/singleMessages";
import ProductDetails from "../pages/all__product/productDetails/productDetails";
export default function App() {
	const theme = useMode((state) => state.mode);
	return (
		<div className="root_container" id={theme}>
			<Layout>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/information" element={<Information />} />
					<Route path="/message" element={<Message />} />
					<Route path="/message/:id" element={<SingleMessages />} />
					<Route path="/shop" element={<Shop />} />
					<Route path="/all_product" element={<Product />} />
					<Route path="/all_product/:id" element={<ProductDetails />} />
				</Routes>
			</Layout>
		</div>
	);
}
