import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Sidenav from './myApp/sidenav';
import AppHome from './myApp';
// import ReduxClass from './ReduxClass';
import Signup from './myApp/signup';
import Signin from './myApp/signin';
import Profile from './myApp/profile';
import Notification from './myApp/notification';
import "./App.css"
import Explore from './myApp/Explore';


export default function App(params) {
	if(localStorage.SocialUsers == null){
		localStorage.setItem("SocialUsers", JSON.stringify([]));
	}
  
	return(
		<>
			{/* <ReduxClass/> */}
			<Router>
				<Switch>
					<Route exact path="/signup">
						<Signup/>
					</Route>
					<Route exact path="/signin">
						<Signin/>
					</Route>
					<Route path="/">
						<div className="container-fluid text-white" style={{backgroundColor:"#15202B"}}>
							<div className="row">
								<div className="col-md-3 col-12 border-right sideNav">
									<Sidenav/>
								</div>
								<div className="col-md-6 col-12 p-0">
									<Switch>
										<Route exact path="/home">
											<AppHome/>
										</Route>	
										<Route exact path="/">
											<AppHome/>
										</Route>
										<Route path="/explore">
											<Explore/>
										</Route>
										<Route path="/:username">
											<Profile/>
										</Route>
										<Route exact path="/:username/notification">
											<Notification/>
										</Route>
									</Switch>
								</div>
								<div className="col-md-3 border-left col-12 right">
									right
								</div>
							</div>
						</div>
					</Route>
				</Switch>
				
			</Router>
		</>
	)
};
