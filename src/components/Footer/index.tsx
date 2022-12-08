import { memo } from 'react'

import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import FacebookIcon from 'assets/icons/facebook.svg'
import InstagramIcon from 'assets/icons/instagram.svg'
import SpotifyIcon from 'assets/icons/spotify.svg'
import YoutubeIcon from 'assets/icons/youtube.svg'
import Logo from 'assets/m-marvel.png'

import KidsImage from '../../assets/kids.jpg'
import {
  BlackSignatureDiv,
  ColCards,
  H2Styled,
  LinkStyled,
  NewsDiv,
  RatioStyled,
  RowStyled,
  SocialNav,
  StyleFooter,
  StyleNav,
  TextStyled,
  UlStyled,
} from './styles'

const Footer: React.FC = () => {
  return (
    <StyleFooter>
      <Container className="py-5">
        <RowStyled className="row-cols-1 row-cols-sm-3 row-cols-lg-5">
          <ColCards xs={12} sm={4} md={4} lg={2}>
            <Link to="/">
              <img src={Logo} alt="logo" height="100" width="auto" />
            </Link>
          </ColCards>
          <ColCards xs={12} sm={4} md={4} lg={2}>
            <H2Styled>A Marvel</H2Styled>
            <StyleNav>
              <UlStyled>
                <li>
                  <Link
                    to="/sobre-a-marvel"
                    className="text-decoration-none text-reset"
                  >
                    Sobre a Marvel
                  </Link>
                </li>
                <li>
                  <Link
                    to="/ajuda"
                    className="text-decoration-none text-reset text-center"
                  >
                    Ajuda
                  </Link>
                </li>
                <li>
                  <Link
                    to="/carreiras"
                    className="text-decoration-none text-reset text-center"
                  >
                    Carreiras
                  </Link>
                </li>
              </UlStyled>
            </StyleNav>
          </ColCards>
          <ColCards xs={12} sm={4} md={4} lg={2}>
            <H2Styled>Media</H2Styled>
            <StyleNav>
              <UlStyled>
                <li>
                  <Link
                    to="/filmes"
                    className="text-decoration-none text-reset"
                  >
                    Filmes
                  </Link>
                </li>
                <li>
                  <Link
                    to="/quadrinhos"
                    className="text-decoration-none text-reset text-center"
                  >
                    Quadrinhos
                  </Link>
                </li>
                <li>
                  <Link
                    to="/programas-de-tv"
                    className="text-decoration-none text-reset text-center"
                  >
                    Programas de TV
                  </Link>
                </li>
                <li>
                  <Link
                    to="/jogos"
                    className="text-decoration-none text-reset text-center"
                  >
                    Jogos
                  </Link>
                </li>
              </UlStyled>
            </StyleNav>
          </ColCards>
          <ColCards xs={12} sm={6} md={6} lg={4}>
            <H2Styled>Última do blog</H2Styled>
            <NewsDiv className="d-flex">
              <RatioStyled
                aspectRatio="1x1"
                style={{
                  backgroundImage: `url(${KidsImage})`,
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center center',
                }}
              >
                <div />
              </RatioStyled>
              <TextStyled>
                Captain Marvel Challenge invadiu o tapete vermelho do Oscar
              </TextStyled>
            </NewsDiv>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <LinkStyled href="#">Continuar lendo</LinkStyled>
          </ColCards>
          <ColCards xs={12} sm={6} md={6} lg={2}>
            <H2Styled>Follow Us:</H2Styled>
            <SocialNav>
              <a
                href="https://www.facebook.com/Marvel/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={FacebookIcon} alt="logo" />
              </a>
              <a
                href="https://open.spotify.com/user/marvel_music_?si=i-uXyMx6T6eiCzhZqQtl9w&nd=1"
                target="_blank"
                rel="noreferrer"
              >
                <img src={SpotifyIcon} alt="logo" />
              </a>
              <a
                href="https://www.instagram.com/marvel/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={InstagramIcon} alt="logo" />
              </a>
              <a
                href="https://www.youtube.com/@marvelbr"
                target="_blank"
                rel="noreferrer"
              >
                <img src={YoutubeIcon} alt="logo" />
              </a>
            </SocialNav>
          </ColCards>
        </RowStyled>
      </Container>
      <BlackSignatureDiv className="d-flex py-2">
        <p className="me-2">Site by:</p>
        <a
          href="https://www.linkedin.com/in/guimattos91/"
          target="_blank"
          rel="noreferrer"
        >
          Guilherme Mattos
        </a>
      </BlackSignatureDiv>
    </StyleFooter>
  )
}

export default memo(Footer)
