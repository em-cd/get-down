$(document).ready(function() {
	// REVEAL INFO
	$('#show-info').click(function() {
		$('.description').toggleClass('hidden');
		$('#show-info').toggleClass('hide-info');
	});

	// CLOSE NO OPTIONS DIALOGUE
	$('.close-dialogue').on('click', function() {
      $('.mask').hide();
  	});


	$('div.menu, div.music, div.atmosphere').click(function() {
		$(this).toggleClass('option-select');
	});
	$('div.price').click(function() {
		if ($('.price').hasClass('option-select') !== true) {
		  	$(this).toggleClass('option-select');
		}
		  	else {
	  			if ($(this).hasClass('option-select') !== true) {
					$('div.price:not(this)').removeClass('option-select');
					$(this).toggleClass('option-select');
				}
				else {
					$(this).toggleClass('option-select');
				}
			}
	});
	$('.result').on('click', function() {
      $(this).toggleClass('show-description');
  	});
	var barData = new Array(9);
	for (var i=0; i<9; i++) {
		barData[i] = new Array(12);
		for (var j=0; j<12; j++) {
			barData[i][j];
		}
	}
	//Angelicas
	barData[0][0] = 1;
	barData[0][1] = 1;
	barData[0][2] = 1;
	barData[0][3] = 1;
	barData[0][4] = 0;
	barData[0][5] = 0;
	barData[0][6] = 1;
	barData[0][7] = 0;
	barData[0][8] = 0;
	barData[0][9] = 0;
	barData[0][10] = 1;
	barData[0][11] = 0;
	//Distrikt
	barData[1][0] = 1;
	barData[1][1] = 1;
	barData[1][2] = 1;
	barData[1][3] = 1;
	barData[1][4] = 1;
	barData[1][5] = 1;
	barData[1][6] = 1;
	barData[1][7] = 1;
	barData[1][8] = 1;
	barData[1][9] = 1;
	barData[1][10] = 1;
	barData[1][11] = 1;
	//FriendsHam
	barData[2][0] = 1;
	barData[2][1] = 0;
	barData[2][2] = 1;
	barData[2][3] = 1;
	barData[2][4] = 1;
	barData[2][5] = 0;
	barData[2][6] = 1;
	barData[2][7] = 0;
	barData[2][8] = 1;
	barData[2][9] = 0;
	barData[2][10] = 1;
	barData[2][11] = 0;
	//Hifi
	barData[3][0] = 1;
	barData[3][1] = 1;
	barData[3][2] = 0;
	barData[3][3] = 1;
	barData[3][4] = 1;
	barData[3][5] = 0;
	barData[3][6] = 1;
	barData[3][7] = 1;
	barData[3][8] = 1;
	barData[3][9] = 1;
	barData[3][10] = 0;
	barData[3][11] = 1;
	//Nation
	barData[4][0] = 1;
	barData[4][1] = 1;
	barData[4][2] = 1;
	barData[4][3] = 1;
	barData[4][4] = 1;
	barData[4][5] = 0;
	barData[4][6] = 1;
	barData[4][7] = 1;
	barData[4][8] = 1;
	barData[4][9] = 1;
	barData[4][10] = 1;
	barData[4][11] = 0;
	//Oporto
	barData[5][0] = 1;
	barData[5][1] = 1;
	barData[5][2] = 1;
	barData[5][3] = 1;
	barData[5][4] = 1;
	barData[5][5] = 0;
	barData[5][6] = 1;
	barData[5][7] = 0;
	barData[5][8] = 1;
	barData[5][9] = 1;
	barData[5][10] = 1;
	barData[5][11] = 0;
	//Sela
	barData[6][0] = 1;
	barData[6][1] = 1;
	barData[6][2] = 1;
	barData[6][3] = 1;
	barData[6][4] = 1;
	barData[6][5] = 0;
	barData[6][6] = 1;
	barData[6][7] = 0;
	barData[6][8] = 0;
	barData[6][9] = 1;
	barData[6][10] = 1;
	barData[6][11] = 1;
	//Smokestack
	barData[7][0] = 1;
	barData[7][1] = 1;
	barData[7][2] = 0;
	barData[7][3] = 1;
	barData[7][4] = 1;
	barData[7][5] = 0;
	barData[7][6] = 1;
	barData[7][7] = 1;
	barData[7][8] = 1;
	barData[7][9] = 1;
	barData[7][10] = 1;
	barData[7][11] = 1;
	//Wharf
	barData[8][0] = 1;
	barData[8][1] = 1;
	barData[8][2] = 1;
	barData[8][3] = 1;
	barData[8][4] = 1;
	barData[8][5] = 1;
	barData[8][6] = 1;
	barData[8][7] = 0;
	barData[8][8] = 1;
	barData[8][9] = 1;
	barData[8][10] = 1;
	barData[8][11] = 1;

	//Declare array for results
	var bars = $('.result');

	// SHOW RESULTS
	$('#tell-me').click(function() {
		if ($('.option').hasClass('option-select') !== true) {
			$('.mask').show();
		}
		else {
			$('#options').hide();
			$('#results').show();
			$('#app').scrollTop(0);
			$('#reset').show();
			var userData = $('div.option');
			var userSelected = [];
			for (var k=0; k<12; k++) {
				if ($(userData[k]).hasClass('option-select')) {
					userData[k] = 1;
					userSelected.push(k);
				}
				else {
					userData[k] = 0;
				}
			}
			var matches = new Array(9);
			for (var i=0; i<9; i++) {
				matches[i] = new Array();
					for (var j=0; j<12; j++) {
						if (userData[j] == 1 && barData[i][j] == 1) {
							matches[i].push(j);							}
					}
			}
			var recommend = function() {
				for (var i=0; i<9; i++) {
					if (matches[i].length == userSelected.length) {
						$(bars[i]).show();
					}
				}
			};
			recommend();
		}
	});

	// RESET ALL
	$('#reset').click(function() {
		$('#results').hide();
		$('.result').hide();
		$('#options').show();
		$('.app-body').scrollTop(0);
		$('.option').removeClass('option-select');
		$('.result').removeClass('show-description');
	});
});