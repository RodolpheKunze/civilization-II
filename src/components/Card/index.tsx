import React, { useState, useCallback } from 'react';
import Modal from 'react-modal';

import { GiCardExchange } from 'react-icons/gi';
import { TiArrowBackOutline } from 'react-icons/ti';
import { BsFillCaretRightFill, BsFillCaretLeftFill } from 'react-icons/bs';

import Image from 'components/Image';

import { Container, ModalContent, ChangeCardButton } from './styles';

export interface CardProps {
  index: number;
  id: number;
  type: string;
  moveCard: (dragIndex: number, hoverIndex: number) => void;
}

const Card: React.FC<CardProps> = ({ type, moveCard, index }) => {
  const [modal, setModal] = useState<boolean>(false);

  const [cardLevel, setCardLevel] = useState<number>(1);

  const getNewLevel = useCallback((level: number): number => {
    let newLevel = level + 1;
    if (newLevel > 4) newLevel = 1;
    return newLevel;
  }, []);

  return (
    <Container>
      <button type="button" onClick={() => setModal(true)}>
        <Image src={`/cards/${type}-${cardLevel}.jpg`} width={538} height={837} alt="Card" />
      </button>
      <nav>
        <ChangeCardButton
          type="button"
          onClick={() => moveCard(index, index - 1)}
          disabled={index === 0}
          style={{
            opacity: index !== 0 ? 1 : 0,
          }}
        >
          <BsFillCaretLeftFill size={30} />
        </ChangeCardButton>

        <ChangeCardButton
          type="button"
          onClick={() => {
            setCardLevel((oldState) => {
              return getNewLevel(oldState);
            });
          }}
        >
          <GiCardExchange size={30} />
        </ChangeCardButton>

        <ChangeCardButton
          type="button"
          onClick={() => moveCard(index, index + 1)}
          disabled={index === 4}
          style={{
            opacity: index !== 4 ? 1 : 0,
          }}
        >
          <BsFillCaretRightFill size={30} />
        </ChangeCardButton>
      </nav>

      <Modal isOpen={modal} onRequestClose={() => setModal(false)}>
        <ModalContent>
          <button type="button" onClick={() => setModal(false)}>
            <TiArrowBackOutline />
          </button>
          <img src={`/cards/${type}-${cardLevel}.jpg`} alt="Card" />
        </ModalContent>
      </Modal>
    </Container>
  );
};

export default Card;
