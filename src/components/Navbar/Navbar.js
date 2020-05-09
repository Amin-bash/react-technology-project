import React from 'react';
import './styles.scss';

export const Navbar = () => {
	return (
		<div>
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark p-3">
				<div className="container">
					<span className="navbar-brand">Technology</span>
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
							<li className="nav-item active">
								<a className="nav-link" href="#">
									Home <span className="sr-only">(current)</span>
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#" data-scroll="About-us">
									About us
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#" data-scroll="Deferences">
									Deferences
								</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
};
