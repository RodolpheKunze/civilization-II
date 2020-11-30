import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  & > header {
    padding-top: 20px;
    ul {
      display: flex;
      justify-content: center;
      margin: 20px;
      li {
        padding: 0 10px;
        img {
          width: 40px !important;
          height: auto !important;
        }
      }
    }
  }
`;

export const Grid = styled.section`
  padding: 20px;
  width: 100%;
`;

export const Slot = styled.div`
  flex: 1;
  padding: 0 5px;

  float: left;
  width: 20%;
`;

type SlotHeaderProps = {
  background: string;
};
export const SlotHeader = styled.div.attrs<SlotHeaderProps>(({ background }) => ({
  style: {
    backgroundImage: `url(/${background})`,
  },
}))<SlotHeaderProps>`
  background-size: cover;

  padding: 10px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  border: 2px solid #c5c0a8;
  border-radius: 3px;

  p {
    display: flex;
    justify-content: center;
    align-items: center;

    background: #999;
    color: #fff;
    border: 2px solid #c5c0a8;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    font-weight: bold;
  }
`;

export const ModalContainer = styled.div`
  padding: 20px;

  header {
    ul {
      display: flex;
      justify-content: center;
      margin-bottom: 20px;
      li {
        padding: 0 10px;
        img {
          width: 30px !important;
        }
      }
    }

    h1,
    h2 {
      font-size: 20px;
      font-weight: 700;
      text-align: center;
    }
    h2 {
      font-size: 16px;
    }
  }

  section {
    border-top: 1px solid #efefef;
    border-bottom: 1px solid #efefef;
    padding: 20px 0;
    margin: 20px 0;
    p {
      font-size: 16px;
      line-height: 20px;
    }
  }

  footer {
    h4 {
      font-size: 16px;
      font-weight: 700;
      text-align: center;
    }

    p {
      font-size: 13px;
      margin-bottom: 10px;
      strong {
        padding-right: 5px;
      }
    }

    a {
      color: #5d96f4;
      text-decoration: underline;
      font-size: 13px;
    }

    .has-flag span {
      margin-right: 5px;
    }
  }
`;
