class RootPage extends React.Component {

  constructor(props) {
    super(props);
  
    this.state = {
    	display: "initialLoad",

    };

    this.signIn = this.signIn.bind(this)
    this.signUp = this.signUp.bind(this)
  }

  signIn (e) {
  	e.preventDefault()
  	this.setState({
  		display: "signIn"
  	})


  }


  signUp (e) {
  	e.preventDefault()
  	this.setState({
  		display: "signUp"
  	})
  }

  render () {
  	var toBeDisplayed

  	switch(this.state.display) {
  	    case "signIn":
  	        toBeDisplayed = <SignIn signUp={this.signUp}/>
  	        break;
  	    case "signUp":
	        toBeDisplayed = <SignUp signIn={this.signIn}/>
  	        break;
  	    default:
  	        toBeDisplayed = <div className="body-splash">
	  	        	    		<button type="submit" className="btn btn-success">P L A Y</button>

	  	        	    		<div className="sign-in-up-links-container">

		  	        	    			<a href="sign_in" onClick={this.signIn} className="sign-in-link">Sign In</a>
		  	        	    			<br/>
		  	        	    			<a href="sign_up" onClick={this.signUp} className="sign-up-link">Not A User? Sign Up Here</a>

	  	        	    		</div>
  	            			</div>
  	}

    return toBeDisplayed
  }
}

