function clickTwo() { document.write('test') }

function printResult()
{
	document.write("printing result\n")
	document.write(this.responseXML);
}

function mcLogin()
{
	document.write('Will attempt to log in\n');
	
//	var aReq = 0;
//	document.write(aReq);
	var aReq = new XMLHttpRequest();

	aReq.onLoad = printResult;
	document.write("status " + aReq.status + " ");
	aReq.open("get", "https://us14.api.mailchimp.com/3.0/lists/", true, "anystring", "xxxxx");
//	aReq.setRequestHeader("Authorization", "Basic " + btoa("apikey:xxxx"));
//	aReq.setRequestHeader("Access-Control-Allow-Origin", 'http://localhost:3000')
	aReq.setRequestHeader("Access-Control-Allow-Origin", '*')
//	aReq.setRequestHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS")
//	aReq.withCredentials = true;
	aReq.send();
	document.write("status " + aReq.status + " ");
	//req.send(null);
	document.write('Tried to log in');
}

function createForm(jshttpauth) {
    var form = document.createElement("form");
    form.action = jshttpauth.href;
    form.method = "get";
    form.onsubmit = login;
    form.id = httpauth.id;
    var username = document.createElement("label");
    var usernameInput = document.createElement("input");
    usernameInput.name = "username";
    usernameInput.type = "text";
    usernameInput.id = httpauth.id + "-username";
    username.appendChild(document.createTextNode("Username:"));
    username.appendChild(usernameInput);
    var password = document.createElement("label");
    var passwordInput = document.createElement("input");
    passwordInput.name = "password";
    passwordInput.type = "password";
    passwordInput.id = httpauth.id + "-password";
    password.appendChild(document.createTextNode("Password:"));
    password.appendChild(passwordInput);
    var submit = document.createElement("input");
    submit.type = "submit";
    submit.value = "Log in";
    form.appendChild(username);
    form.appendChild(password);
    form.appendChild(submit);
    jshttpauth.parentNode.replaceChild(form, jshttpauth);
}

window.onload = function() {
createform("body");
 /*   var http = getHTTPObject();
    if (http) {
        var anchors = document.getElementsByTagName("a");
        for (var foo = 0; foo < anchors.length; foo++) {
            if (anchors[foo].className == "httpauth") {
                createForm(anchors[foo]);
            }
        }
    }*/
}
