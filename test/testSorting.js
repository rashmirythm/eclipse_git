//QUnit.test( "Testing Null Choice", function( assert ) {
//	var choice;
//	
//	var result=menu(choice);
//	assert.ok(true,choice);
//	assert.ok(true,result);
//   assert.equal( result, 0, "HI"  );
//});

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
	assert.ok(true,result);
  
});

QUnit.test( "Testing Selection Sort Choice", function( assert ) {
	var choice=2;
	var result=menu(choice);
	var exp_result=[3,4,5,6,7,9];
	
	assert.ok(JSON.stringify(exp_result) == JSON.stringify(result),"Selection Sort");
	assert.ok(true,result);
  
});

QUnit.test( "Testing Bubble Sort Choice", function( assert ) {
	var choice=3;
	var result=menu(choice);
	var exp_result=[3,4,5,6,7,9];
	
	assert.ok(JSON.stringify(exp_result) == JSON.stringify(result),"Bubble Sort");
	assert.ok(true,result);
  
});

QUnit.test( "Testing Invalid Choice", function( assert ) {
	var choice=4;
	var result=menu(choice);
	var exp_result=[3,4,5,6,7,9];
	
	assert.equal(result,1,"4 is Invalid choice");
  
});


