var items = [[134,271],[354,421],[534,658]];
function normalizeCoordinates(coordinateArray)
{
	var i,j,newx,newy;
	var length,sqlength;
	var newCoordinateArray = new Array();
	for (i=0;i<coordinateArray.length;i++)
		{
				//alert("x coordinate: "+coordinateArray[i][0]);alert("y coordinate: "+coordinateArray[i][1]);
				length= (coordinateArray[i][0] * coordinateArray[i][0]) + (coordinateArray[i][1] * coordinateArray[i][1]) ;
				//alert("length: "+length);
				sqlength = Math.sqrt(length);
				//alert("square root:"+sqlength);
				newx = (coordinateArray[i][0])/sqlength;
				newy = (coordinateArray[i][1])/sqlength;
				//alert("new x: "+newx);alert("newy: "+newy);
				newCoordinateArray.push([newx,newy]) ; 
			
		}
	/*alert("new array:\n");
	for(i=0;i<newCoordinateArray.length;i++)
	{
		alert(newCoordinateArray[i]);
	}*/
	return newCoordinateArray;
}

normalizeCoordinates(items) ;