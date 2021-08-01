import React from "react";
import ErrorMessage from "@/common/ErrorMessage";

function NotFound404View() {
  return <ErrorMessage statusCode={404} message="Page Not Found" />;
}

export default NotFound404View;
