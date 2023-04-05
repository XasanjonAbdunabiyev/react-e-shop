import { Link, useNavigate } from "react-router-dom";
import React from "react";
import "./footer.scss";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import { useGetData } from "../../../hooks/useGetData";
import visa from "../../../assets/images/visa.svg";
import { GrFacebook } from "react-icons/gr";
import footerLogo from "../../../assets/images/logoFooter.svg";
import { SiInstagram } from "react-icons/si";
export default function Footer() {
  // navigate react-router-dom
  const navigate = useNavigate();
  // translate

  const { t } = useTranslation();

  const informationFooter = useGetData(["messages__footer"], "/information");

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <div className="footer__logo" data-aos="zoom-out">
            <Link to={"/"}>
              <img src={footerLogo} alt="" />
            </Link>
          </div>

          <ul className="footer__links" data-aos="zoom-in-down">
            <h1 className="text-white capitalize text-[23px] mb-2">
              Услуги и сервисы
            </h1>
            <li
              className="footer__link"
              onClick={() => {
                navigate("/");
              }}
            >
              {i18next.t("home")}
            </li>
            <li
              className="footer__link"
              onClick={() => {
                navigate("/information");
              }}
            >
              {i18next.t("information")}
            </li>
            <li
              className="footer__link"
              onClick={() => {
                navigate("/message");
              }}
            >
              {i18next.t("message")}
            </li>
            <li
              className="footer__link"
              onClick={() => {
                navigate("/all_product");
              }}
            >
              {i18next.t("product")}
            </li>
          </ul>

          <div data-aos="zoom-in-up">
            <div className="my-1">
              <h1 className="text-white capitalize text-[25px] mb-2">
                {i18next.t("information")}
              </h1>
              <p className="capitalize text-white text-[20px]">
                {i18next.t("email")} :{" "}
              </p>
              <div className="flex items-center gap-1">
                <Link
                  target={"_blank"}
                  className="uppercase block text-white font-bold"
                  to={`https://mail.google.com/mail${informationFooter?.data?.data?.data[0]?.email}`}
                >
                  {informationFooter?.data?.data?.data[0]?.email}
                </Link>
              </div>
            </div>
            <div className="my-2">
              <p className="capitalize my-2 text-[20px] text-white font-bold">
                {i18next.t("phone")}
              </p>
              {informationFooter?.data?.data?.data[0]?.phone?.map(
                (element, value) => {
                  return (
                    <a
                      key={value}
                      className="capitalize block text-white font-bold"
                      href={`tel:+${element}`}
                    >
                      {element}
                    </a>
                  );
                }
              )}
            </div>
          </div>

          <div className="footer__brends" data-aos="zoom-in">
            <p>Следите за нами</p>
            <div className="brends__footer_item">
              <Link to={"https://facebook.com"}>
                <GrFacebook className="text-white" />
              </Link>
              <Link to={"https://instagram.com"}>
                <SiInstagram className="text-white" />
              </Link>
            </div>
          </div>
        </div>
        <br />

        <div
          style={{
            borderTop: "2px solid #fff",
            paddingTop: "10px",
          }}
          className="flex  my-2 py-2 items-center justify-between"
        >
          <div>
            <p className="text-white border-t-4 border-white text-[18px]">
              2008-2021 Интернет-магазин v-comp.com.ua Все права защищены
            </p>
          </div>

          <div>
            <img src={visa} alt="" />
          </div>
        </div>
      </div>
    </footer>
  );
}
