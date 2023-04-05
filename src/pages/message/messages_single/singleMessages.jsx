import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./singleMessage.scss";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import { useGetData } from "../../../hooks/useGetData";
import LoadingComp from "../../../components/loading/loading";
import { Button } from "@nextui-org/react";
export default function SingleMessages() {
  // translate
  const { t } = useTranslation();
  // id product
  const { id } = useParams();

  // navigate
  const navigate = useNavigate();
  const singleMessage = useGetData(["single__message"], `/message/${id}`);

  const { isLoading } = singleMessage;
  return (
    <div className="single__message">
      <div className="container">
        <h1 className="text-[25px] capitalize flex items-center gap-2">
          <p>{i18next.t("single")}</p>
          <p>{i18next.t("message")}</p>
        </h1>

        <div className="shadow rounded-md py-4 my-4 px-3">
          {singleMessage?.data?.data?.map((element, value) => {
            return (
              <div key={value}>
                <h1 className="text-[20px]   flex items-center gap-2">
                  <b className="capitalize">{i18next.t("message")} : </b>
                  <p> {element?.message}</p>
                </h1>
                <h2 className="text-[20px] my-4 flex items-center gap-2">
                  <b className="capitalize">{i18next.t("phone")} : </b>
                  <p>{element?.phone}</p>
                </h2>
                <h4 className="text-[20px] my-4 flex items-center gap-2">
                  <b className="capitalize">{i18next.t("subject")} : </b>
                  <p>{element?.subject}</p>
                </h4>

                <Button
                  onClick={() => navigate(-1)}
                  className="text-[20px] bg-blue-500"
                >
                  {i18next.t("back")}
                </Button>
              </div>
            );
          })}
        </div>

        {isLoading ? <LoadingComp /> : null}
      </div>
    </div>
  );
}
