mport React,{ Component } from 'react';
import { Router } from 'react-router';
import { Redirect, Rout, Switch } from 'react-rout-dom';


#import ScreenUserForm from './User/Form';

const ScreenRoot = () => {
	
	<Router>
		<Switch>
			#<Route path="/user/list" component={ScreenUserForm} />
		</Switch>
	</Router>

}

export default ScreenRoot;
