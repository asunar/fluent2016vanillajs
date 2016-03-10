/** @jsx JSXDOM */

var About = {
    render: function () {
        return JSXDOM(
            "p",
            null,
            "This app uses JSXDOM"
        );
    }
};
/** @jsx JSXDOM */

var AuthorView = {
	render: function (author) {
		return JSXDOM(
			"tr",
			{ id: "{author.id}" },
			JSXDOM(
				"td",
				null,
				JSXDOM(
					"a",
					{ href: "#/authors/" },
					author.id
				)
			),
			JSXDOM(
				"td",
				null,
				author.firstName,
				" ",
				author.lastName
			)
		);
	}
};

var AuthorListView = {

	render: function (authors, authorListActionHandler) {

		var deleteAuthor = function (e) {
			if (e.target.tagName !== "A") return;
			e.preventDefault();
			authorListActionHandler({
				type: "DELETE_AUTHOR",
				id: e.target.id
			});
		};

		var generateMarkup = function (authors) {
			return JSXDOM(
				"div",
				{ className: "jumbotron" },
				JSXDOM(
					"h2",
					null,
					"Authors"
				),
				JSXDOM(
					"table",
					{ id: "authors", "class": "table" },
					JSXDOM(
						"thead",
						null,
						JSXDOM(
							"th",
							null,
							"Id"
						),
						JSXDOM(
							"th",
							null,
							"Name"
						)
					),
					JSXDOM(
						"tbody",
						null,
						authors.map(function (author) {
							return JSXDOM(
								"tr",
								{ id: "{author.id}" },
								JSXDOM(
									"td",
									null,
									JSXDOM(
										"a",
										{ id: author.id, href: "#" },
										"Delete"
									)
								),
								JSXDOM(
									"td",
									null,
									JSXDOM(
										"a",
										{ href: "#/authors/" + author.id },
										author.id
									)
								),
								JSXDOM(
									"td",
									null,
									author.firstName,
									" ",
									author.lastName
								)
							);
						})
					)
				)
			);
		};

		var markup = generateMarkup(authors);
		markup.querySelector("#authors").addEventListener("click", deleteAuthor);
		return markup;
	}
};

/** @jsx JSXDOM */

"use strict";

var Footer = {
	render: function () {
		return JSXDOM(
			"p",
			null,
			"Copyright 2016 Cory House"
		);
	}
};
/** @jsx JSXDOM */

var Header = {
    render: function () {
        return JSXDOM(
            "nav",
            { "class": "navbar navbar-default" },
            JSXDOM(
                "div",
                { "class": "container-fluid" },
                JSXDOM(
                    "a",
                    { href: "/#", "class": "navbar-brand" },
                    "PS ADMIN"
                ),
                JSXDOM(
                    "ul",
                    { "class": "nav navbar-nav" },
                    JSXDOM(
                        "li",
                        null,
                        JSXDOM(
                            "a",
                            { href: "/#/" },
                            "Home"
                        )
                    ),
                    JSXDOM(
                        "li",
                        null,
                        JSXDOM(
                            "a",
                            { href: "/#/authors" },
                            "Authors"
                        )
                    ),
                    JSXDOM(
                        "li",
                        null,
                        JSXDOM(
                            "a",
                            { href: "/#/about" },
                            "About"
                        )
                    )
                )
            )
        );
    }
};
/** @jsx JSXDOM */

