import React from "react";
import { Loading } from "@nextui-org/react";
import "./loading.scss";
export default function LoadingComp() {
  return (
    <section className="loading__section">
      <Loading size="xl" className="z-50" />
    </section>
  );
}
