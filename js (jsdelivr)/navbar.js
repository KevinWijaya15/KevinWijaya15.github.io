//Navigation
var $nav = $("nav");

	//$nav.text("Hello");

	$nav.addClass("navbar");
	$nav.addClass("navbar-style");

	$nav.css({"position": "fixed", "top": "0"});

var $container = $('<div class = "container"></div>');

	$nav.append($container);

//Navigation Header
var $header = $('<div class = "navbar-header"></div>');

	$container.append($header);

	//Navigation Button
	var $button = $('<button type = "button" class = "navbar-toggle" data-toggle = "collapse" data-target = "#micon" style = "margin-top: 20px;"> <span class = "icon-bar"></span> <span class = "icon-bar"></span> <span class = "icon-bar"></span> </button>');

		$header.append($button);

	//Kevin Logo (EDITABLE)
	var $logo = $('<a href = "https://kevinwijaya15.github.io"><img src = "kevin logo.png" class = "logo" alt = "website logo"></a>');

		$header.append($logo);

//Navigation Links
var $collapse = $('<div class = "collapse navbar-collapse" id = "micon"></div>');

	$container.append($collapse);

var $list = $('<ul class = "nav navbar-nav navbar-right"></ul>');

	$collapse.append($list);

	//About Button (EDITABLE)
	var $about = $('<li> <a href = "https://kevinwijaya15.github.io/about/" class = "nav-link">About</a> </li>');

		$list.append($about);

	//Projects Button (EDITABLE)
	var $projects = $('<li> <a href = "https://kevinwijaya15.github.io/projects/" class = "nav-link">Projects</a> </li>');

		$list.append($projects);

	//Blog Button (EDITABLE) 
	var $blog = $('<li> <a href = "https://kevinwijaya15.github.io/blog/" class = "nav-link">Blog</a> </li>');

		$list.append($blog);

	//Social Drop Down Button
	var $social = $('<li class = "dropdown"> <a href = "#" class = "dropdown-toggle nav-link" data-toggle = "dropdown" href = "#">Social <b class="caret"></b></a> </li>');

		$list.append($social);

		//Drop Down Buttons
		var $dropdown = $('<ul class="dropdown-menu"> </ul>');

			$social.append($dropdown);

			//Instagram Button (EDITABLE)
			var $instagram = ('<li> <a href = "https://www.instagram.com/_kw59" class = "dropdown-link" target = "blank">Instagram</a> </li>');

				$dropdown.append($instagram);

			//Github Button (EDITABLE)
			var $github = ('<li> <a href = "https://github.com/KevinWijaya15" class = "dropdown-link" target = "blank">Github</a> </li>');

				$dropdown.append($github);

			//Khan Academy Button (EDITABLE)
			var $khan = ('<li> <a href = "https://www.khanacademy.org/profile/KevinWijaya15/" class = "dropdown-link" target = "blank">Khan Academy</a> </li>');

				$dropdown.append($khan);