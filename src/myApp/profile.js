import React from 'react'
import { useHistory, useParams } from 'react-router';

const Profile = () => {
	let history = useHistory();
	let {username} = useParams();
	let userObj = {fullName:"", email:"", username:""}
	if(localStorage.id == null || JSON.parse(localStorage.SocialUsers).length==0){
		history.push("/signin")
	} else{
		let newuserObj = JSON.parse(localStorage.getItem("SocialUsers")).find((each, i)=>each.username === username);
		if(newuserObj == undefined){
			history.push("/signin")
		} else{
			userObj = newuserObj
		}
	}
	return (
		<div>
			<div className="p-2 pl-3 font-weight-bold">
				{userObj.fullName}
			</div>
			<div className="main">
				<div className="bg-secondary" style={{height:"250px"}}></div>
				<div className="bg-secondary ml-4 rounded-circle fa fa-user-circle" style={{fontSize:"8.7rem", height:"150px", width:"150px", marginTop:"-80px", border:"6.5px solid #15202B"}}></div>
				<div className="m-3 p-2" style={{height:"400px"}}>
					<span className="font-weight-bold">{userObj.fullName}</span><br/>
					<small className="text-muted">@{userObj.username}</small>
					<div className="w-25 small">Easy going Smiling face with smiling eyes Computer scientist Personal computer Web developer</div>
					<div className="small text-muted mt-2">
						Born June 25, 2222 Joined October 2019 <br/>
						<span className="font-weight-bold text-white">150</span> Following
						<span className="font-weight-bold text-white">150</span> Followers
					</div>
				</div>
				<div className="bg-secondary m-3" style={{height:"400px"}}></div>
				<div className="bg-secondary m-3" style={{height:"400px"}}></div>
			</div>
		</div>
	)
}

export default Profile
