import React from 'react'
import styled from 'styled-components'

const BannerStyled = styled.div`
  height: 300px;
  background: url("images/banner.jpg");
  background-position: center;
  background-size:cover;
  filter:contrast(80%);
  display:flex;
  justify-content:center;
  align-items:center
`;
const Banner = () => {
    return (
      <BannerStyled>
        <h1 style={{ color: "white" }}>Live 😃 . Love 💕 . Eat 🍔</h1>
      </BannerStyled>
    );
}

export default Banner
