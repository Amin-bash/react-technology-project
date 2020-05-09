import React from 'react';
import './styles.scss';

export const Card = (props) => {
	return (
		<div className="card cards-section">
			<div className="image bg-dark">
				<h3 className="hover-title">{props.title}</h3>
				<span className="date">{props.date}</span>
				<span className="views">{props.views}</span>
				<img className="card-img card-img-top" src={props.image} alt="" />
			</div>
			<div className="card-body">
				<h4 className="card-title">{props.titleSection}</h4>
				<p className="card-text text-muted">{props.pText}</p>
			</div>
		</div>
	);
};
