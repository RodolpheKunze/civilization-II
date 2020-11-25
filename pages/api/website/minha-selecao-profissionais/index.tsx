/* eslint-disable no-plusplus */
import { NowRequest, NowResponse } from '@vercel/node';
import Cors from 'cors';

import middleware from 'middleware';

// Initialize the cors middleware
const cors = middleware(
  // You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
  Cors({
    origin: '*',
    // Only allow requests with  POST
    methods: ['POST'],
  })
);

export default async (request: NowRequest, response: NowResponse): Promise<NowResponse> => {
  await cors(request, response);

  return response.json({
    Anexo: [
      {
        Id: '64bf984e-8a67-451c-ae59-a5a2d15f61bd',
        Nome: 'Dr. Daniel Bleivas Bergwerk',
        Propriedades: [
          {
            Id: '33-7f30-4d99-8f23-b68c89f614a5',
            PessoaId: '64bf984e-8a67-451c-ae59-a5a2d15f61bd',
            Tipo: 'FOTO',
            Valor: 'https://doutor-no-video-medico-mock-api.vercel.app/images/doctor-thumb.png',
            Inclusao: '2020-09-23T16:06:14',
            Alteracao: null,
          },
        ],
      },
      {
        Id: '64bf984e-8a67-451c-ae59-a5a2d15f61bd',
        Nome: 'Dr. Daniel Bleivas Bergwerk',
        Propriedades: [
          {
            Id: '33-7f30-4d99-8f23-b68c89f614a5',
            PessoaId: '64bf984e-8a67-451c-ae59-a5a2d15f61bd',
            Tipo: 'FOTO',
            Valor: 'https://doutor-no-video-medico-mock-api.vercel.app/images/doctor-thumb.png',
            Inclusao: '2020-09-23T16:06:14',
            Alteracao: null,
          },
        ],
      },
      {
        Id: '64bf984e-8a67-451c-ae59-a5a2d15f61bd',
        Nome: 'Dr. Daniel Bleivas Bergwerk',
        Propriedades: [
          {
            Id: '33-7f30-4d99-8f23-b68c89f614a5',
            PessoaId: '64bf984e-8a67-451c-ae59-a5a2d15f61bd',
            Tipo: 'FOTO',
            Valor: 'https://doutor-no-video-medico-mock-api.vercel.app/images/doctor-thumb.png',
            Inclusao: '2020-09-23T16:06:14',
            Alteracao: null,
          },
        ],
      },
      {
        Id: '64bf984e-8a67-451c-ae59-a5a2d15f61bd',
        Nome: 'Dr. Daniel Bleivas Bergwerk',
        Propriedades: [
          {
            Id: '33-7f30-4d99-8f23-b68c89f614a5',
            PessoaId: '64bf984e-8a67-451c-ae59-a5a2d15f61bd',
            Tipo: 'FOTO',
            Valor: 'https://doutor-no-video-medico-mock-api.vercel.app/images/doctor-thumb.png',
            Inclusao: '2020-09-23T16:06:14',
            Alteracao: null,
          },
        ],
      },
      {
        Id: '64bf984e-8a67-451c-ae59-a5a2d15f61bd',
        Nome: 'Dr. Daniel Bleivas Bergwerk',
        Propriedades: [
          {
            Id: '33-7f30-4d99-8f23-b68c89f614a5',
            PessoaId: '64bf984e-8a67-451c-ae59-a5a2d15f61bd',
            Tipo: 'FOTO',
            Valor: 'https://doutor-no-video-medico-mock-api.vercel.app/images/doctor-thumb.png',
            Inclusao: '2020-09-23T16:06:14',
            Alteracao: null,
          },
        ],
      },
      {
        Id: '64bf984e-8a67-451c-ae59-a5a2d15f61bd',
        Nome: 'Dr. Daniel Bleivas Bergwerk',
        Propriedades: [
          {
            Id: '33-7f30-4d99-8f23-b68c89f614a5',
            PessoaId: '64bf984e-8a67-451c-ae59-a5a2d15f61bd',
            Tipo: 'FOTO',
            Valor: 'https://doutor-no-video-medico-mock-api.vercel.app/images/doctor-thumb.png',
            Inclusao: '2020-09-23T16:06:14',
            Alteracao: null,
          },
        ],
      },
      {
        Id: '64bf984e-8a67-451c-ae59-a5a2d15f61bd',
        Nome: 'Dr. Daniel Bleivas Bergwerk',
        Propriedades: [
          {
            Id: '33-7f30-4d99-8f23-b68c89f614a5',
            PessoaId: '64bf984e-8a67-451c-ae59-a5a2d15f61bd',
            Tipo: 'FOTO',
            Valor: 'https://doutor-no-video-medico-mock-api.vercel.app/images/doctor-thumb.png',
            Inclusao: '2020-09-23T16:06:14',
            Alteracao: null,
          },
        ],
      },
      {
        Id: '64bf984e-8a67-451c-ae59-a5a2d15f61bd',
        Nome: 'Dr. Daniel Bleivas Bergwerk',
        Propriedades: [
          {
            Id: '33-7f30-4d99-8f23-b68c89f614a5',
            PessoaId: '64bf984e-8a67-451c-ae59-a5a2d15f61bd',
            Tipo: 'FOTO',
            Valor: 'https://doutor-no-video-medico-mock-api.vercel.app/images/doctor-thumb.png',
            Inclusao: '2020-09-23T16:06:14',
            Alteracao: null,
          },
        ],
      },
      {
        Id: '64bf984e-8a67-451c-ae59-a5a2d15f61bd',
        Nome: 'Dr. Daniel Bleivas Bergwerk',
        Propriedades: [
          {
            Id: '33-7f30-4d99-8f23-b68c89f614a5',
            PessoaId: '64bf984e-8a67-451c-ae59-a5a2d15f61bd',
            Tipo: 'FOTO',
            Valor: 'https://doutor-no-video-medico-mock-api.vercel.app/images/doctor-thumb.png',
            Inclusao: '2020-09-23T16:06:14',
            Alteracao: null,
          },
        ],
      },
      {
        Id: '64bf984e-8a67-451c-ae59-a5a2d15f61bd',
        Nome: 'Dr. Daniel Bleivas Bergwerk',
        Propriedades: [
          {
            Id: '33-7f30-4d99-8f23-b68c89f614a5',
            PessoaId: '64bf984e-8a67-451c-ae59-a5a2d15f61bd',
            Tipo: 'FOTO',
            Valor: 'https://doutor-no-video-medico-mock-api.vercel.app/images/doctor-thumb.png',
            Inclusao: '2020-09-23T16:06:14',
            Alteracao: null,
          },
        ],
      },
    ],
  });
};
