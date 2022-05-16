import React, { useReducer } from 'react'
import { Link, useHistory } from 'react-router-dom'
import './appStyle.css'
const Signup = () => {
	let history = useHistory();
	
	let SocialUsers = []
	if(localStorage.SocialUsers.length > 0){
		SocialUsers = JSON.parse(localStorage.getItem("SocialUsers"));
	}
	let initialState = {
		SocialUsers:SocialUsers,
		userInfo:{fullName:"", email:"", username:"",password:""}
	}
		 
	const reducer = (state, action) =>{
		if(action.type === "HANDLE_INPUT_CHANGE"){
			let updatedState = {...state, userInfo:{...state.userInfo, [action.payload.name]:action.payload.value}}
			return updatedState
		}
		if(action.type === "ADD_USER"){
			let updatedState = {...state, SocialUsers:[...state.SocialUsers, action.payload]}
			localStorage.setItem("SocialUsers", JSON.stringify(updatedState.SocialUsers));
			localStorage.setItem("id", state.userInfo.email)
			history.push("/home")
			return updatedState;
		}
		return state
	}
	const [state, dispatch] = useReducer(reducer, initialState)
	const handleChange = (e) =>{
		let value = e.target.value
		let name = e.target.name
		dispatch({type:"HANDLE_INPUT_CHANGE",payload:{name,value}})
	}
	const handleSubmit =(e)=>{
		e.preventDefault();
		dispatch({type:"ADD_USER", payload:state.userInfo});

	}
	return (
		<div>
			<div className="container">
				<div className="row">
					<div className="mx-auto shadow-sm col-11 col-sm-10 col-md-8 col-lg-6">
						<form className="p-3">
							<div className="form-group row">
								<label className="col-sm-1-12 col-form-label">Full Name</label>
									<input type="text" className="form-control" onChange={handleChange} value={state.userInfo.fullName} name="fullName" placeholder=""/>
							</div>
							<div className="form-group row">
								<label className="col-sm-1-12 col-form-label">Email</label>
									<input type="email" className="form-control" onChange={handleChange} value={state.userInfo.email} name="email" placeholder=""/>
							</div>
							<div className="form-group row">
								<label className="col-sm-1-12 col-form-label">Username</label>
									<input type="text" className="form-control" onChange={handleChange} value={state.userInfo.username} name="username" placeholder=""/>
							</div>
							<div className="form-group row">
								<label className="col-sm-1-12 col-form-label">Password</label>
									<input type="password" className="form-control" onChange={handleChange} value={state.userInfo.password} name="password" placeholder=""/>
							</div>
							<div className="form-group row form-inline">
								<label className="col-sm-1-12 col-form-label">Date of Birth</label>
								<div>
									<input type="text" className="form-control mr-2" name="inputName" placeholder=""/>
									<input type="text" className="form-control" name="inputName" placeholder=""/>
									<input type="text" className="form-control mr-2" name="inputName" placeholder=""/>
									<input type="text" className="form-control mr-2" name="inputName" placeholder=""/>
								</div>
							</div>
							<div className="form-group">
								<button type="submit" className="mb-2 float-right btn btn-primary" onClick={handleSubmit}>Submit</button>
							</div>
							<span className="small">Have an account? <Link to="/signin">Log In</Link></span>
						</form>
					</div>	
				</div>
			</div>
		</div>
	)
}

export default Signup