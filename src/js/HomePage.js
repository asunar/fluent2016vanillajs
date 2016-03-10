/** @jsx JSXDOM */

var HomePage = {
render: function() {
	return (
		<div className="jumbotron">
			<h1>Pluralsight Administration</h1>
			<p>JSXDOM and js for ultra-responsive web apps.</p>
			{ Footer.render() }	
		</div>
	);
}
};


