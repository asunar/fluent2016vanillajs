/** @jsx JSXDOM */

var AuthorView = {
	render : function(author){
		return 	<tr id="{author.id}">
		<td><a href="#/authors/">{author.id}</a></td>
		<td>{author.firstName} {author.lastName}</td>
	</tr>
;
	}
}

var AuthorListView = {


	
render: function(authors, authorListActionHandler) {

	var deleteAuthor = function(e) {
			if(e.target.tagName !== "A") return;
			e.preventDefault();
			authorListActionHandler({
				type: "DELETE_AUTHOR",
				id : e.target.id
			})
	};

	var generateMarkup = function(authors){
	return 		<div className="jumbotron">
			<h2>Authors</h2> 
	<table id="authors" class="table">
<thead>
	<th>Id</th>
	<th>Name</th>
</thead>		
<tbody>
	{
		authors.map(function(author){
			return 	<tr id="{author.id}">
				<td><a id={author.id} href="#">Delete</a></td>	
			<td><a href={ "#/authors/" + author.id }>{author.id}</a></td>
			<td>{author.firstName} {author.lastName}</td>
		</tr>
		})

	}
</tbody>
</table>
</div>
	};

	var markup =generateMarkup(authors);
	markup.querySelector("#authors").addEventListener("click",deleteAuthor );				
	return markup;	
}
};


