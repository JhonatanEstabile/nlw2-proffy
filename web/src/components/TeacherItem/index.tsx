import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

const TeatcherItem = () => {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars3.githubusercontent.com/u/40630775?s=460&u=35db4486d4765f7c9b3c41e633643ad3cdf03ea2&v=4" alt="Jhonatan Estabile" />
        <div>
          <strong>Jhonatan Estabile</strong>
          <span>Redes Neurais</span>
        </div>
      </header>

      <p>
        Apaixonado por desenvolvimento e interessado em IA.
      <br /><br />

      Gosta de ficar arquitetando e criando servicos novos.
    </p>

      <footer>
        <p>
          Preço/hora
        <strong>R$ 34,50</strong>
        </p>

        <button type="button">
          <img src={whatsappIcon} alt="Entrar em contato" />
        Entrar em contato
      </button>
      </footer>
    </article>
  );
}

export default TeatcherItem;
