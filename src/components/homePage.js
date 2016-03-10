"use strict";

var React = require('react');
var Footer = require('./footer');
var AuthorList = require('./authorList');
var Home = React.createClass({
getInitialState: function() {
return {
authors: []
};
},
	render: function(){
		return (
			<div className="jumbotron">
			<h1>Pluralsight Administration</h1>
			<p>React, React Router, and Flux for ultra-responsive web apps.</p>
			<Footer />
			</div>		
<h2>Authors</h2>
<AuthorList authors={this.state.authors}/>			
		);
	}
});

module.exports = HomePage;
