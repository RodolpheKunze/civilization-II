import React, { useState, useCallback } from 'react';

import { Modal, ModalOverlay, ModalContent, ModalCloseButton } from '@chakra-ui/react';

import { GiCardExchange } from 'react-icons/gi';
import { BsArrowRight, BsArrowBarLeft } from 'react-icons/bs';

import { useI18N } from 'i18n';

import Image from 'components/Image';

import { Container, ChangeCardButton, ModalContainer } from './styles';

export interface CardProps {
  index: number;
  id: number;
  type: string;
  moveCard: (actualIndex: number, newIndex: number) => void;
  moveCardToStart: (cardIndex: number) => void;
}

const Card: React.FC<CardProps> = ({ type, moveCard, moveCardToStart, index }) => {
  const { locale } = useI18N();

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
        <Image
          src={`/cards/${locale}/${type}-${cardLevel}.jpg`}
          width={538}
          height={837}
          alt="Card"
        />
      </button>
      <nav>
        <ChangeCardButton
          type="button"
          onClick={() => moveCardToStart(index)}
          disabled={index === 0}
          style={{
            opacity: index !== 0 ? 1 : 0,
          }}
        >
          <BsArrowBarLeft size={30} />
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
          <BsArrowRight size={30} />
        </ChangeCardButton>
      </nav>

      <Modal isOpen={modal} onClose={() => setModal(false)}>
        <ModalOverlay />
        <ModalContent>
          <ModalContainer>
            <ModalCloseButton />
            <img src={`/cards/${locale}/${type}-${cardLevel}.jpg`} alt="Card" />
          </ModalContainer>
        </ModalContent>
      </Modal>
    </Container>
  );
};

export default Card;
