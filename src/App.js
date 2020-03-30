/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './styles/style.css';
import './styles/normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavLeft from './components/nav-left';
import NavUp from './components/nav-up';
import NavMidA from './components/nav-mid-a';
import NavMidB from './components/nav-mid-b';
import NavLow from './components/nav-low';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function App() {
	return (
		<div className="container-fluid" id="container">
			<Row>
				<Col xl={2}>
					<NavLeft />
				</Col>
				<Col xl={10}>
					<NavUp />
					<NavMidA />
					<NavMidB />
				</Col>
			</Row>
			<Row>
				<Col xl={12}>
					<NavLow />
				</Col>
			</Row>
		</div>
	);
}

export default App;
