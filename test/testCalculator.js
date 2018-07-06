QUnit.test( "Testing Addition", function( assert ) {
   var result = add(2,3);
   assert.equal( result, "5", "add(2,3) is 5." );
});

QUnit.test( "Testing Subtraction", function( assert ) {
	   var result = sub(2,3);
	   assert.equal( result, "-1", "sub(2,3) is -1." );
	});

QUnit.test( "Testing Multiplication", function( assert ) {
	   var result = pro(2,3);
	   assert.equal( result, "6", "pro(2,3) is 6." );
	});

/*QUnit.test( "Testing Division", function( assert ) {
	   var result = quo(6,3);
	   assert.equal( result, "2", "quo(6,3) is 2." );
	});

QUnit.test( "Testing Modulus", function( assert ) {
	   var result = mod(6,3);
	   assert.equal( result, "0", "mod(6,3) is 2." );
	});*/