/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import LeftBtn from './left-btn';
import Playlist from './playlist';

function NavLeft(props) {
	return (
		<div>
			<div className="nav-left">
				<div className="logo">
					<i className="fab fa-napster"></i> Ifytops
				</div>
				<div className="left-b">
					<LeftBtn title="Inicio" icon="fas fa-home" link="/" />
					<LeftBtn title="Buscar" icon="fas fa-search" link="/" />
					<LeftBtn title="Tu Biblioteca" icon="fas fa-compact-disc" link="/" />
				</div>
				<div className="left-c">
					<span className="playlist-title">PLAYLISTS</span>
					<LeftBtn title="Crear playlist" icon="fas fa-plus-square" link="/" />
					<LeftBtn title="Tus Me gusta" icon="fab fa-gratipay" link="/" />
				</div>
				<div className="left-d">
					<Playlist />
					<div className="nav-links-playlist">
						<a className="install">
							<i className="fas fa-arrow-alt-circle-down"></i>
							<span>Instalar aplicación</span>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
export default NavLeft;
