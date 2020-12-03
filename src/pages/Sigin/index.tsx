// eslint-disable-next-line no-use-before-define
import React from 'react';
import { FiLogIn } from 'react-icons/fi';
import { Background, Conteiner, Content } from './styles';
import logoImg from '../../assets/logo.svg';

const Sigin: React.FC = () => (
  <Conteiner>
    <Content>
      <img src={logoImg} alt="GoBarbier" />

      <form>

        <h1>Faça seu logon</h1>

        <input placeholder="E-mail" />

        <input type="password" placeholder="Senha" />

        <button type="submit" placeholder="Senha"> Entrar </button>

        <a href="forgot"> Esqueci a minha senha </a>

      </form>

      <a href="login">
        <FiLogIn />
        criar conta
      </a>
    </Content>

    <Background />
  </Conteiner>
);

export default Sigin;
