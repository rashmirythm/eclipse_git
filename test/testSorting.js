QUnit.test( "Testing Null Choice", function( assert ) {
	var choice;
   assert.equal( choice, undefined, "Null" );
});

QUnit.test( "Testing Insertion Sort Choice", function( assert ) {
	var choice=1;
	var result=menu(choice);
	var exp_result=[3,4,5,6,7,9];
	
		assert.ok(result===exp_result,"Insertion Sort");
   
});


