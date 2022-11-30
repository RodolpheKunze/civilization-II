import React from 'react';
import Document, { DocumentContext } from 'next/document';

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<any> {
    try {
      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: <>{initialProps.styles}</>,
      };
    } catch (error) {
      return false;
    }
  }
}
