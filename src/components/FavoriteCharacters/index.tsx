import React, { memo } from 'react'

import { Container } from 'react-bootstrap'
import Slider from 'react-slick'

import FavCharacterCard from 'components/FavCharacterCard'
import MainTitles from 'components/MainTitles'

import { StyledSection } from './styles'

const FavoriteCharacters: React.FC = () => {
  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    draggable: true,
    slidesToShow: 4,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
    ],
  }

  return (
    <StyledSection>
      <Container className="py-3 py-md-5">
        <div className="d-flex justify-content-between">
          <MainTitles title="PERSONAGENS EM DESTAQUE" color="white" />
        </div>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Slider {...settings}>
          <div>
            <FavCharacterCard
              imageUrl="https://i.annihil.us/u/prod/marvel/i/mg/5/a0/538615ca33ab0.jpg"
              name="Hulk"
              linkUrl="/characters/1009351/hulk"
            />
          </div>
          <div>
            <FavCharacterCard
              imageUrl="http://i.annihil.us/u/prod/marvel/i/mg/f/30/50fecad1f395b.jpg"
              name="Black Widow"
              linkUrl="/characters/1009189/Black-Widow"
            />
          </div>
          <div>
            <FavCharacterCard
              imageUrl="http://i.annihil.us/u/prod/marvel/i/mg/6/60/5261a80a67e7d.jpg"
              name="Black Panther"
              linkUrl="/characters/1009187/Black-Panther"
            />
          </div>
          <div>
            <FavCharacterCard
              imageUrl="http://i.annihil.us/u/prod/marvel/i/mg/3/50/526548a343e4b.jpg"
              name="Spider-Man"
              linkUrl="/characters/1009610/Spider-Man-(Peter-Parker)"
            />
          </div>
          <div>
            <FavCharacterCard
              imageUrl="http://i.annihil.us/u/prod/marvel/i/mg/9/c0/527bb7b37ff55.jpg"
              name="Iron Man"
              linkUrl="/characters/1009368/Iron-Man"
            />
          </div>
          <div>
            <FavCharacterCard
              imageUrl="http://i.annihil.us/u/prod/marvel/i/mg/d/d0/5269657a74350.jpg"
              name="Thor"
              linkUrl="/characters/1009664/Thor"
            />
          </div>
          <div>
            <FavCharacterCard
              imageUrl="http://i.annihil.us/u/prod/marvel/i/mg/6/40/5274137e3e2cd.jpg"
              name="Thanos"
              linkUrl="/characters/1009652/Thanos"
            />
          </div>
        </Slider>
      </Container>
    </StyledSection>
  )
}

export default memo(FavoriteCharacters)
