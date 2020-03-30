import React from 'react';
import Card from './card';

function NavMidB(props) {
	return (
		<div className="nav-mid-b" id="nav-mid-b">
			<div className="mid-b-up">
				<div className="title" id="title-b">
					Tu música de uso intensivo
				</div>
			</div>
			<div className="mid-b-down">
				<Card
					artist="Artist"
					albumTitle="Album Title"
					albumAlt="Album Alt"
					albumImg="https://picsum.photos/130"
				/>
				<Card
					artist="Artist"
					albumTitle="Album Title"
					albumAlt="Album Alt"
					albumImg="https://picsum.photos/131"
				/>
				<Card
					artist="Artist"
					albumTitle="Album Title"
					albumAlt="Album Alt"
					albumImg="https://picsum.photos/132"
				/>
				<Card
					artist="Artist"
					albumTitle="Album Title"
					albumAlt="Album Alt"
					albumImg="https://picsum.photos/133"
				/>
				<Card
					artist="Artist"
					albumTitle="Album Title"
					albumAlt="Album Alt"
					albumImg="https://picsum.photos/134"
				/>
				<Card
					artist="Artist"
					albumTitle="Album Title"
					albumAlt="Album Alt"
					albumImg="https://picsum.photos/135"
				/>
			</div>
		</div>
	);
}
export default NavMidB;
