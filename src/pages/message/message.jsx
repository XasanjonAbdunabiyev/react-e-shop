import React, { useRef, useState } from "react";
import i18next from "i18next";
import { Collapse, Card, Input } from "@nextui-org/react";
import { useTranslation } from "react-i18next";
import { useGetData } from "../../hooks/useGetData";
import "./message.scss";
import ModalCom from "../../components/modal/modal";
import { FaAnchor, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { usePostData } from "../../hooks/usePostData";
import { Loading } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
export default function Message() {
	// translate t

	const { t } = useTranslation();

	// get messages
	const messagesData = useGetData(["messages"], "/message");

	// search
	const [search, setSearch] = useState("");

	// modal state
	const [show, setShow] = useState(false);

	// input value
	const subject = useRef("");
	const phoneNumber = useRef("");
	const desciption = useRef("");

	// single message
	const [isShow, setIsShow] = useState(false);

	// navigate react-router-dom
	const navigate = useNavigate();

	// submit function
	const postDataSubmit = usePostData("/message");
	function SubmitPostData(e) {
		e.preventDefault();
		postDataSubmit.mutate({
			subject: subject?.current?.value,
			phone: phoneNumber?.current?.value,
			message: desciption?.current?.value,
			status: "PENDING",
		});

		subject.current.value = "";
		phoneNumber.current.value = null;
		desciption.current.value = "";
		setShow(false);
	}

	//// show modal
	function mainFormShow() {
		setIsShow(true);
		setShow(true);
	}

	//// close Modal
	function closeModal() {
		setShow(false);
		setIsShow(false);
	}

	const { isLoading } = messagesData;

	return (
		<div className="message">
			<div className="container">
				<h1 className="message__title">{i18next.t("message")}</h1>

				<div className="message_post">
					<button
						className="bg-blue-500 py-1 px-5 my-4 rounded-md text-white  text-[20px] text-center"
						onClick={(e) => mainFormShow(e)}
					>
						{i18next.t("qoshish")}
					</button>

					<p className="my-4 text-[19px]">
						Введите адрес элекронной почты. На вашу почту будет выслано письмо
						со ссылкой для подтверждения.
					</p>
				</div>

				<div
					className={show ? "form" : "hidden"}
					onClick={() => closeModal()}
				></div>

				<form
					className={show ? "main_form_container" : "hidden"}
					onSubmit={(e) => SubmitPostData(e)}
				>
					<div className="close_btn_form" onClick={() => closeModal()}>
						<FaTimes className="text-[25px] cursor-pointer" />
					</div>

					<div>
						<h1 className="text-black">Приветствуем!</h1>
						<p className="text-black">
							Вы уже были нашим клиентом ранее, поэтому в вашем личном кабинете
							мы уже отобразили всю информацию по вашим предыдущим покупкам в
							нашем магазине.
						</p>
					</div>

					<input
						type="text"
						ref={subject}
						required
						placeholder="Изменение ФИО..."
					/>

					<input
						required
						pattern="+[0-9]{3}-[0-9]{3}-[0-9]{4}"
						minLength="4"
						maxLength="11"
						size="10"
						type="tel"
						ref={phoneNumber}
						placeholder="Номер телефона..."
					/>

					<textarea
						type="text"
						ref={desciption}
						required
						placeholder="Комментарий..."
					/>
					<button>ОТПРАВИТЬ</button>
				</form>

				<div className={isShow ? "py-5 px-6 my-4 border" : "hidden"}>
					{isLoading ? (
						<section>
							<Loading />
						</section>
					) : null}

					<h2 className="text-[20px] my-2 py-3  uppercase font-semibold border-b-2 border-blue-500">
						{i18next.t("add_message")}
					</h2>
					<h1 className="text-[20px] my-3 flex items-center gap-x-2">
						<b className="text-[18px] capitalize">{i18next.t("subject")}:</b>
						<p className="text-[14px] font-bold">
							{" "}
							{postDataSubmit?.data?.subject}
						</p>
					</h1>

					<h1 className="text-[20px] my-3 flex items-center gap-x-2">
						<b className="text-[18px] capitalize">состояние:</b>
						<p className="text-[14px] font-bold">PENDING</p>
					</h1>

					<h3 className="text-[20px] flex items-center gap-x-2 my-3">
						<b className="text-[18px]  capitalize">
							{i18next.t("information")}:
						</b>
						<p className="text-[14px] font-bold">
							{postDataSubmit?.data?.message}
						</p>
					</h3>

					<h3 className="text-[20px] flex items-center gap-x-2 my-3">
						<b className="text-[18px] capitalize">{i18next.t("phone")} : </b>
						<p className="text-[14px] font-bold">
							{" "}
							{postDataSubmit?.data?.phone}
						</p>
					</h3>

					<br />
					<Button
						className="bg-blue-500"
						onClick={() => navigate(`/message/${postDataSubmit?.data?.id}`)}
					>
						{i18next.t("details")}
					</Button>
				</div>

				<div>
					<div className="my-3">
						<ModalCom />
					</div>

					<div className="my-4">
						<Collapse.Group animated={true} borderWeight={"bold"}>
							<Collapse
								shadow
								className="text-[20px]"
								title={`Bсе ${i18next.t("message")}`}
								arrowIcon={<FaAnchor className="text-black" />}
							>
								<Input
									width="100%"
									size="xl"
									onChange={(e) => setSearch(e.target.value)}
									type="text"
									labelPlaceholder="Поиск"
									underline
								/>

								<div className="message__grid">
									{messagesData?.data?.data?.data
										?.filter((element) => {
											if (search === "") {
												return element;
											} else if (element?.subject.includes(search)) {
												return element;
											}
										})
										.map((element, index) => {
											return (
												<Card className="border py-4 px-4" key={index}>
													<h3 className="flex gap-3 capitalize items-center">
														<b>{i18next.t("subject")}</b>
														<p className="uppercase ">
															{element?.subject.slice(0, 10)}
														</p>
													</h3>

													<h3 className="text-[20px] flex items-center gap-x-2">
														<b className="text-[15px] capitalize">
															{i18next.t("phone")}
														</b>
														<p className="text-[14px]"> {element?.phone}</p>
													</h3>

													<h3 className="text-[20px] flex items-center gap-x-2">
														<b className="text-[15px] capitalize">
															{i18next.t("information")}:
														</b>
														<p className="text-[14px]">{element?.message}</p>
													</h3>

													<h1 className="text-[20px]  flex items-center gap-x-2">
														<b className="text-[15px] capitalize">состояние:</b>
														<p className="text-[14px]">PENDING</p>
													</h1>
												</Card>
											);
										})}
								</div>
							</Collapse>
						</Collapse.Group>
					</div>
				</div>
			</div>
		</div>
	);
}
