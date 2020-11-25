import { NowRequest, NowResponse } from '@vercel/node';

export default (_: NowRequest, response: NowResponse): NowResponse => {
  return response.json({
    Anexo: [
      {
        Id: '1f320-001',
        Descricao: 'Pediatria',
      },
      {
        Id: '1f320-002',
        Descricao: 'Cirurgia Geral',
      },
      {
        Id: '1f320-003',
        Descricao: 'Cardiologia',
      },
      {
        Id: '1f320-004',
        Descricao: 'Ginecologia e Obstetrícia',
      },
      {
        Id: '1f320-005',
        Descricao: 'Anestesiologia',
      },
      {
        Id: '1f320-006',
        Descricao: 'Medicina do Trabalho,',
      },
    ],
  });
};
