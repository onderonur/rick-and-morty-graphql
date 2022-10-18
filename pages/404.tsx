import React from 'react';
import ErrorMessage from '@/error-handling/ErrorMessage';

function NotFound404Page() {
  return <ErrorMessage statusCode={404} message="Page Not Found" />;
}

export default NotFound404Page;
