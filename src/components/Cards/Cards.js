import React from 'react';
import './styles.scss';
import card1 from '../../img/image-privacy.jpg';
import card2 from '../../img/group-it.jpg';
import card3 from '../../img/image-cmfortable.jpg'
import { Card } from './Card/Card';

export const Cards = () => {
	const text = `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece
  of classical Latin literature from 45 BC classical Latin`;
	return (
		<div className="container cards">
			<Card
				title="Group of IT"
				date="11/4/2018"
				views="4409 views"
				image={card1}
				titleSection="Which things that you get it from IT"
				pText={text}
			/>

			<Card
				title="Privacy in IT"
				date="11/4/2018"
				views="3221 views"
				image={card2}
				titleSection="Options that you have in IT"
				pText={text}
			/>

			<Card
				title="Comfortable part in IT"
				date="11/4/2018"
				views="2540 views"
				image={card3}
				titleSection="Comfortable parts in this area"
				pText={text}
			/>
			
		</div>
	);
};
