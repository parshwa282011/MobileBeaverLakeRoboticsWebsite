var idToLink = {
	"home": "",
	"about": "about",
	"sponsors": "sponsors",
	"credits": "credits",
	"events": "events",
	"fll": "fll",
	"fll-alpha-tech": "fll/alpha-tech",
	"fll-robotic-dogs": "fll/robotic-dogs",
	"fll-spark-bots": "fll/spark-bots",
	"ftc": "ftc",
	"ftc-alpha-intelligence": "ftc/alpha-intelligence",
	"ftc-beta-bionix": "ftc/beta-bionix"
};

function loadNavbar() {
    elmnt = document.getElementById("nav-placeholder")
    xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
	    if (this.readyState == 4) {
		    if (this.status == 200) {elmnt.innerHTML = this.responseText;}
	    	if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
    	}
		replaceAnchorLinks();
	}
	console.log(xhttp.open("GET", WEB_HOME+"/assets/nav/nav.html", true));
    xhttp.send();
	
}

function replaceAnchorLinks(){
	var listOfLinks = document.getElementsByTagName("a");
	i=0;
	while (i < listOfLinks.length){
		var a = listOfLinks[i];
		var id = a.id;
		var location = idToLink[id];
		if (location != null) {
			try {
				a.href = WEB_HOME + "/" + location;
			} catch (error) {
				continue;
			}
		}
		i++;
	}
	var image = document.getElementById("image-top");
	image.src = WEB_HOME + "/assets/images/logo.jpeg";
}
