import i18next from "i18next";
import React from "react";
import { useGetData } from "../../hooks/useGetData";
import { ImInstagram } from "react-icons/im";
import { MdMarkEmailUnread } from "react-icons/md";
import "./information.scss";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import LoadingComp from "../../components/loading/loading";
import Empty from "../../components/noData/empty";
function Information() {
  const informationData = useGetData([`information`], "/information");
  const { t } = useTranslation();
  const { isLoading } = informationData;
  const parse = require("html-react-parser");

  return (
    <div className="information">
      {isLoading ? (
        <>
          <LoadingComp />
        </>
      ) : null}

      {informationData?.data?.data?.total <= 0 ? (
        <section>
          <Empty />
        </section>
      ) : (
        <div className="container">
          <div className="information__content">
            <h1 className="information__title">{i18next.t("information")}</h1>
          </div>
          <div className="information__wrapper">
            <div className="flex items-center gap-2">
              <b className="capitalize">{i18next.t("informationAddress")} : </b>
              <h1 className="text-[20px] uppercase">
                {informationData?.data?.data?.data[0]?.address}
              </h1>
            </div>
            <div className="flex gap-3 items-center">
              <p className="capitalize text-[17px]">{i18next.t("email")} : </p>
              <div className="flex items-center gap-1">
                <MdMarkEmailUnread />
                <Link
                  target={"_blank"}
                  className="uppercase font-bold"
                  to={`https://mail.google.com/mail${informationData?.data?.data?.data[0]?.email}`}
                >
                  {informationData?.data?.data?.data[0]?.email}
                </Link>
              </div>
            </div>
            <div className="my-2 flex items-center gap-2">
              <p className="capitalize font-bold">{i18next.t("phone")}</p>
              {informationData?.data?.data?.data[0]?.phone?.map(
                (element, value) => {
                  return (
                    <a
                      key={value}
                      className="capitalize font-bold"
                      href={`tel:+${element}`}
                    >
                      {element}
                    </a>
                  );
                }
              )}
            </div>
            <div className="flex items-center gap-2">
              <p className="capitalize text-[17px]">Instagram : </p>
              <Link
                className="uppercase font-bold"
                target={"_blank"}
                to={`https://www.instagram.com/${informationData?.data?.data?.data[0]?.instagram}`}
              >
                {informationData?.data?.data?.data[0]?.instagram}
              </Link>
              <ImInstagram className="text-[20px]" />
            </div>
            <div className="information__iframe">
              <p className="capitalize text-[20px]">
                {i18next.t("informationAddress")} : Map
              </p>
              {parse(`${informationData?.data?.data?.data[0]?.addressMap}`)}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default React.memo(Information);
