import React from 'react';
import './styles.scss';
import { Link } from 'react-scroll';

export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
			<div className="container">
				<span className="navbar-brand p-0">Technology</span>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#main-nav"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon" />
				</button>
				<div className="collapse navbar-collapse" id="main-nav">
					<ul className="navbar-nav ml-auto">
						<li className="nav-item">
							<Link
								className="nav-link"
								activeClass="active"
								to="home"
								spy={true}
								smooth={true}
								offset={-70}
								duration={500}
							>
								Home
							</Link>
						</li>
						<li className="nav-item">
							<Link
								className="nav-link"
								to="aboutUs"
								spy={true}
								smooth={true}
								offset={-70}
								duration={500}
							>
								About us
							</Link>
						</li>
						<li className="nav-item">
							<Link
								className="nav-link"
								to="whoWeAre"
								spy={true}
								smooth={true}
								offset={-70}
								duration={500}
							>
								Differences
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};
