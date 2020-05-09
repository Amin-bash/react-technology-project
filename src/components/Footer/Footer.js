import React from 'react';
import './styles.scss';

export const Footer = () => {
	return (
		<div className="footer bg-dark p-4 mt-5">
			<div className="container-fluid">
				<div className="row">
					<div className="col-lg-3 col-md-6 clo-sm-12">
						<h3 className="pl-3 text-white">About us</h3>
						<hr className="line-hr" />
						<ul className="text-muted">
							<li>
								<a href="/">contact</a>
							</li>
							<li>
								<a href="/">our partners</a>
							</li>
							<li>
								<a href="/">advantis oline</a>
							</li>
							<li>
								<a href="/">site map</a>
							</li>
						</ul>
					</div>

					<div className="col-lg-3 col-md-6 clo-sm-12">
						<h3 className="pl-3 text-white">Need help</h3>
						<hr className="line-hr" />
						<ul className=" text-muted">
							<li>
								<a href="/">how do i add an offer</a>
							</li>
							<li>
								<a href="/">how do i find a vehicle</a>
							</li>
							<li>
								<a href="/">price list</a>
							</li>
							<li>
								<a href="/">office for cars dealer</a>
							</li>
						</ul>
					</div>

					<div className="col-lg-3 col-md-6 clo-sm-12">
						<h3 className="pl-3 text-white">User erea</h3>
						<hr className="line-hr" />
						<ul className="text-muted">
							<li>
								<a href="/">add an offer</a>
							</li>
							<li>
								<a href="/">register dealder</a>
							</li>
							<li>
								<a href="/">login dealer</a>
							</li>
							<li>
								<a href="/">news</a>
							</li>
						</ul>
					</div>

					<div className="col-lg-3 col-md-6 clo-sm-12">
						<h3 className="pl-3 text-white">Find us here</h3>
						<hr className="line-hr" />
						<div className="ml-3 d-flex">
							<div className="color-bg-footer">
								<span>
									<a className="text-dark" href="/">
										f
									</a>
								</span>
							</div>
							<div className=" color-bg-footer p-1 ml-2 rounded">
								<span className="font-last-ele-footer">
									<a className="text-dark" href="/">
										t
									</a>
								</span>
							</div>
							<div className="color-bg-footer p-1 ml-2 rounded">
								<span className="font-last-ele-footer">
									<a className="text-dark" href="/">
										in
									</a>
								</span>
							</div>
						</div>
					</div>
				</div>
				<div className="col-12">
					<hr />
					<h5 className="text-center color-created-footer">Created by power.amin@2018</h5>
				</div>
			</div>
		</div>
	);
};
