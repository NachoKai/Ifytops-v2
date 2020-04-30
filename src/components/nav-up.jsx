/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

function Componente(props) {
  return (
    <div className="nav-up">
      <div className="up-a">
        <div className="flechas">
          <i className="fas fa-chevron-circle-left" aria-hidden="true"></i>
          <i className="fas fa-chevron-circle-right" aria-hidden="true"></i>
        </div>
        <div className="buscador hidden" id="buscador-unput">
          <i className="fas fa-search" aria-hidden="true"></i>
          <input
            className="buscador-input"
            type="text"
            placeholder="Busca artistas, canciones o podcasts"
          />
        </div>
        <div className="biblio-links hidden" id="biblio-links">
          <span className="biblio-link">Playlists</span>
          <span className="biblio-link">Podcasts</span>
          <span className="biblio-link">Artistas</span>
          <span className="biblio-link">Álbumes</span>
        </div>
      </div>
      <div className="up-left">
        <div className="up-b" id="premium">
          <a className="premium-link">
            <div className="premium">PREMIUM</div>
          </a>
        </div>
        <div className="up-c">
          <div className="user">
            <div className="avatar">
              <img src="img/avatar.png" alt="" className="avatar" />
            </div>
            <a className="user-link">
              <div className="name">Nacho Caiafa</div>
            </a>
            <div className="arrow-down">
              <a className="user-link">
                <i className="fas fa-caret-down" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Componente;
