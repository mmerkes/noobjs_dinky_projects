// TEST SUITE
function tester() {
	$('#results').empty();

	var alternateRows8x8 = [
		'00000000',
		'11111111',
		'00000000',
		'11111111',
		'00000000',
		'11111111',
		'00000000',
		'11111111'
	];

	alternateRows8x8 = splitTables(alternateRows8x8);

	var alternateRows5x5 = [
		'00000',
		'11111',
		'00000',
		'11111', 
		'00000'
	];

	alternateRows5x5 = splitTables(alternateRows5x5);

	var alternateColumns8x8 = [
		'01010101',
		'01010101',
		'01010101',
		'01010101',
		'01010101',
		'01010101',
		'01010101',
		'01010101'
	];

	alternateColumns8x8 = splitTables(alternateColumns8x8);

	var alternateColumns5x5 = [
		'01010',
		'01010',
		'01010',
		'01010',
		'01010',
	];

	alternateColumns5x5 = splitTables(alternateColumns5x5);

	var diagonal8x8 = [
		'10000000',
		'01000000',
		'00100000',
		'00010000',
		'00001000',
		'00000100',
		'00000010',
		'00000001'
	];

	diagonal8x8 = splitTables(diagonal8x8);

	var diagonal5x5 = [
		'10000',
		'01000',
		'00100',
		'00010',
		'00001',
	];

	diagonal5x5 = splitTables(diagonal5x5);

	var diamond8x8 = [
		'00010000',
		'00111000',
		'01111100',
		'11111110',
		'01111100',
		'00111000',
		'00010000',
		'00000000'
	];

	diamond8x8 = splitTables(diamond8x8);

	var diamond5x5 = [
		'00100',
		'01110',
		'11111',
		'01110',
		'00100'
	];

	diamond5x5 = splitTables(diamond5x5);

	function splitTables( table ) {
		return table.map( function(row) {
			return row.split('');
		});
	};

	function testPattern( pattern ) {
		var i, j, row, highlighted;
		var rows = $('#prettyTable').find('tr');

		if(rows.length !== pattern.length) {
			return false;
		}

		for( i = 0; i < pattern.length; i++) {
			row = $(rows[i]).find('td');
			for( j = 0; j < row.length; j++ ) {
				highlighted = $(row[j]).hasClass('highlight');
				if(highlighted != pattern[i][j])
					return false;
			}
		}
		return true;
	};

	test("Async Test #1", function() {
		pause();
		setTimeout(function() {
			assert(true, "First test completed");
			resume();
		}, 250);
	});

	test("Test 8x8 table creation", function() {
		pause();
		setTimeout(function() {
			$('#columns').val('8');
			$('#rows').val('8');
			resizeTable();
			var rows = $('#prettyTable').find('tr');
			assert( rows.length === 8, 'The table has 8 rows.' );
			assert( $(rows[0]).find('td').length === 8, "The table has 8 columns." );
			resume();
		}, 500);
	});

	test("Test 8x8 patterns", function() {
		pause();
		setTimeout(function() {
			$('#alternateRows').click();
			assert( testPattern(alternateRows8x8), 'The table alternates rows.' );
		}, 1000);

		setTimeout(function() {
			$('#alternateColumns').click();
			assert( testPattern(alternateColumns8x8), 'The table alternates columns.' );
		}, 2000);

		setTimeout(function() {
			$('#diagonal').click();
			assert( testPattern(diagonal8x8), 'The table does diagonal.' );
		}, 3000);

		setTimeout(function() {
			$('#diamond').click();
			assert( testPattern(diamond8x8), 'The table does diamond.' );
			resume();
		}, 4000);
	});	

	test("Test 5x5 table creation", function() {
		pause();
		setTimeout(function() {
			$('#columns').val('5');
			$('#rows').val('5');
			resizeTable();
			var rows = $('#prettyTable').find('tr');
			assert( rows.length === 5, 'The table has 5 rows.' );
			assert( $(rows[0]).find('td').length === 5, "The table has 5 columns." );
			resume();
		}, 1000);
	});	

	test("Test 5x5 patterns", function() {
		pause();
		setTimeout(function() {
			$('#alternateRows').click();
			assert( testPattern(alternateRows5x5), 'The table alternates rows.' );
		}, 1000);

		setTimeout(function() {
			$('#alternateColumns').click();
			assert( testPattern(alternateColumns5x5), 'The table alternates columns.' );
		}, 2000);

		setTimeout(function() {
			$('#diagonal').click();
			assert( testPattern(diagonal5x5), 'The table does diagonal.' );
		}, 3000);

		setTimeout(function() {
			$('#diamond').click();
			assert( testPattern(diamond5x5), 'The table does diamond.' );
			resume();
		}, 4000);
	});
}





