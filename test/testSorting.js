QUnit.test( "Testing Null Choice", function( assert ) {
	var choice;
   assert.equal( choice, undefined, "Null" );
});

QUnit.test( "Testing Insertion Sort Choice", function( assert ) {
	var choice=1;
	var result=menu(choice);
	var exp_result=[3,4,5,6,7,9];

	//--------------------NOTE--------------------------------------------------------------------
	//Comparing two JavaScript objects will always return false.
	//Two objects are strictly equal if they refer to the same Object.
	//You are trying to compare two objects. js objects returns true only when 
	//both point to the same memory location. So if you want to compare, whether 
	//the CONTENT of the objects are same. You have to first convert them to string like JSON.
	//stringify(a) == JSON.stringify(b)
	//--------------------------------------------------------------------------------------------
	
	assert.ok(JSON.stringify(exp_result) == JSON.stringify(result),"Insertion Sort");
  
});


