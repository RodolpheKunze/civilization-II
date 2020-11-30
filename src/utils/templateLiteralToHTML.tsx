/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/no-danger */
import React from 'react';

const templateLiteralToHTML = (html: string): any => {
  return <span dangerouslySetInnerHTML={{ __html: html }} />;
};

export default templateLiteralToHTML;
