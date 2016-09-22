class SignUp extends React.Component {


  handleSignUp (e) {
  	e.preventDefault()

  	debugger
  }


  render () {
    return (
    	<div className="body-splash">

    		<div className="sign-in-up-container sign-up-container">
	    		<form onSubmit={this.handleSignUp}>
	    			<div className="form-group">
	    			    <label htmlFor="username">username:</label>
	    			    <input type="text" className="form-control" id="username" aria-describedby="usernameHelp" placeholder="Enter username" />
	    			 
				    </div>

				    <div className="form-group">
				        <label htmlFor="emailInput">Email address</label>
				        <input type="email" className="form-control" id="emailInput" aria-describedby="emailHelp" placeholder="Enter email" />
				        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
				      </div>

	    			  
	    			<div className="form-group">
	    			    <label htmlFor="passwordinput">Password</label>
	    			    <input type="password" className="form-control" id="passwordinput" placeholder="password" />
	    			</div>

	    			<div className="form-group">
	    			    <label htmlFor="passwordinput">Confirm Password</label>
	    			    <input type="password" className="form-control" id="confirmpasswordinput" placeholder="password" />
	    			</div>

	    			<button type="submit" className="btn btn-primary">Sign Up</button>

	    		</form>
    		</div>

    		<div>
    			<span>
    				<a href="signin" onClick={this.props.signIn}>Already a user? Sign In Here</a>
    			</span>
    		</div>
    	</div>
    )
  }
}