var HomePage = {
	render: function () {
		return JSXDOM(
			"div",
			{ className: "jumbotron" },
			JSXDOM(
				"h1",
				null,
				"Pluralsight Administration"
			),
			JSXDOM(
				"p",
				null,
				"JSXDOM and js for ultra-responsive web apps."
			),
			Footer.render()
		);
	}
};
(function (global) {
  var tags = ['a', 'abbr', 'acronym', 'address', 'applet', 'area', 'article', 'aside', 'audio', 'b', 'base', 'basefont', 'bdi', 'bdo', 'big', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'center', 'cite', 'code', 'col', 'colgroup', 'command', 'datalist', 'dd', 'del', 'details', 'dfn', 'dialog', 'dir', 'div', 'dl', 'dt', 'em', 'embed', 'fieldset', 'figcaption', 'figure', 'font', 'footer', 'form', 'frame', 'frameset', 'h1', 'h2', 'h3', 'head', 'header', 'hgroup', 'hr', 'html', 'i', 'iframe', 'img', 'input', 'ins', 'kbd', 'keygen', 'label', 'legend', 'li', 'link', 'map', 'mark', 'menu', 'meta', 'meter', 'nav', 'noframes', 'noscript', 'object', 'ol', 'optgroup', 'option', 'output', 'p', 'param', 'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'script', 'section', 'select', 'small', 'source', 'span', 'strike', 'strong', 'style', 'sub', 'summary', 'sup', 'table', 'tbody', 'td', 'textarea', 'tfoot', 'th', 'thead', 'time', 'title', 'tr', 'track', 'tt', 'u', 'ul', 'var', 'video', 'wbr'];

  function processChildren(dom, children) {
    if (typeof children === 'string') {
      dom.appendChild(document.createTextNode(children));
    } else if (Object.prototype.toString.call(children) === '[object Array]') {
      for (var i = 0; i < children.length; ++i) {
        processChildren(dom, children[i]);
      }
    } else if (children) {
      dom.appendChild(children);
    }
  }

  var JSXDOM = function (type, attributes, children) {
    if (arguments.length === 2 && (typeof attributes === 'string' || Array.isArray(attributes))) {
      children = [attributes];
      attributes = {};
    }
    if (arguments.length > 2) {
      children = Array.prototype.slice.call(arguments, 2);
    }
    children = children || [];
    attributes = attributes || {};
    children = children.filter(function (i) {
      return typeof i !== 'undefined';
    });
    var fn = JSXDOM[type];
    var ret;
    if (fn) {
      ret = fn(attributes, children);
    }
    return ret;
  };

  tags.forEach(function (tag) {
    JSXDOM[tag] = function (attributes, children) {
      var dom = document.createElement(tag);
      for (var name in attributes) {
        name === "checked" ? dom.checked = Boolean(attributes[name]) : dom.setAttribute(name, attributes[name]);
      }
      processChildren(dom, children);
      return dom;
    };
  });

  global.JSXDOM = JSXDOM;
})(this || window || global);
"use strict";

(function () {

				/* --------------------------------- Event Registration -------------------------------- */

				window.addEventListener('hashchange', route);

				/* ---------------------------------- Local Functions ---------------------------------- */

				function replaceChildren(parentElement, children) {

								parentElement.innerHTML = '';

								parentElement.appendChild(Header.render());
								parentElement.appendChild(children);
				}

				function getUrlVars() {

								var vars = [],
								    hash;

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

								var showHome = function () {

												replaceChildren(content, HomePage.render());
								};

								var showAuthor = function () {
												var authors = [{ "id": "cory-house", "firstName": "Cory", "lastName": "House" }, { "id": "scott-allen", "firstName": "Scott", "lastName": "Allen" }, { "id": "dan-wahlin", "firstName": "Dan", "lastName": "Wahlin" }];

												//can move this into a separate file if gets too big

												var handleAuthorListAction = function (action) {
																actionHandlers[action.type](action.id); //instead of switch
												};

												var handleDeleteAuthor = function (authorId) {
																authors = authors.filter(function (author) {
																				return author.id !== authorId;
																});

																replaceChildren(content, AuthorListView.render(authors, handleAuthorListAction));
												};

												var actionHandlers = {
																"DELETE_AUTHOR": handleDeleteAuthor
												};

												replaceChildren(content, AuthorListView.render(authors, handleAuthorListAction));
								};

								var showAbout = function () {
												replaceChildren(content, About.render());
								};
								if (!hash) {

												showHome();

												return;
								}

								var hashWithoutQueryString = hash;

								if (hash.lastIndexOf('?') !== -1) {

												hashWithoutQueryString = hash.substring(0, hash.lastIndexOf('?'));
								}

								var routeTable = {

												'##': showHome,

												'#/authors': showAuthor,
												'#/about': showAbout
								};

								var viewFunction = routeTable[hashWithoutQueryString] || routeTable['##'];
								viewFunction();
				}

				route();
})();
