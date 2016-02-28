//Function to determine the order in which different parts of the question will appear, language-wise.
var json = require('./language.json');
//var qsetJson = require('./questionSet.json'); needs to be added after modularization
function setClueText()
{
	
	var language,attribute,quantity,property;
	var clueText = makeString();
	return clueText;
}

function makeString()
{
	
		var attribute = qset.q1[0].attribute;  //qsetJson.qset.q1[0].attribute , eventually
		var quantity = qset.q1[0].quantity;
		var comparator = qset.q1[0].comparator;
		var statement = makeStringOrder(attribute,quantity,comparator);
		 
    return statement;
}

function makeStringOrder(var attr , var qty , var comp)
{
	var language = localStorage.getItem("language".value);
	var strText = new Array() ;
	if (language == 'English')
	{
			if (comp == '=')
				actualComp = json.Languages.English['='] ;
			else if (comp == '<>')
				actualComp = json.Languages.English.['<>'];
			else if (comp == '>')
				actualComp = json.Languages.English.['>'];
			else if (comp= = '>=')
				actualComp = json.Languages.English.['>='];
			else if (comp == '<')
				actualComp = json.Languages.English.['<'];
			else if (comp == '<=')
				actualComp = json.Languages.English.['<='];
		
				
	}
	else if(language == 'Hindi')
	{
			if (comp == '=')
				actualComp = json.Languages.Hindi.['='] ;
			else if (comp == '<>')
				actualComp = json.Languages.Hindi.['<>'];
			else if (comp == '>')
				actualComp = json.Languages.Hindi.['>'];
			else if (comp == '>=')
				actualComp = json.Languages.Hindi.['>='];
			else if (comp == '<')
				actualComp = json.Languages.Hindi.['<'];
			else if (comp == '<=')
				actualComp = json.Languages.Hindi.['<='];
	}
	//additional language options may be added
			strText[0] = qty ;
			strText[1] = attr;
			strText[2] = actualComp;
	return strText;
}
/*
Basic syntax:
{
"English": "<comparer><quantity><property>",
"Hindi": "<comparer><quantity><property>"
}*/
