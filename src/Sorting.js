function insertionSort(arr) {
	for (var i = 0; i < arr.length; i++) {
		var value = arr[i];
		for (var j = i - 1; j > -1 && arr[j] > value; j--) {
			arr[j + 1] = arr[j];
		}
		arr[j + 1] = value;
	}

	return (arr);
}

function selectionSort(arr) {

	var temp = 0;
	for (var i = 0; i < arr.length; ++i) {
		for (var j = i + 1; j < arr.length; ++j) {
			if (arr[i] > arr[j]) { // compare element with the reset of other element
				temp = arr[i];  // swap the value from smallest to greatest
				arr[i] = arr[j];
				arr[j] = temp;
			}
		}
	}
	return (arr);
}

//selectionSort([4,6,5,3,7,9]);

function bubbleSort(arr) {
	var length = arr.length;
	for (var i = 0; i < length; i++) { //Number of passes
		for (var j = 0; j < (length - i - 1); j++) { //Notice that j < (length - i)
			//Compare the adjacent positions
			if(arr[j] > arr[j+1]) {
				//Swap the numbers
				var tmp = arr[j];  //Temporary variable to hold the current number
				arr[j] = arr[j+1]; //Replace current number with adjacent number
				arr[j+1] = tmp; //Replace adjacent number with current number
			}
		}        
	}
	return (arr);
}

function menu(choice)
{
	var result; 
	
	if(choice===null)
	{
		return (0);
	}
	else if(choice==1)
	{
		result=insertionSort([4,6,5,3,7,9]);
		return (result);
	}
	else if(choice==2)
	{
		result=selectionSort([4,6,5,3,7,9]);
		return (result);
	}
	else if(choice==3)
	{
		result=bubbleSort([4,6,5,3,7,9]);
		return (result);
	}
	else
	{
		return (1);
	}
}