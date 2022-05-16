import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'

const Signin = () => {

	let history = useHistory()
	
	let SocialUsers = []
	if(JSON.parse(localStorage.SocialUsers).length > 0){
		SocialUsers = JSON.parse(localStorage.getItem("SocialUsers"));
	}
	let [loginDetails, setLoginDetails]  = useState({email:"", password:""})
	
	const handleChange = (e) =>{
		let value = e.target.value
		let name = e.target.name
		setLoginDetails({...loginDetails, [name]:value})
	}
	const handleLogin =(e)=>{
		e.preventDefault();
		if(SocialUsers.length>0){
			let user = SocialUsers.find((each,i)=>each.email === loginDetails.email && each.password === loginDetails.password);
			if(user != undefined){
				localStorage.setItem("id",user.email);
				history.push("/home")
			} 
		}
	}
	return (
		<div>
			<div className="container">
				<div className="row">
					<div className="mx-auto shadow-sm col-11 col-sm-10 col-md-8 col-lg-6">
						<form className="p-3">
							<div className="form-group row">
								<label className="col-sm-1-12 col-form-label">Email</label>
									<input type="email" className="form-control" onChange={handleChange} value={loginDetails.email} name="email" placeholder=""/>
							</div>
							<div className="form-group row">
								<label className="col-sm-1-12 col-form-label">Password</label>
									<input type="password" className="form-control" onChange={handleChange} value={loginDetails.username} name="password" placeholder=""/>
							</div>
							<div className="form-group">
								<button type="submit" className="mb-2 float-right btn btn-primary" onClick={handleLogin}>Log In</button>
							</div>
							<span className="small">Don't have an account? <Link to="/signup">Sign Up</Link></span>
						</form>
					</div>	
				</div>
			</div>
		</div>
	)
}

export default Signin
