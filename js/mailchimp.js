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
	aReq.open("get", "https://us14.api.mailchimp.com/3.0/lists/", true, "anystring", "02d59dc5a33bfe9ba6a66290f8273af3-us14");
	aReq.setRequestHeader("Authorization", "Basic " + btoa("apikey:02d59dc5a33bfe9ba6a66290f8273af3-us14"));
	aReq.setRequestHeader("Access-Control-Allow-Origin", "http://aeforrest.github.io")
//	aReq.setRequestHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS")
	aReq.withCredentials = true;
	aReq.send();
	document.write("status " + aReq.status + " ");
	//req.send(null);
	document.write('Tried to log in');
}
