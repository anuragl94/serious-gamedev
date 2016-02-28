<!DOCTYPE html>
<html>
	<head>
	<script>
			src = "jquery.min.js"; //put correct path
	</script>
	<script>
			var question = $("#question").val();
			var clues[] = $(".clues").val(); //multiple clues,how to store and parse
			var currentClue = $("#currentClue").val();
			var currOptions[] = $(".options").val();
			var states = $(".state").val();
			var options[] = $("#options").val();
			var batteryState = $("#batteryState").val();

			var configText = JSON.stringify(currOptions); //not sure if I need to do these
			var stateText = JSON.stringify(states);
			var clueText = JSON.stringify(clues);

			var staticParameters = [];
			var dynamicParameters = [];

			var staticParameters = {
					"question": question,
					"clues": clues
				} ;
				
			var dynamicParamaters = {
					"options": configText,
					"states": stateText,
					"currentClue": currentClue ,
					"batteryState" : batteryState 
				}
				
			var Aggregate = [staticParameters,dynamicParameters] ;

			localStorage.setItem("stateVariables", JSON.stringify(Aggregate));

			//jquery
			//$(".classname").css()
			//$(document).on() IIFE
			//$("#w3s").attr("href") for attributes 
	</script>	
	