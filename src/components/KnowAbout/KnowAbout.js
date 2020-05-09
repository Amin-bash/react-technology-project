import React from 'react';
import img1 from '../../img/responsive-design .jpg';
import './styles.scss';

export const KnowAbout = () => {
	const text = `There are many variations of passages of Lorem Ipsum available, but the majority have
  suffered alteration in some form, by injected humour, or randomised words which don't look
  even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be
  sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum
  generators on the Internet`;

	return (
		<div id="aboutUs" className="bg-light-dark p-5">
			<div id="differences" className="text-center">
					<h2 className="title-font">
						TO KNOW ABOUT PHONE AND COMPUTER TECHNOLOGY
					</h2>
			</div>

			<div className="container">
				<div className="phone-computer-content">
					<div className="phone-section">
						<h3 className="mt-3 font">Phones specifications</h3>
						<p className="text-muted p-section">{text}</p>
					</div>
					<div className="image-effect effect bg-dark">
						<h3 className="img-titles">Phone Technology</h3>
						<img className="technology-img img-fluid" src={img1} alt="" />
						<span className="one" />
						<span className="two" />
						<span className="three" />
						<span className="four" />
					</div>
				</div>

				<div className="phone-computer-content">
					<div className="image-effect effect bg-dark">
						<h3 className="img-titles ">Computer Technology</h3>
						<img className="technology-img img-fluid" src={img1} alt="" />
						<span className="one" />
						<span className="two" />
						<span className="three" />
						<span className="four" />
					</div>
					<div className="computer-section">
						<h3 className="mt-3 font">Computers specifications</h3>
						<p className="text-muted p-section">
							{text}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};
