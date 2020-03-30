import React from 'react';

function Card(props) {
	return (
		<div className="cards">
			<img src={props.albumImg} alt={props.albumAlt} className="album-cover" width="130" />
			<div className="album-title">{props.albumTitle}</div>
			<div className="album-subtitle">{props.artist}</div>
		</div>
	);
}
export default Card;
