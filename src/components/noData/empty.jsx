import React from "react";
import noData from "../../assets/images/nodata.jpg";
import "./empty.scss";
import { useNavigate } from "react-router-dom";
import i18next from "i18next";
import Buttons from "../buttons";
import { useTranslation } from "react-i18next";
export default function Empty() {
  const nav = useNavigate();
  const { t } = useTranslation();
  return (
    <section className="empt-section ymy-4 py-4">
      <img src={noData} alt="..." />
      <p className="uppercase my-2 font-bold text-[20px]">нет данных</p>
      <b>К сожалению, запрашиваемая вами страница не найдена.</b>
      <p className="text-[20px]">
        Неправильно набран адрес или такой страницы на сайте больше не
        существует.
      </p>

      <Buttons title={i18next.t("back")} nav={nav} />
    </section>
  );
}
