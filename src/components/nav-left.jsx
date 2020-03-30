/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
function NavLeft(props) {
	return (
		<div>
			<div className="nav-left">
				<div className="logo">
					<i className="fab fa-napster"></i> Ifytops
				</div>
				<div className="left-b">
					<a className="nav-links selected" id="inicio-btn">
						<i className="fas fa-home"></i>
						<span>Inicio</span>
					</a>
					<a className="nav-links" id="buscar-btn">
						<i className="fas fa-search"></i>
						<span>Buscar</span>
					</a>
					<a className="nav-links" id="biblio-btn">
						<i className="fas fa-compact-disc"></i>
						<span>Tu Biblioteca</span>
					</a>
				</div>
				<div className="left-c">
					<span className="playlist-title">PLAYLISTS</span>
					<a className="nav-links">
						<i className="fas fa-plus-square"></i>
						<span>Crear playlist</span>
					</a>
					<a className="nav-links">
						<i className="fab fa-gratipay"></i>
						<span>Tus Me gusta</span>
					</a>
				</div>
				<div className="left-d">
					<ul>
						<div className="playlist-list">
							<li className="nav-links-playlist">
								<a>Playlist 1</a>
							</li>
							<li className="nav-links-playlist">
								<a>Playlist 2</a>
							</li>
							<li className="nav-links-playlist">
								<a>Playlist 3</a>
							</li>
							<li className="nav-links-playlist">
								<a>Playlist 4</a>
							</li>
							<li className="nav-links-playlist">
								<a>Playlist 5</a>
							</li>
							<li className="nav-links-playlist">
								<a>Playlist 6</a>
							</li>
							<li className="nav-links-playlist">
								<a>Playlist 7</a>
							</li>
							<li className="nav-links-playlist">
								<a>Playlist 8</a>
							</li>
							<li className="nav-links-playlist">
								<a>Playlist 9</a>
							</li>
							<li className="nav-links-playlist">
								<a>Playlist 10</a>
							</li>
							<li className="nav-links-playlist">
								<a>Playlist 11</a>
							</li>
							<li className="nav-links-playlist">
								<a>Playlist 12</a>
							</li>
							<li className="nav-links-playlist">
								<a>Playlist 13</a>
							</li>
							<li className="nav-links-playlist">
								<a>Playlist 14</a>
							</li>
							<li className="nav-links-playlist">
								<a>Playlist 15</a>
							</li>
						</div>
					</ul>
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
