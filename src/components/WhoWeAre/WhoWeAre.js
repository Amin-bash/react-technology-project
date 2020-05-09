import React from 'react';
import img1 from '../../img/computer-technology.jpg';
import img2 from '../../img/it-world.jpg';
import './styles.scss';

export const WhoWeAre = () => {
	const text = `Lorem Ipsum is simply dummy text of the printing and typesetting
  industry. Lorem Ipsum has been the industry's standard dummy text
  ever since the 1500s, when an unknown printer took a galley of type
  and scrambled it to make a type specimen book. It has survived not
  only five centuries, but also the leap into electronic typesetting,
  remaining essentially unchanged. It was popularised in the 1960s
  with the release of Letraset sheets containing Lorem Ipsum passages,
  and more recently with desktop publishing`;

	return (
		<div id="whoWeAre">
			<div className="container who-we-are-section">
				<img className="img-fluid img-who-we-are" src={img1} alt="" />
				<div>
					<h2 className="title-font">Let's talk about difference between Design and Development</h2>
					<p className="text-muted">{text}</p>
				</div>
			</div>
      <hr />
			<div className="container who-we-are-section">
				<img className="img-fluid img-who-we-are" alt="" src={img2} />
				<div>
					<h2 className="title-font">WHO WE ARE</h2>
					<p className="text-muted">{text}</p>
					<button className="btn btn-info btn-go-here mt-3">Go by here</button>
				</div>
				<hr />
			</div>
		</div>
	);
};
