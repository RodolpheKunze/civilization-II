import { NowRequest, NowResponse } from '@vercel/node';

import Cors from 'cors';

import middleware from 'middleware';

// Initialize the cors middleware
const cors = middleware(
  Cors({
    origin: '*',
    methods: ['POST'],
  })
);

export default async (request: NowRequest, response: NowResponse): Promise<NowResponse> => {
  await cors(request, response);

  return response.json({
    Anexo: true,
  });
};
