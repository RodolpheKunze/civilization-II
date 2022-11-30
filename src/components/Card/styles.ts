import styled from 'styled-components';

export const Container = styled.section`
  & > button {
    background: none;
    border-width: 0px;
    cursor: pointer;

    width: 100%;
    height: 100%;
  }

  nav {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 10px 20px;

    button {
      width: 30%;
      background: #557dc1;
      margin: 2px;
      color: #fff;

      border-radius: 5px;

      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;

      height: 50px;
      width: 50px;

      svg {
        color: #fff;
      }
    }

    h5 {
      color: #fff;
      text-align: center;
      display: flex;
      flex-direction: row;
      align-items: center;
      font-size: 26px;

      svg {
        color: #fff;
        margin-right: 10px;
      }
    }
  }
`;

export const ChangeCardButton = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border-width: 0px;

  svg {
    color: #fff;
  }
`;

export const ModalContainer = styled.div`
  .chakra-modal__close-btn,
  .chakra-modal__close-btn:hover {
    background-color: #fff;
    right: -20px;
    top: -20px;
  }
`;
