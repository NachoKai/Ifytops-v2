import React from 'react';

function Card(props) {
	return (
		<div className="cards">
			<img src={props.albumImg} alt={props.albumAlt} className="album-cover" />
			<div className="album-title">{props.albumTitle}</div>
			<div className="album-subtitle">{props.artist}</div>
		</div>
	);
}
export default Card;
