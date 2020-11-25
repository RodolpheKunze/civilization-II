import styled from 'styled-components';

export const Container = styled.div`
  & > header {
    color: #fff;
    margin: 20px auto 30px auto;
    p {
      margin-bottom: 5px;
    }
  }

  .github {
    .image {
      width: 80px;
      margin: 50px auto 0 auto;
    }
  }
`;

export const Grid = styled.section`
  padding: 20px;
  width: 100%;
`;

export const Slot = styled.div`
  flex: 1;
  padding: 0 15px;

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
