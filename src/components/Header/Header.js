import React from 'react';
import headerImg from '../../img/header.jpg';
import './styles.scss';

export const Header = () => {
	return (
		<div id="home" className="container-fluid header-section bg-dark">
			<div className="header-img-section">
				<h1 className="header-title">Enter into IT world</h1>
				<img className="header-img img-fluid" alt="" src={headerImg} />
			</div>
		</div>
	);
};
