import React from 'react'
import { useHistory, useParams } from 'react-router'

const AppHome = () => {
	let history = useHistory();
	let userObj = {fullName:"", email:"", username:""}
	let SocialUsers = [{fullName:"", email:"", username:""}]
	if(localStorage.id == null || JSON.parse(localStorage.SocialUsers).length==0){
		history.push("/signin")
	} else{
		SocialUsers = JSON.parse(localStorage.getItem("SocialUsers"))
		userObj = JSON.parse(localStorage.getItem("SocialUsers")).find((each, i)=>each.email === localStorage.id)
	}
	let routeToProfile = (usern) =>{
		history.push(`/${usern}`)
	}
	return (
		<div>
			<div className="p-2 pl-3 border-bottom topHome" style={{height:"50px"}}>
				Home
			</div>
			
			<div className="main">
				<div className="p-3 border-bottom">
					<div className="d-flex">
						<span className="fa fa-user-circle" style={{fontSize:"2.5rem"}}></span>
						<span className="text-muted my-auto ml-3">What's Happening?</span>
					</div>
					<div className="pl-1 pl-md-5 mt-2" style={{color:"lightblue", fontSize:"1.2rem"}}>
						<i className="fa fa-image mr-3"></i>
						{/* <i className="fa fa-image mr-3"></i>
						<i className="fa fa-image mr-3"></i>
						<i className="fa fa-image mr-3"></i> */}

						<button  className="btn small rounded-pill btn-primary float-right">Tweet</button>
					</div>
				</div>
				{
					SocialUsers.map((each, i)=>(
						<div key={i} className="d-flex p-3 topBord mt-1 border-top" style={{height:"400px"}} onClick={()=>routeToProfile(each.username)}>
							<i style={{fontSize:"2.5rem"}} className="fa fa-user-circle"></i>
							<div className="ml-3 small">
								<b>{each.fullName}</b> <span className="text-muted">@{each.username}</span> <br/>
								<div className="mt-3 w-75">
									Your BELIEVING informs your LIVING. In other words, what and how you BELIEVE determines your living. Your life. So, to fix your life, fix your system of BELIEFS. We practically manifest what we believe.
								</div>
								<div className="bg-secondary rounded mt-3" style={{height:"250px"}}></div>
							</div>
						</div>
					))
				}
				
				<div className="bg-secondary m-3" style={{height:"400px"}}></div>
				<div className="bg-secondary m-3" style={{height:"400px"}}></div>
				<div className="bg-secondary m-3" style={{height:"400px"}}></div>
				<div className="bg-secondary m-3" style={{height:"400px"}}></div>
				<div className="bg-secondary m-3" style={{height:"400px"}}></div>
				<div className="bg-secondary m-3" style={{height:"400px"}}></div>
			</div>
		</div>
	)
}

export default AppHome
