class Game extends React.Component {

  componentDidMount() {
	let canvas = ReactDOM.findDOMNode(this.refs.myCanvas);
	let ctx = canvas.getContext('2d');


	var CANVAS_WIDTH = 600;
	var CANVAS_HEIGHT = 700;
	var FPS = 30;


	canvas.height = CANVAS_WIDTH
	canvas.width = CANVAS_HEIGHT

	var textX = 50;
	var textY = 50;
	
	setInterval(function() {
	  update();
	  draw();
	}, 1000/FPS);


	draw()

	function update() {
		textX += 1;
		textY += 1;
	}
	function draw() { 
		ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
		ctx.fillStyle = "#000"; // Set color to black
		ctx.fillText("Sup Bro!", textX, textY);
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

