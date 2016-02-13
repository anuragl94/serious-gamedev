function fetchModule(module,absolutePath) {
	/*
	This function basically fetches the relevant module for use.
	For example, fetchModule("Questions") will go to the modules folder and access the question generator module.
	Each module will have a config file that specifies which function must be called.
	Fetch will now call that particular function and return whatever data that function returns.
	STATUS: Unfinished. chrome's policy does not allow xhr get on files that are stored locally. :(
	WORKAROUND: Using --disable-web-security flag for now, which is not recommended.
	*/
	absolutePath = absolutePath||false;
	var append = "/config.json";
	var prepend = "../Modules/"
	if (absolutePath===true){
		prepend = append = "";
	}
	var file;
	var filePath = prepend+module+append;
	file = getFile(filePath);
	if (file)
		console.log("Fetched the module",module);
	else
		console.error("There's no module called",module);
}

function getFile(fileLoc)
{
	var xmlhttp = new window.XMLHttpRequest();
	content=null;
	console.log(fileLoc);
	try {
		xmlhttp.onreadystatechange=function() {
			if(xmlhttp.readyState === 4)
			{
				if(xmlhttp.status === 200 || xmlhttp.status == 0)
				{
					content = JSON.parse(xmlhttp.responseText);
					var url = fileLoc.split("/");
					url.pop();
					url = url.join("/")+"/"+content['fetch'];
					$.getScript(url);
				}
			}
		}
		//Async parameter is false. Don't proceed unless module is fetched.
		xmlhttp.open("GET", fileLoc, false);
		xmlhttp.send();
		return content;
	}
	catch(ex) {
		console.error(ex);
		return false;
	}
} 