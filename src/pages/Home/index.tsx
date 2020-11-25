import React, { useState, useCallback } from 'react';

import update from 'immutability-helper';

import Card from 'components/Card';
import Image from 'components/Image';

import { Container, Grid, Slot, SlotHeader } from './styles';

const Home: React.FC = () => {
  const [cards, setCards] = useState([
    {
      id: 1,
      type: 'culture',
    },
    {
      id: 2,
      type: 'military',
    },
    {
      id: 3,
      type: 'science',
    },
    {
      id: 4,
      type: 'industry',
    },
    {
      id: 5,
      type: 'economy',
    },
  ]);

  const moveCard = useCallback(
    (actualIndex: number, newIndex: number) => {
      const dragCard = cards[actualIndex];
      setCards(
        update(cards, {
          $splice: [
            [actualIndex, 1],
            [newIndex, 0, dragCard],
          ],
        })
      );
    },
    [cards]
  );

  return (
    <Container>
      <Grid>
        <Slot>
          <SlotHeader background="tile-grassland.jpg">
            <p>1</p>
          </SlotHeader>
        </Slot>
        <Slot>
          <SlotHeader background="tile-hills.jpg">
            <p>2</p>
          </SlotHeader>
        </Slot>
        <Slot>
          <SlotHeader background="tile-forest.jpg">
            <p>3</p>
          </SlotHeader>
        </Slot>
        <Slot>
          <SlotHeader background="tile-desert.jpg">
            <p>4</p>
          </SlotHeader>
        </Slot>
        <Slot>
          <SlotHeader background="tile-mountain.jpg">
            <p>5</p>
          </SlotHeader>
        </Slot>
      </Grid>

      <Grid>
        {cards.map((card, index) => {
          return (
            <Slot key={card.type}>
              <Card {...card} moveCard={moveCard} index={index} />
            </Slot>
          );
        })}
      </Grid>

      <a
        href="https://github.com/daniofilho/civilization-new-dawn-automated-player"
        target="_blank"
        className="github"
        rel="noopener noreferrer"
      >
        <Image src="/github.png" width={200} height={82} alt="Github" />
      </a>
    </Container>
  );
};

export default Home;
