function fetchModule(module,absolutePath) {
	/*
	This function basically fetches the relevant module for use.
	For example, fetchModule("Questions") will go to the modules folder and access the question generator module.
	Each module will have a config file that specifies which function must be called.
	Fetch will now call that particular function and parse the function for use.
	FUTURE MODIFICATION: Rather than parse the function, return a pointer to the relevant module with all modules having similar nomenclature for their execution functions. 
	STATUS: Unfinished. chrome's policy does not allow xhr get on files that are stored locally.
	WORKAROUND: Using --disable-web-security flag for now, which is not recommended.
	*/
	absolutePath = absolutePath||false;
	var append = "/config.json";
	var prepend = "../Modules/";
	if (absolutePath===true){
		prepend = append = "";
	}
	var file;
	var filePath = prepend+module+append;
	file = function (fileLoc){
		var xmlhttp = new window.XMLHttpRequest();
		var content = null;
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
	}(filePath);
	
	if (file)
		console.log("Fetched the module",module);
	else
		console.error("There's no module called",module);
}

function fetchFileContent(fileLoc,parseJSON,absolutePath) {
	//This function will simply load the file, and send the contents as plaintext. Additional parameter indicates whether to parse the content
	absolutePath = absolutePath||false;
	parseJSON = parseJSON||false;
	
	var prepend = "../";
	if (absolutePath===true){
		prepend = "";
	}
	var filePath = prepend+fileLoc;
	
	var xmlhttp = new window.XMLHttpRequest();
	var content = null;
	try {
		xmlhttp.onreadystatechange=function() {
			if(xmlhttp.readyState === 4)
			{
				if(xmlhttp.status === 200 || xmlhttp.status == 0)
				{
					content = xmlhttp.responseText;
				}
			}
		}
		//Async parameter is false. Don't proceed unless module is fetched.
		xmlhttp.open("GET", filePath, false);
		xmlhttp.send();
		if (parseJSON === true)
			return JSON.parse(content);
		return content;
	}
	catch(ex) {
		console.error(ex);
		return false;
	}
} 