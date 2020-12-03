// eslint-disable-next-line no-use-before-define
import React from 'react';

import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import { Background, Conteiner, Content } from './styles';

import logoImg from '../../assets/logo.svg';

import Button from '../../components/Button';
import Input from '../../components/Input';

const Sigin: React.FC = () => (
  <Conteiner>
    <Content>
      <img src={logoImg} alt="GoBarbier" />

      <form>

        <h1>Faça seu logon</h1>

        <Input icon={FiMail} name="email" placeholder="E-mail" />

        <Input icon={FiLock} name="password" type="password" placeholder="Senha" />

        <Button type="submit" placeholder="Senha"> Entrar </Button>

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
