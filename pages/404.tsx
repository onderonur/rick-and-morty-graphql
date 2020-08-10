import React from "react";
import ErrorView from "@/views/Error";

function NotFount404() {
  return <ErrorView statusCode={404} message="Not Found" />;
}

export default NotFount404;
