import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const BannerStyled = styled.div`
  height: 300px;
  background: url("images/banner.jpg");
  background-position: center;
  background-size:cover;
`;
const Banner = props => {
    return (
        <BannerStyled>
            
        </BannerStyled>
    )
}

Banner.propTypes = {

}

export default Banner
