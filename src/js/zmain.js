"use strict";


(function() {


    /* --------------------------------- Event Registration -------------------------------- */
    window.addEventListener('hashchange', route);
    /* ---------------------------------- Local Functions ---------------------------------- */

    function replaceChildren(parentElement, children) {
        parentElement.innerHTML = '';
				parentElement.appendChild(Header.render());
        parentElement.appendChild(children);
    }

	
    function route() {
        var hash = window.location.hash;

        var content = document.querySelector('#app');

        var showHome = function() {
            replaceChildren(content, HomePage.render());
        };

				var showAuthor = function(){

					//get it from data store	
				var authors = [
	{"id":"cory-house","firstName":"Cory", "lastName": "House"},
	{"id":"scott-allen","firstName":"Scott", "lastName": "Allen"}, {"id":"dan-wahlin","firstName":"Dan", "lastName": "Wahlin"},];

	//can move this into a separate file if gets too big
	
		var handleAuthorListAction = function(action){
		actionHandlers[action.type](action.id); //instead of switch
	}

	var	handleDeleteAuthor = function(authorId){
		authors = authors.filter(function(author){
			return author.id !== authorId;
		});

		replaceChildren(content, AuthorListView.render(authors, handleAuthorListAction))
	};

	var actionHandlers = {
		"DELETE_AUTHOR" : handleDeleteAuthor,
	}

				

					replaceChildren(content, AuthorListView.render(authors, handleAuthorListAction));
				}

var showAbout = function(){
	replaceChildren(content, About.render())
}
        if (!hash) {
            showHome();
            return;
        }

        var routeTable = {
					'##': showHome,
					'#/authors' : showAuthor,
					'#/about' : showAbout,
        };

        var viewFunction = routeTable[hash] || routeTable['##'];
        viewFunction();
    }
    route();
}());
