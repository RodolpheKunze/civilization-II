import React, { useState, useCallback } from 'react';

import { Modal, ModalOverlay, ModalContent, ModalCloseButton } from '@chakra-ui/react';

import ReactCountryFlag from 'react-country-flag';
import update from 'immutability-helper';

import { useI18N } from 'i18n';

import Card from 'components/Card';

import templateLiteralToHTML from 'utils/templateLiteralToHTML';

import { Container, Grid, Slot, SlotHeader, ModalContainer } from './styles';

const Home: React.FC = () => {
  const { t, changeLocale } = useI18N();

  const [modal, setModal] = useState<boolean>(true);

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

  // Change cards position based on index
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

  // Send card to start of array
  const moveCardToStart = useCallback((cardIndex: number) => {
    setCards((oldState) => {
      return [
        oldState[cardIndex],
        ...oldState.filter((e, i) => {
          if (cardIndex !== i) return e;
          return null;
        }),
      ];
    });
  }, []);

  return (
    <Container>
      <header>
        <ul>
          <li>
            <button type="button" onClick={() => changeLocale('en')}>
              <ReactCountryFlag countryCode="US" svg />
            </button>
          </li>
          <li>
            <button type="button" onClick={() => changeLocale('pt_br')}>
              <ReactCountryFlag countryCode="BR" svg />
            </button>
          </li>
          <li>
            <button type="button" onClick={() => changeLocale('es')}>
              <ReactCountryFlag countryCode="ES" svg />
            </button>
          </li>
        </ul>
      </header>
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
              <Card {...card} moveCard={moveCard} moveCardToStart={moveCardToStart} index={index} />
            </Slot>
          );
        })}
      </Grid>

      <Modal isOpen={modal} onClose={() => setModal(false)} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />

          <ModalContainer>
            <header>
              <ul>
                <li>
                  <button type="button" onClick={() => changeLocale('en')}>
                    <ReactCountryFlag countryCode="US" svg />
                  </button>
                </li>
                <li>
                  <button type="button" onClick={() => changeLocale('pt_br')}>
                    <ReactCountryFlag countryCode="BR" svg />
                  </button>
                </li>
                <li>
                  <button type="button" onClick={() => changeLocale('es')}>
                    <ReactCountryFlag countryCode="ES" svg />
                  </button>
                </li>
              </ul>
              <h1>{t.title}</h1>
              <h2>{t.subTitle}</h2>
            </header>
            <section>
              <p>{templateLiteralToHTML(t.description)}</p>
            </section>
            <footer>
              <h4>{t.credits.label}</h4>
              <p>
                <strong>{t.credits.game}</strong>
                Fantasy Flight
              </p>
              <p>
                <strong>{t.credits.project}</strong>
                Dânio Filho
                <br />
                <a
                  href="https://github.com/daniofilho/civilization-new-dawn-automated-player"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://github.com/daniofilho/civilization-new-dawn-automated-player
                </a>
              </p>
              <p>
                <strong>{t.credits.translation}</strong>
              </p>
              <p className="has-flag">
                <ReactCountryFlag countryCode="US" />
                <span>Fantasy Flight</span>
              </p>
              <p className="has-flag">
                <ReactCountryFlag countryCode="BR" />
                <span>Yuri Melo</span>
              </p>
              <p className="has-flag">
                <ReactCountryFlag countryCode="ES" />
                <span>Daniel Bescós</span>
              </p>
            </footer>
          </ModalContainer>
        </ModalContent>
      </Modal>
    </Container>
  );
};

export default Home;
