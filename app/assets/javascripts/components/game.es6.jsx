class Game extends React.Component {

  componentDidMount() {
  let canvas = ReactDOM.findDOMNode(this.refs.myCanvas);
  let ctx = canvas.getContext('2d');

  canvas.height = 700
  canvas.width = 600

  }

  render () {
    return (
    	<div className="game-container">
            <canvas ref="myCanvas" />
        </div>	
    )
  }
}

