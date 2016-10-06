class Game extends React.Component {

  componentDidMount() {
	let canvas = ReactDOM.findDOMNode(this.refs.myCanvas);
	let ctx = canvas.getContext('2d');


	var CANVAS_WIDTH = 600;
	var CANVAS_HEIGHT = 700;
	var FPS = 30;


	canvas.height = CANVAS_WIDTH
	canvas.width = CANVAS_HEIGHT

	var LEFT_BOUNDARY = 50
	var RIGHT_BOUNDARY = 550

	
	setInterval(function() {
	  update();
	  draw();
	}, 1000/FPS);


	draw()

	function update() {
		
	}
	function draw() { 
		ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
		ctx.beginPath()
		ctx.moveTo(LEFT_BOUNDARY, 0)
		ctx.lineTo(LEFT_BOUNDARY, CANVAS_HEIGHT)
		ctx.stroke()
		ctx.beginPath()
		ctx.moveTo(RIGHT_BOUNDARY, 0)
		ctx.lineTo(RIGHT_BOUNDARY, CANVAS_HEIGHT)
		ctx.stroke()
	}


  }

  render () {
    return (
    	<div className="game-container">
            <canvas ref="myCanvas" />
        </div>	
    )
  }
}

