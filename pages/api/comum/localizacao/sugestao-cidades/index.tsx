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

const cidades = [
  {
    Id: '1dd13c12-f46d-11ea-aa31-000d3ac04219',
    EstadoId: 'c8f4fbac-f46b-11ea-aa31-000d3ac04219',
    Nome: 'CAMPINAS',
    Ibge: '3509502',
    Lat: -22.9073425,
    Long: -47.0601562729732,
    Estado: null,
  },
  {
    Id: '1dd39e7d-f46d-11ea-aa31-000d3ac04219',
    EstadoId: 'c8f4fbac-f46b-11ea-aa31-000d3ac04219',
    Nome: 'JUNDIAÍ',
    Ibge: '3525904',
    Lat: -23.187668,
    Long: -46.8852739679967,
    Estado: null,
  },
  {
    Id: '1dd60119-f46d-11ea-aa31-000d3ac04219',
    EstadoId: 'c8f4fbac-f46b-11ea-aa31-000d3ac04219',
    Nome: 'VALINHOS',
    Ibge: '3556206',
    Lat: -22.971244,
    Long: -46.9966300275552,
    Estado: null,
  },
  {
    Id: '1dd60120-f46d-11ea-aa31-000d3ac04219',
    EstadoId: 'c8f4fbac-f46b-11ea-aa31-000d3ac04219',
    Nome: 'VINHEDO',
    Ibge: '3556701',
    Lat: -23.0305383241408,
    Long: -46.9764763090797,
    Estado: null,
  },
];

export default async (request: NowRequest, response: NowResponse): Promise<NowResponse> => {
  await cors(request, response);

  const term = request.body.Termo || '';

  const result = cidades.filter((city) => {
    const cityName = city.Nome.toLowerCase();

    return cityName.includes(term.toLowerCase());
  });

  return response.json({
    Nome: 'Doutor No Vídeo - WebAPI',
    Versao: '1.0.1',
    Adicional: '128.201.220.53',
    Erro: null,
    Data: '2020-09-30T16:50:55.1847989-03:00',
    Anexo: result,
  });
};
