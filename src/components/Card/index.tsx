import React, { useState, useCallback, useRef } from 'react';
import Modal from 'react-modal';

import { GiCardExchange } from 'react-icons/gi';
import { TiArrowBackOutline } from 'react-icons/ti';

import { useDrag, useDrop } from 'react-dnd';

import Image from 'components/Image';

import { Container, ModalContent, ChangeCardButton } from './styles';

export interface CardProps {
  index: number;
  id: number;
  type: string;
  moveCard: (dragIndex: number, hoverIndex: number) => void;
}

interface DragItem {
  index: number;
  id: string;
  type: string;
}

const ItemTypes = {
  CARD: 'card',
};

const Card: React.FC<CardProps> = ({ type, moveCard, index, id }) => {
  const [modal, setModal] = useState<boolean>(false);

  const [cardLevel, setCardLevel] = useState<number>(1);

  const getNewLevel = useCallback((level: number): number => {
    let newLevel = level + 1;
    if (newLevel > 4) newLevel = 1;
    return newLevel;
  }, []);

  /* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

  const ref = useRef<HTMLDivElement>(null);
  const [, drop] = useDrop({
    accept: ItemTypes.CARD,
    hover(item: DragItem) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;

      // Don't replace items with themselves
      if (dragIndex === hoverIndex) {
        return;
      }

      moveCard(dragIndex, hoverIndex);

      item.index = hoverIndex;
    },
  });

  const [{ isDragging }, drag] = useDrag({
    item: { type: ItemTypes.CARD, id, index },
    collect: (monitor: any) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const opacity = isDragging ? 0 : 1;
  drag(drop(ref));

  return (
    <Container ref={ref} style={{ opacity }}>
      <button type="button" onClick={() => setModal(true)}>
        <Image src={`/cards/${type}-${cardLevel}.jpg`} width={538} height={837} alt="Card" />
      </button>

      <ChangeCardButton
        onClick={() => {
          setCardLevel((oldState) => {
            return getNewLevel(oldState);
          });
        }}
      >
        <GiCardExchange />
      </ChangeCardButton>

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
