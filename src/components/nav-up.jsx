/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
function Componente(props) {
	return (
		<div class="nav-up">
			<div class="up-a">
				<div class="flechas">
					<i class="fas fa-chevron-circle-left" aria-hidden="true"></i>
					<i class="fas fa-chevron-circle-right" aria-hidden="true"></i>
				</div>
				<div class="buscador hidden" id="buscador-unput">
					<i class="fas fa-search" aria-hidden="true"></i>
					<input
						class="buscador-input"
						type="text"
						placeholder="Busca artistas, canciones o podcasts"
					/>
				</div>
				<div class="biblio-links hidden" id="biblio-links">
					<span class="biblio-link">Playlists</span>
					<span class="biblio-link">Podcasts</span>
					<span class="biblio-link">Artistas</span>
					<span class="biblio-link">Álbumes</span>
				</div>
			</div>
			<div class="up-left">
				<div class="up-b" id="premium">
					<a class="premium-link">
						<div class="premium">PREMIUM</div>
					</a>
				</div>
				<div class="up-c">
					<div class="user">
						<div class="avatar">
							<img src="img/avatar.png" alt="" class="avatar" />
						</div>
						<a class="user-link">
							<div class="name">Nacho Caiafa</div>
						</a>
						<div class="arrow-down">
							<a class="user-link">
								<i class="fas fa-caret-down" aria-hidden="true"></i>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
export default Componente;
