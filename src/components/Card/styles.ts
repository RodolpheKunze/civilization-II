import styled from 'styled-components';

export const Container = styled.section`
  & > button {
    background: none;
    border-width: 0px;
    cursor: pointer;

    width: 100%;
    height: 100%;
  }

  .image {
    box-shadow: 0px 0px 5px 1px rgba(255, 255, 255, 0.5);
  }

  nav {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 10px 10px;
  }
`;

export const ChangeCardButton = styled.button`
  cursor: pointer;
  display: block;
  background: none;
  border-width: 0px;

  svg {
    color: #fff;
    width: 20px;
    height: 20px;
  }
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  button {
    display: flex;
    justify-content: center;
    align-items: center;

    background: rgba(0, 0, 0, 0.8);
    box-shadow: 0px 0px 5px 1px rgba(255, 255, 255, 0.2);
    border-width: 0px;
    margin-bottom: 15px;

    cursor: pointer;
    border-radius: 50%;
    margin-left: auto;
    width: 45px;
    height: 45px;

    svg {
      color: #fff;
      width: 20px;
      height: 20px;
    }
  }

  img {
    max-height: 80vh;
  }
`;
