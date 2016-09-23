class SignIn extends React.Component {

  handleLogIn (e) {
  	e.preventDefault()
  	debugger
    // $.ajax({
    //   url: '/users/create',
    //   type: 'POST',
    //   dataType: 'json',
    //   data: {email: this.refs.email.value, username: this.refs.username.value, password: this.refs.password.value, confirm_password:this.refs.confirmPassword.value},
    // })
    // .done(function(response) {
    //   debugger
    //   console.log("success");
    // })
    // .fail(function() {
    //   console.log("error");
    // })
    // .always(function() {
    //   console.log("complete");
    // });
  }


  render () {
    return (
    	<div className="body-splash">

    		<div className="sign-in-up-container sign-in-container">
	    		<form onSubmit={this.handleLogIn}>
	    			<div className="form-group">
	    			    <label htmlFor="username">username:</label>
	    			    <input type="email" className="form-control" id="username" aria-describedby="usernameHelp" placeholder="Enter username" ref="username" />
	    			 
				    </div>
	    			  
	    			<div className="form-group">
	    			    <label htmlFor="passwordinput">Password</label>
	    			    <input type="password" className="form-control" id="passwordinput" placeholder="password" ref="password"/>
	    			</div>

	    			<button type="submit" className="btn btn-primary">Log In</button>

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

