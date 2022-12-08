import { memo } from 'react'

import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import FacebookIcon from 'assets/icons/facebook.svg'
import InstagramIcon from 'assets/icons/instagram.svg'
import SpotifyIcon from 'assets/icons/spotify.svg'
import YoutubeIcon from 'assets/icons/youtube.svg'
import Logo from 'assets/m-marvel.png'

import {
  BlackSignatureDiv,
  ColCards,
  H2Styled,
  RowStyled,
  StyleFooter,
  StyleNav,
  TextStyled,
  UlStyled,
} from './styles'

const Footer: React.FC = () => {
  return (
    <StyleFooter>
      <Container className="py-5">
        <RowStyled className="row-cols-1 row-cols-md-3 row-cols-lg-5">
          <ColCards>
            <Link to="/">
              <img src={Logo} alt="logo" height="100" width="auto" />
            </Link>
          </ColCards>
          <ColCards>
            <H2Styled>A Marvel</H2Styled>
            <StyleNav>
              <UlStyled>
                <li>
                  <Link
                    to="/characters"
                    className="text-decoration-none text-reset"
                  >
                    Sobre a Marvel
                  </Link>
                </li>
                <li>
                  <Link
                    to="/comics"
                    className="text-decoration-none text-reset text-center"
                  >
                    Ajuda
                  </Link>
                </li>
                <li>
                  <Link
                    to="/comics"
                    className="text-decoration-none text-reset text-center"
                  >
                    Carreiras
                  </Link>
                </li>
              </UlStyled>
            </StyleNav>
          </ColCards>
          <ColCards>
            <H2Styled>Media</H2Styled>
            <StyleNav>
              <UlStyled>
                <li>
                  <Link
                    to="/characters"
                    className="text-decoration-none text-reset"
                  >
                    Filmes
                  </Link>
                </li>
                <li>
                  <Link
                    to="/comics"
                    className="text-decoration-none text-reset text-center"
                  >
                    Quadrinhos
                  </Link>
                </li>
                <li>
                  <Link
                    to="/comics"
                    className="text-decoration-none text-reset text-center"
                  >
                    Programas de TV
                  </Link>
                </li>
                <li>
                  <Link
                    to="/comics"
                    className="text-decoration-none text-reset text-center"
                  >
                    Jogos
                  </Link>
                </li>
              </UlStyled>
            </StyleNav>
          </ColCards>
          <ColCards>
            <H2Styled>Última do blog</H2Styled>
            <div className="d-flex">
              <TextStyled>
                Captain Marvel Challenge invadiu o tapete vermelho do Oscar
              </TextStyled>
            </div>
          </ColCards>
          <ColCards>
            <H2Styled>Follow Us:</H2Styled>
            <nav>
              <a
                href="https://www.facebook.com/Marvel/"
                target="_blank"
                rel="noreferrer"
                className="pe-2"
              >
                <img src={FacebookIcon} alt="logo" />
              </a>
              <a
                href="https://open.spotify.com/user/marvel_music_?si=i-uXyMx6T6eiCzhZqQtl9w&nd=1"
                target="_blank"
                rel="noreferrer"
                className="px-2"
              >
                <img src={SpotifyIcon} alt="logo" />
              </a>
              <a
                href="https://www.instagram.com/marvel/"
                target="_blank"
                rel="noreferrer"
                className="px-2"
              >
                <img src={InstagramIcon} alt="logo" />
              </a>
              <a
                href="https://www.youtube.com/@marvelbr"
                target="_blank"
                rel="noreferrer"
                className="px-2"
              >
                <img src={YoutubeIcon} alt="logo" />
              </a>
            </nav>
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
