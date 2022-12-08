import React, { memo, Component } from 'react'

import { Container } from 'react-bootstrap'
import Slider from 'react-slick'

import FavCharacterCard from 'components/FavCharacterCard'
import MainTitles from 'components/MainTitles'

import { DivSlide, StyledSection } from './styles'

const FavoriteCharacters: React.FC = () => {
  //  1009351, 1009610, 1009189, 1009664, 1009187, 1009368, 1009652
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  }

  document.querySelector(
    '#root > main > section.sc-fbYMXx.GfNxV > div > div.slick-slider.slick-initialized > button.slick-arrow.slick-next',
  )
  return (
    <StyledSection>
      <Container className="py-3 py-md-5">
        <div className="d-flex justify-content-between">
          <MainTitles title="PERSONAGENS EM DESTAQUE" color="white" />
          <div>
            <button
              type="button"
              data-role="none"
              className="slick-arrow slick-next"
              style={{ display: 'block' }}
            >
              Next
            </button>
          </div>
        </div>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Slider {...settings}>
          <div>
            <FavCharacterCard id={1009351} />
          </div>
          <div>
            <FavCharacterCard id={1009610} />
          </div>
          <div>
            <FavCharacterCard id={1009189} />
          </div>
          <div>
            <FavCharacterCard id={1009664} />
          </div>
          <div>
            <FavCharacterCard id={1009187} />
          </div>
          <div>
            <FavCharacterCard id={1009368} />
          </div>
          <div>
            <FavCharacterCard id={1009652} />
          </div>
        </Slider>
        {/* <DivSlide className="d-flex g-5">
          <FavCharacterCard id={1009351} />

          <FavCharacterCard id={1009610} />

          <FavCharacterCard id={1009189} />

          <FavCharacterCard id={1009664} />

          <FavCharacterCard id={1009187} />

          <FavCharacterCard id={1009368} />

          <FavCharacterCard id={1009652} />
        </DivSlide> */}
      </Container>
    </StyledSection>
  )
}

export default memo(FavoriteCharacters)
