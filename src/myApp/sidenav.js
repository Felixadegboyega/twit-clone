import React from 'react'
import { Link, useHistory } from 'react-router-dom'

const Sidenav = () => {
	let history = useHistory();
	let userObj = {fullName:"", email:"", username:""}
	if(localStorage.id != null && JSON.parse(localStorage.SocialUsers).length>0){
		userObj = JSON.parse(localStorage.getItem("SocialUsers")).find((each, i)=>each.email === localStorage.id)
	}
	const handleLogOut = () =>{
		localStorage.removeItem("id")
		history.push("/signin")
	}
	return (
		<div className="p-3 mx-auto" style={{width:"fit-content",position:"relative",height:"100vh"}}>
			<i className="fa fa-twitter m-3" style={{fontSize:"2rem"}}></i>
			<div>
				<Link to="/home" className="btn mb-3 font-weight-bold navlinks p-2 pl-3 pr-3 text-light rounded-pill">
					<i className="fa fa-home mr-2 links"></i>
					Home
				</Link><br/>
				<Link to="/explore" className="btn mb-3 font-weight-bold navlinks p-2 pl-3 pr-3 text-light rounded-pill">
					<i className="fa fa-home mr-2 links"></i>
					Explore
				</Link><br/>
				<Link className="btn mb-3 font-weight-bold navlinks p-2 pl-3 pr-3 text-light rounded-pill">
					<i className="fa fa-home mr-2 links"></i>
					Notification
				</Link><br/>
				<Link to={`/${userObj.username}`} className="btn mb-3 font-weight-bold navlinks p-2 pl-3 pr-3 text-light rounded-pill">
					<i className="fa fa-user mr-2 links"></i>
					Profile
				</Link><br/>


				<div className="rounded buttomLi w-100 collapse" id="logoutbutton">
					<button onClick={handleLogOut} style={{boxShadow:"none"}} type="button" className="w-100 btn text-light">Log out</button>
				</div>
				<Link to={`/${userObj.username}`} style={{position:"absolute", bottom:"10px"}} className="w-100 d-flex btn mb-2 navlinks text-light rounded-pill">
					<span className="fa fa-user-circle mr-2" style={{fontSize:"2.5rem"}}></span>
					<div className="small text-left">
						<span>{userObj.fullName}</span><br/>
						<span className="text-muted">@{userObj.username}</span>
					</div>
					<span className=" ml-auto my-auto fa fa-ellipsis-h p-2" data-toggle="collapse" data-target="#logoutbutton"></span>
				</Link>

			</div>
		</div>
	)
}

export default Sidenav
