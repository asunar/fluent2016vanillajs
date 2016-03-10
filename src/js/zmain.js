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

		function getUrlVars() {
				var vars = [], hash;
				var hashes = window.location.href.slice(window.location.href.lastIndexOf('?') + 1).split('&');
				for (var i = 0; i < hashes.length; i++) {
						hash = hashes[i].split('=');
						vars.push(hash[0]);
						vars[hash[0]] = hash[1];
				}
				return vars;
		}
	
    function route() {
        var hash = window.location.hash;

        var content = document.querySelector('#app');

        var showHome = function() {
            replaceChildren(content, HomePage.render());
        };

				var showAuthor = function(){
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


        var hashWithoutQueryString = hash;
        if (hash.lastIndexOf('?') !== -1) {
            hashWithoutQueryString = hash.substring(0, hash.lastIndexOf('?'))
        }

        var routeTable = {
					'##': showHome,
					'#/authors' : showAuthor,
					'#/about' : showAbout,
        };

        var viewFunction = routeTable[hashWithoutQueryString] || routeTable['##'];
        viewFunction();
    }
    route();
}());
