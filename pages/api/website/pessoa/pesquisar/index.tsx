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

const mock = {
  Id: '64bf984e-8a67-451c-ae59-a5a2d15f61bd',
  Tipo: 100200,
  Nome: 'Dr. Daniel Bleivas Bergwerk',
  Titulo: 'Ortopedista especialista em ombro',
  Nascimento: '2000-01-01T00:00:00',
  Genero: 100100,
  Documento: '12.123.123-12',
  Email: 'email@teste.com',
  Telefone: '(19) 9999 9999',
  Whatsapp: null,
  Inclusao: '2020-09-23T16:06:10',
  Alteracao: '2020-09-23T17:50:10',
  Situacao: 100100,
  Atendimentos: [
    {
      Id: 'ec3d5d04-11ad-4f8a-99f6-4ba04bdd2b75',
      PessoaId: '64bf984e-8a67-451c-ae59-a5a2d15f61bd',
      EnderecoId: '92e0aa46-3324-4528-bd14-d8e0c90dac1b',
      Tipo: 100100,
      Descricao: 'Descrição Temp',
      HoraInicio: '09h30',
      HoraFim: '11h00',
      Adicional: null,
      Email: 'email_do_consultorio@email.com',
      Telefone: '(19) 8888 4444',
      Whatsapp: null,
      Inclusao: '2020-09-23T16:19:59',
      Alteracao: '2020-09-23T16:31:04',
      Endereco: {
        Id: '92e0aa46-3324-4528-bd14-d8e0c90dac1b',
        CidadeId: '1dd13c7e-f46d-11ea-aa31-000d3ac04219',
        Logradouro: 'Rua Teste',
        Numero: '101',
        Complemento: null,
        Bairro: 'Centro',
        Cep: '13000-000',
        Lat: -22.8904002,
        Long: -47.0571024,
        Inclusao: '2020-09-23T16:45:59',
        Alteracao: null,
        Cidade: {
          Id: '1dd13c7e-f46d-11ea-aa31-000d3ac04219',
          EstadoId: 'c8f4fbac-f46b-11ea-aa31-000d3ac04219',
          Nome: 'CAMPINAS',
          Ibge: '3509502',
          Lat: -22.9061873,
          Long: -47.0600459,
          Estado: {
            Id: 'c8f4fbac-f46b-11ea-aa31-000d3ac04219',
            PaisId: '22f55209-f46a-11ea-aa31-000d3ac04219',
            Nome: 'SÃO PAULO',
            Sigla: 'SP',
            Pais: {
              Id: '22f55209-f46a-11ea-aa31-000d3ac04219',
              Nome: 'BRASIL',
              Sigla: 'BRA',
              Interface: 'PT-BR',
              Codificacao: 'ISO-8859-1',
            },
          },
        },
      },
      Procedimentos: [
        {
          Id: 'dbde2590-c4b1-4ee0-9eb8-0d342ed87948',
          AtendimentoId: 'ec3d5d04-11ad-4f8a-99f6-4ba04bdd2b75',
          ProcedimentoId: '14d598c0-fdd1-11ea-aa31-000d3ac04219',
          Inclusao: '2020-09-23T16:55:27',
          ProcedimentoOriginal: {
            Id: '14d598c0-fdd1-11ea-aa31-000d3ac04219',
            Descricao: 'Consultas',
            Adicional: null,
            Inclusao: '2020-09-23T16:15:02',
          },
        },
      ],
      Propriedades: null,
      Seguros: [
        {
          Id: '29ddaa3f-5c13-4fde-b60e-726546daad6e',
          AtendimentoId: 'ec3d5d04-11ad-4f8a-99f6-4ba04bdd2b75',
          SeguroId: '97478488-fcec-11ea-aa31-000d3ac04219',
          Inclusao: '2020-09-23T16:56:43',
          SeguroOriginal: {
            Id: '97478488-fcec-11ea-aa31-000d3ac04219',
            Descricao: 'Plano de Saúde 01',
            Adicional: null,
            Inclusao: '2020-09-22T12:59:26',
          },
        },
      ],
    },
  ],
  Atividades: null,
  Especialidades: [
    {
      Id: '61d557af-e804-4dbe-af09-4c757b96db89',
      PessoaId: '64bf984e-8a67-451c-ae59-a5a2d15f61bd',
      EspecialidadeId: '1f3ae95e-fbf6-11ea-aa31-000d3ac04219',
      Inclusao: '2020-09-23T17:06:50',
      EspecialidadeOriginal: {
        Id: '1f3ae95e-fbf6-11ea-aa31-000d3ac04219',
        EspecialidadeId: null,
        Descricao: 'Especialidade 10',
        Adicional: null,
        Inclusao: '2020-09-21T07:35:09',
        SubEspecialidades: null,
      },
    },
  ],
  Propriedades: [
    {
      Id: '68e6c4dd-7f30-4d99-8f23-b68c89f614a5',
      PessoaId: '64bf984e-8a67-451c-ae59-a5a2d15f61bd',
      Tipo: 'DOCUMENTO-MEDICO',
      Valor: 'CRM-SP-123',
      Inclusao: '2020-09-23T16:06:14',
      Alteracao: null,
    },
    {
      Id: '33-7f30-4d99-8f23-b68c89f614a5',
      PessoaId: '64bf984e-8a67-451c-ae59-a5a2d15f61bd',
      Tipo: 'FOTO',
      Valor: 'https://doutor-no-video-medico-mock-api.vercel.app/images/doctor-thumb.png',
      Inclusao: '2020-09-23T16:06:14',
      Alteracao: null,
    },
  ],
  Planos: null,
  Tags: [
    {
      Id: '540853bb-8cc8-4d1c-b0a2-856180fb8d9b',
      PessoaId: '64bf984e-8a67-451c-ae59-a5a2d15f61bd',
      TagId: 'c42f0c4a-fc35-11ea-aa31-000d3ac04219',
      Inclusao: '2020-09-23T17:08:04',
      TagOriginal: {
        Id: 'c42f0c4a-2-11ea-aa31-000d3ac04219',
        TagId: '00000000-0000-0000-0000-000000000000',
        Descricao: 'dor no braço',
        Adicional: null,
        Inclusao: '2020-09-21T15:14:45',
        SubTags: null,
      },
    },
    {
      Id: '540853bb-8cc8-4d1c-2-856180fb8d9b',
      PessoaId: '64bf984e-8a67-451c-ae59-a5a2d15f61bd',
      TagId: 'c42f0c4a-fc35-11ea-aa31-000d3ac04219',
      Inclusao: '2020-09-23T17:08:04',
      TagOriginal: {
        Id: 'c42f0c4a-fc35-11ea-aa31-000d3ac04219',
        TagId: '00000000-0000-0000-0000-000000000000',
        Descricao: 'ligamentos',
        Adicional: null,
        Inclusao: '2020-09-21T15:14:45',
        SubTags: null,
      },
    },
    {
      Id: '540853bb-8cc8-3-3-856180fb8d9b',
      PessoaId: '64bf984e-8a67-451c-ae59-a5a2d15f61bd',
      TagId: 'c42f0c4a-fc35-11ea-aa31-000d3ac04219',
      Inclusao: '2020-09-23T17:08:04',
      TagOriginal: {
        Id: 'c42f0c4a-fc35-4-aa31-000d3ac04219',
        TagId: '00000000-0000-0000-0000-000000000000',
        Descricao: 'pediatria',
        Adicional: null,
        Inclusao: '2020-09-21T15:14:45',
        SubTags: null,
      },
    },
  ],
  Videos: [
    {
      Id: '14f50e4c-6339-43a5-9000-a64b91fcd8ff',
      PessoaId: '64bf984e-8a67-451c-ae59-a5a2d15f61bd',
      Tipo: 100100,
      Titulo: 'Ponto em Comum',
      Conteudo:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis dui vitae diam faucibus iaculis. Ut sapien eros, dapibus sed erat vitae, eleifend lacinia quam. In eleifend neque sed turpis commodo luctus. Ut ultrices aliquet tortor, eu dapibus turpis gravida ac. Curabitur mattis malesuada consectetur.',
      Fonte:
        'https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8',
      Chave: null,
      Adicional: 'Vídeo bacana!',
      Inclusao: '2020-09-28T16:32:05',
      Alteracao: null,
      Situacao: 100100,
      Propriedades: [
        {
          Id: '68e6c4dd-7f30-4d99-8f23-b68c89f614a5',
          Tipo: 'VIDEO-LARGURA',
          Valor: '1000',
        },
        {
          Id: '68e6c4dd-7f30-4d99-8f23-b68c89f614a5',
          Tipo: 'VIDEO-ALTURA',
          Valor: '1300',
        },
        {
          Id: '68e6c4dd-7f30-4d99-8f23-b68c89f614a5',
          Tipo: 'THUMB',
          Valor: 'https://doutor-no-video-medico-mock-api.vercel.app/images/blur.jpg',
        },
      ],
    },
  ],
};

export default async (request: NowRequest, response: NowResponse): Promise<NowResponse> => {
  await cors(request, response);

  const results: any = [];

  new Array(5).fill('').map((_, i) => {
    const aux = mock;
    aux.Videos[0].Id = String(i);
    return results.push(mock);
  });

  return response.json({
    Anexo: results,
  });
};
