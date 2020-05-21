// cd client/ then run 'yarn add semantic-ui-react' and 'yarn add semantic-ui-css'

import React, { useState, useEffect } from 'react'
import './GetStarted.css'
import 'semantic-ui-css/semantic.min.css'
import { NavLink } from 'react-router-dom'


export function GetStarted() {
	const [picture, setPicture] = useState('')
	const [user, setUser] = useState('')

	useEffect(()=> {
		setPicture('https://i.pinimg.com/originals/b1/bb/ec/b1bbec499a0d66e5403480e8cda1bcbe.png')

		setUser({
			first_name: 'Amanda',
			last_name: 'Smith'
		})
	}, [])

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
					
						<h1 id="welcome">Welcome to Pie for Providers, {user.first_name}!</h1>
						<h3>Get Started</h3>
						<p>Follow these instructions to set up your case dashboard. This should take about XX minutes, and you'll only have to do this once. Get ready to increase your slice of pie!</p>
					

						<h3>Steps</h3>
						<div className="step-container">
							<div className="steps one">

								<div className="icons">
									<svg 
										width="34" 
										height="30" 
										viewBox="0 0 34 30" 
										fill="none" 
										xmlns="http://www.w3.org/2000/svg">
										<path d="M13.6673 21.6667V20H2.01732L2.00065 26.6667C2.00065 28.5167 3.48398 30 5.33398 30H28.6673C30.5173 30 32.0007 28.5167 32.0007 26.6667V20H20.334V21.6667H13.6673ZM30.334 6.66667H23.6507V3.33333L20.3173 0H13.6507L10.3173 3.33333V6.66667H3.66732C1.83398 6.66667 0.333984 8.16667 0.333984 10V15C0.333984 16.85 1.81732 18.3333 3.66732 18.3333H13.6673V15H20.334V18.3333H30.334C32.1673 18.3333 33.6673 16.8333 33.6673 15V10C33.6673 8.16667 32.1673 6.66667 30.334 6.66667ZM20.334 6.66667H13.6673V3.33333H20.334V6.66667Z" fill="#006C9E"/>
									</svg>
									
								</div>

								<h5>1. Add your business info</h5>

								<p>Tell us about the businesses and sites you manage, so we know which subsidy payment rates to apply to your cases.</p>
							</div>

							<div className="steps two">

								<div className="icons">
									<svg 
										width="40" 
										height="28" 
										viewBox="0 0 40 28" 
										fill="none" 
										xmlns="http://www.w3.org/2000/svg">
										<path d="M32.25 10.7332C31.1167 4.98317 26.0667 0.666504 20 0.666504C15.1833 0.666504 11 3.39984 8.91667 7.39984C3.9 7.93317 0 12.1832 0 17.3332C0 22.8498 4.48333 27.3332 10 27.3332H31.6667C36.2667 27.3332 40 23.5998 40 18.9998C40 14.5998 36.5833 11.0332 32.25 10.7332ZM23.3333 15.6665V22.3332H16.6667V15.6665H11.6667L20 7.33317L28.3333 15.6665H23.3333Z" fill="#006C9E"/>
									</svg>
									
								</div>

								<h5>2. Upload your cases and review</h5>

								<p>Create and upload a spreadsheet with the names and birthays of the subsidy-elegible children you serve. In most cases, you can download this from other software you use. This help us calculate each child's subsidy payment rate.</p>
							</div>

							<div className="steps three">

								<div className="icons">
									<svg 
										width="34" 
										height="24" 
										viewBox="0 0 34 24" 
										fill="none" 
										xmlns="http://www.w3.org/2000/svg">
										<path d="M20.334 6.66667H0.333984V10H20.334V6.66667ZM20.334 0H0.333984V3.33333H20.334V0ZM27.0007 13.3333V6.66667H23.6673V13.3333H17.0007V16.6667H23.6673V23.3333H27.0007V16.6667H33.6673V13.3333H27.0007ZM0.333984 16.6667H13.6673V13.3333H0.333984V16.6667Z" fill="#006C9E"/>
									</svg>
									
								</div>

								<h5>3. Add some details</h5>

								<p>We'll need some more details about each subsidy case, like how many days the child was approved for. You can find most of this on the approval letter from the state. After you enter this, you'll only have to update once a year for most children.</p>
							</div>

							<div className="steps four">
								<div className="icons">
									<svg 
										width="40" 
										height="33" 
										viewBox="0 0 40 33" 
										fill="none" 
										xmlns="http://www.w3.org/2000/svg">
										<path d="M32.95 4.71667L35.2833 7.05L14.05 28.2833L4.71667 18.95L7.05 16.6167L14.05 23.6167L32.95 4.71667ZM32.95 0L14.05 18.9L7.05 11.9L0 18.95L14.05 33L40 7.05L32.95 0Z" fill="#006C9E"/>
									</svg>
									
								</div>

								<h5>4. Done!</h5>

								<p>Start tracking your cases! Pie will help you manage your monthly billing cycle and all your annuals renewals. We're here to make it easy to get paid in full, for every child, every month.</p>
							</div>
						</div>

						<div id="button">
							<NavLink to={'/setup'}>
								<button className="button">GET STARTED</button>
								
							</NavLink>
						</div>
					</div>

				</div>
			</div>
		</div>
		)
}