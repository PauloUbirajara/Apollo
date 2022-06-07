import React, { useContext, useState } from 'react';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
import {
  Parallax,
  UpFirstContent,
  DownFirstContent,
  ButtonStyle,
  DownGridContainer,
  FirstParallax,
  SecondParallax,
  SecondParallaxSubTitle
} from './style';
import { Button } from '../../components/Button/ApolloButton';
import p1 from '../../images/parallax1.png';
import p2 from '../../images/parallax2.png';

import { Link, useNavigate } from 'react-router-dom';
import { TextInputLaranja } from '../../components/TextInputLaranja/TextInputLaranja';
import { NotificationContext } from '../../components/NotificationProvider/NotificationProvider';

interface ISearch {
  city: string;
  query: string;
}
const Home = () => {
  const { showNotification } = useContext(NotificationContext);
  const navigate = useNavigate();
  const [search, setSearch] = useState<ISearch>({
    city: '',
    query: ''
  });
  const handleChange = (e: any) => {
    setSearch((curr) => ({
      ...curr,
      [e.target.name]: e.target.value
    }));
  };
  return (
    <>
      <Header>
        <Button
          component={Link}
          to="/cadastro"
          color="secondary"
          variant="text"
          style={ButtonStyle}
        >
          Criar conta
        </Button>
        <Button component={Link} to="/login" color="secondary" variant="text" style={ButtonStyle}>
          Entrar
        </Button>
      </Header>
      <div id="main">
        <Parallax url={p1}>
          <FirstParallax>
            <UpFirstContent>Busque um estilo com os nossos profissionais</UpFirstContent>
            <DownFirstContent>
              <DownGridContainer>
                <TextInputLaranja
                  label=""
                  placeholder="Cidade"
                  name="city"
                  value={search?.city || ''}
                  onChange={handleChange}
                />
                <TextInputLaranja
                  label=""
                  placeholder="Busque um profissional"
                  name="query"
                  value={search?.query || ''}
                  onChange={handleChange}
                />
                <Button
                  variant="contained"
                  style={{ gridColumnStart: '1', gridColumnEnd: '3' }}
                  onClick={() => {
                    if (!search.city || search.city.length === 0) {
                      return showNotification('Por favor selecione uma cidade', 'warning');
                    }
                    navigate(`/buscar?city=${search.city}&query=${search.query}`, {
                      replace: true
                    });
                  }}
                >
                  Buscar
                </Button>
              </DownGridContainer>
            </DownFirstContent>
          </FirstParallax>
        </Parallax>
        <Parallax url={p2}>
          <SecondParallax>
            <SecondParallaxSubTitle>Encontre barbearias próximas à você</SecondParallaxSubTitle>
            <Button component={Link} to="/profissional/login" variant="contained">
              Sou profissional
            </Button>
          </SecondParallax>
        </Parallax>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Home;
