function fetch(module,absolutePath=false) {
	/*
	This function basically fetches the relevant module for use.
	For example, fetch("Questions") will go to the modules folder and access the question generator module.
	Each module will have a config file that specifies which function must be called.
	Fetch will now call that particular function and return whatever data that function returns.
	STATUS: Unfinished. chrome's policy does not allow xhr get on files that are stored locally. :(
	*/
	var append = "\config.js";
	if (absolutePath===true){
		append = "";
	}
	var file;
	if ((file=getFile(module+append))===true)
		alert("Got the module");
	else
		alert("There's no such module");
}

function getFile(fileLoc)
{
    var xmlhttp = new window.XMLHttpRequest();
    try {
        xmlhttp.open("GET", fileLoc, false);
        xmlhttp.onreadystatechange=function() {
            if(xmlhttp.readyState === 4)
        {
            if(xmlhttp.status === 200 || xmlhttp.status == 0)
            {
                return xmlhttp.responseText;
            }
        }
        }
        xmlhttp.send(null);
    }
    catch(ex) {
        return false;
    }
} 