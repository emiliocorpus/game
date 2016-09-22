class SignIn extends React.Component {
  render () {
    return (
    	<div className="body-splash">

    		<div className="sign-in-container">
	    		<form>
	    			<div className="form-group">
	    			    <label htmlFor="username">username:</label>
	    			    <input type="email" className="form-control" id="username" aria-describedby="usernameHelp" placeholder="Enter username" />
	    			 
				    </div>
	    			  
	    			<div className="form-group">
	    			    <label htmlFor="passwordinput">Password</label>
	    			    <input type="password" className="form-control" id="passwordinput" placeholder="password" />
	    			</div>

	    		</form>
    		</div>

    		<div>
    			<span>
    				<a href="signup" onClick={this.props.signUp}>Not A User? Sign Up Here</a>
    			</span>
    		</div>
    	</div>
    );
  }
}

