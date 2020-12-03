import styled from 'styled-components';
import { shade } from 'polished';

import signInBackgroundImg from '../../assets/sigin-background.png';

export const Conteiner = styled.div`
    height: 100vh;

    display: flex;
    align-items: stretch;
    `;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    place-content: center;

    width: 100%;
    max-width: 700px;

    form {
        margin: 80px 0;
        width: 340px;
        text-align: center;

        h1 {
            margin-bottom: 24px;
        }

        a {
            color: #F4EDE8;
            display: block;
            margin-top: 24px;
            text-decoration: nane;
            transition: color 0.2s;

        &:hover {
            color: ${shade(0.2, '#F4EDE8')}
        }
    }
}

  > a {
    color: #FF9000;
    display: flex;
    align-items: center;
    margin-top: 24px;
    text-decoration: nane;
    transition: color 0.2s;

    &:hover {
        color: ${shade(0.2, '#FF9000')}
    }

    svg {
        margin-right: 16px;
    }
  }


  `;

export const Background = styled.div`
    flex: 1;
    background: url(${signInBackgroundImg}) no-repeat center;
    background-size: cover;
`;
