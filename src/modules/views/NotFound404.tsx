import React from "react";
import ErrorMessage from "@/modules/shared/ErrorMessage";

function NotFount404() {
  return <ErrorMessage statusCode={404} message="Page Not Found" />;
}

export default NotFount404;
