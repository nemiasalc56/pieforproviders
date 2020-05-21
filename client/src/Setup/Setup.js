import React, { useState, useEffect } from 'react'
import './Setup.css'


export function Setup() {

	const [picture, setPicture] = useState('')
	const [businessName, setBusinessName] = useState('')
	

	useEffect(()=> {
		setPicture('https://i.pinimg.com/originals/b1/bb/ec/b1bbec499a0d66e5403480e8cda1bcbe.png')

	}, [])

	const handleChange = (e) => {
		setBusinessName(e.target.value)
	}



	return(
		<div className="get-started">
			<header id="header">
				<h2>Pie for Providers</h2>
				<img src={picture} alt="text"/>
			</header>

			<div className="main-contianer">
				<h2 id="setup">Setup</h2>

				<div className="second-container">

					<div className="third-container">

						<h1>Basic Info</h1>

						<div className="logo-container">
							<div>
								<div className="icon-line">
									<div className="icon-1">
										<div>
											<svg 
												width="21"
												height="18"
												viewBox="0 0 21 18" 
												fill="none" 
												xmlns="http://www.w3.org/2000/svg">
												<path d="M8.99805 13V12H2.00805L1.99805 16C1.99805 17.11 2.88805 18 3.99805 18H17.998C19.108 18 19.998 17.11 19.998 16V12H12.998V13H8.99805ZM18.998 4H14.988V2L12.988 0H8.98805L6.98805 2V4H2.99805C1.89805 4 0.998047 4.9 0.998047 6V9C0.998047 10.11 1.88805 11 2.99805 11H8.99805V9H12.998V11H18.998C20.098 11 20.998 10.1 20.998 9V6C20.998 4.9 20.098 4 18.998 4ZM12.998 4H8.99805V2H12.998V4Z" fill="white"/>
											</svg>
											
										</div>
									</div>
									<div className="line-1"></div>
									
								</div>
								<p>Info</p>
							</div>

							<div>
								<div className="icon-line">
									<div className='icon-2'>
										<div>
											<svg 
												width="24" 
												height="16" 
												viewBox="0 0 24 16" 
												fill="none" 
												xmlns="http://www.w3.org/2000/svg">
												<path d="M19.35 6.04C18.67 2.59 15.64 0 12 0C9.11 0 6.6 1.64 5.35 4.04C2.34 4.36 0 6.91 0 10C0 13.31 2.69 16 6 16H19C21.76 16 24 13.76 24 11C24 8.36 21.95 6.22 19.35 6.04ZM14 9V13H10V9H7L12 4L17 9H14Z" fill="#006C9E"/>
											</svg>
											
										</div>
									</div>
									<div className="line-2"></div>
										
								</div>

								<p>Upload</p>
							</div>

							<div>
								<div className="icon-line">
									<div className="icon-3">
										<div>
											<svg 
												width="20" 
												height="14" 
												viewBox="0 0 20 14" 
												fill="none" 
												xmlns="http://www.w3.org/2000/svg">
												<path d="M12 4H0V6H12V4ZM12 0H0V2H12V0ZM16 8V4H14V8H10V10H14V14H16V10H20V8H16ZM0 10H8V8H0V10Z" fill="#006C9E"/>
											</svg>
											
										</div>
									</div>
									<div className="line-2"></div>
									
								</div>

								<p>Add</p>
							</div>

							<div>
								<div className="icon-4">
									<div>
										<svg 
											width="24" 
											height="20" 
											viewBox="0 0 24 20" 
											fill="none" 
											xmlns="http://www.w3.org/2000/svg">
											<path d="M19.77 2.83L21.17 4.23L8.43 16.97L2.83 11.37L4.23 9.97L8.43 14.17L19.77 2.83ZM19.77 0L8.43 11.34L4.23 7.14L0 11.37L8.43 19.8L24 4.23L19.77 0Z" fill="#006C9E"/>
										</svg>
										
									</div>

								</div>
								<p>Done</p>
							</div>
						</div>


						<h2>Let's get started</h2>

						<p>Give us some basic details about the childcare businesses and the sites that are a part of Hub ABC. Make sure to include all of the businesses and sites that have children who have received childcare subsidies, or are potentially eligible for subsidies.</p>

						<div>
							<input 
								value={businessName}
								name="businessName"
								type="text"
								placeholder="Write your business name here"
								onChange={handleChange}
							/>
						</div>
					</div>


					<div className="next-button">
						<div>
							<p>Next</p>
						</div>
						<div id="arrow">
							<svg 
								width="12"
								height="12"
								viewBox="0 0 16 16"
								fill="none" 
								xmlns="http://www.w3.org/2000/svg">
								<path d="M8 0L6.59 1.41L12.17 7H0V9H12.17L6.59 14.59L8 16L16 8L8 0Z" fill="#006C9E"/>
							</svg>
						
						</div>
						

					</div>
				</div>
			</div>

		</div>
		)
}