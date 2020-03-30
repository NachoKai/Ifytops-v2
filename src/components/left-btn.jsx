import React from 'react';

function LeftBtn(props) {
	return (
		<a className="nav-links" href={props.link} id="inicio-btn">
			<i className={props.icon}></i>
			<span>{props.title}</span>
		</a>
	);
}
export default LeftBtn;
