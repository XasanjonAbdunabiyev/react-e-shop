import React from "react";
import { Button } from "@nextui-org/react";
export default function Buttons({ title, nav }) {
  return (
    <Button
      onClick={() => nav("/")}
      className="bg-blue-900 my-3 text-[20px] capitalize"
      color="secondary"
    >
      {title}
    </Button>
  );
}
