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
  	var toBeDisplayedl

  	switch(this.state.display) {
  	    case "signIn":
  	        toBeDisplayed = <SignIn />
  	        break;
  	    case "signUp":
  	        toBeDisplayed = <SignUp />
  	        break;
  	    default:
  	        toBeDisplayed = <div className="body-splash">
	  	        	    		<button> P L A Y </button>
	  	        	    		<a href="sign_in" onClick={this.signIn}>Sign In</a>
	  	        	    		<a href="sign_up" onClick={this.signUp}>Not A User? Sign Up Here</a>
  	            			</div>
  	}

    return toBeDisplayed
  }
}

