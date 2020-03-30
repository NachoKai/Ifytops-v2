import React from 'react';
function NavMidA(props) {
	return (
		<div className="nav-mid-a" id="nav-mid-a">
			<div className="card-inside hidden" id="card-inside">
				<div className="data-album" id="data-album">
					<img className="album-tapa" src="https://picsum.photos/320" alt="" />
					<span className="titulo-album" id="titulo-album">
						Album
					</span>
					<span className="titulo-artista">Artista</span>
					<span className="repro-btn">REPRODUCIR</span>
					<div className="data-icons">
						<div className="icon-hearth" id="like-btn">
							<i className="far fa-heart"></i>
						</div>
						<i className="fas fa-ellipsis-h"></i>
					</div>
					<div className="data-low">
						<span>2020</span> • <span>Cant. Canciones</span>
					</div>
				</div>
				<div className="canciones">
					<div className="data-temas" id="data-temas">
						<div className="tema">
							<div className="art-song">
								<div className="song-div">
									<i className="fas fa-music"></i>
									<span className="tema-card">Tema</span>
								</div>
								<span className="artista-card">Artista</span>
							</div>
							<span>0:00</span>
						</div>
					</div>
				</div>
			</div>
			<div className="mid-a-up">
				<div className="title" id="title-a">
					Escuchado recientemente
				</div>
			</div>
			<div className="mid-a-down" id="mid-a-down">
				<div className="super-card hidden" id="super-card">
					<div className="super-artists">
						Artist • Artist • Artist • Artist • Artist • Artist • Artist • Artist •
						Artist • Artist • Artist • Artist • Artist • Artist • Artist
					</div>
					<div className="super-title">Tus Me Gusta</div>
					<div className="super-subtitle">725 tus me gusta</div>
				</div>
				<div className="cards">
					<img src="https://picsum.photos/130" alt="" className="album-cover" />
					<div className="album-title">Album Title</div>
					<div className="album-subtitle">Artist</div>
				</div>
				<div className="cards">
					<img src="https://picsum.photos/130" alt="" className="album-cover" />
					<div className="album-title">Album Title</div>
					<div className="album-subtitle">Artist</div>
				</div>
				<div className="cards">
					<img src="https://picsum.photos/130" alt="" className="album-cover" />
					<div className="album-title">Album Title</div>
					<div className="album-subtitle">Artist</div>
				</div>
				<div className="cards">
					<img src="https://picsum.photos/130" alt="" className="album-cover" />
					<div className="album-title">Album Title</div>
					<div className="album-subtitle">Artist</div>
				</div>
				<div className="cards">
					<img src="https://picsum.photos/130" alt="" className="album-cover" />
					<div className="album-title">Album Title</div>
					<div className="album-subtitle">Artist</div>
				</div>
				<div className="cards">
					<img src="https://picsum.photos/130" alt="" className="album-cover" />
					<div className="album-title">Album Title</div>
					<div className="album-subtitle">Artist</div>
				</div>
				<div className="cards">
					<img src="https://picsum.photos/130" alt="" className="album-cover" />
					<div className="album-title">Album Title</div>
					<div className="album-subtitle">Artist</div>
				</div>
			</div>
		</div>
	);
}
export default NavMidA;
