"use client";

import useModal from "@/app/hooks/useModal";
import Confirmation from "./Confirmation";
import Form from "./Form";

const Client = () => {
  const modal = useModal();
  if (modal.isOpen) {
    return <Confirmation />;
  } else {
    return <Form />;
  }
};

export default Client;
