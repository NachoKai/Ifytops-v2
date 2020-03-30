import React from 'react';
function NavLow(props) {
	return (
		<div className="nav-low">
			<div className="low-a">
				<div className="mini">
					<div className="album-cover-low">
						<img className="album-mini" src="https://picsum.photos/56" alt="" />
					</div>
					<div className="artist-low">
						<div className="title-low">Song</div>
						<div className="album-subtitle">Artist</div>
					</div>
					<div className="icon-hearth" id="like-btn">
						<i className="far fa-heart"></i>
					</div>
					<div className="icon-window">
						<i className="fas fa-window-maximize"></i>
					</div>
				</div>
			</div>
			<div className="low-b">
				<div className="reprod">
					<div className="icon">
						<i className="fas fa-random"></i>
					</div>
					<div className="icon">
						<i className="fas fa-step-backward"></i>
					</div>
					<div className="icon play" id="play-btn">
						<i className="far fa-play-circle"></i>
					</div>
					<div className="icon">
						<i className="fas fa-step-forward"></i>
					</div>
					<div className="icon">
						<i className="fas fa-redo-alt"></i>
					</div>
				</div>
				<div className="duration">
					<input
						className="slider-a"
						type="range"
						id="dur"
						name="vol"
						min="0"
						max="100"
					/>
				</div>
			</div>
			<div className="low-c">
				<div className="tools">
					<div className="icon">
						<i className="fas fa-list"></i>
					</div>
					<div className="icon">
						<i className="fas fa-desktop"></i>
					</div>
					<div className="icon">
						<i className="fas fa-volume-up"></i>
					</div>
					<div className="volume">
						<input
							className="slider-b"
							type="range"
							id="vol"
							name="vol"
							min="0"
							max="100"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
export default NavLow;
