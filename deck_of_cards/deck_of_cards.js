function deck_of_cards() {
	// define the suits of a deck
	this.suits = [ 'hearts', 'diamonds', 'spades', 'clubs'];
	// define each possible value for the cards
	this.values = [ 'A', '2', '3', '4', '5', '6', '7',
			'8', '9', '10', 'J', 'Q', 'K'];

	// initialize a 52 card deck which will look like this:
	// [{ suit: 'hearts', value: 'A'}, ...]
	this.deck = (function() {
		var deck = [];
		// go through each suit and create each card
		this.suits.forEach( function(suit) {
			this.values.forEach( function( value ) {
				// push each card to the deck
				deck.push( { suit: suit, value: value });
			});
		});

		return deck;
	})();

	// log every card in the deck
	this.log_deck = function() {
		this.deck.forEach( function( card ) {
			console.log(card.value + " of " + card.suit);
		});
	};

	// shuffle the order of 'deck'
	this.shuffle_deck = function() {
		var temp = this.deck;
		this.deck = [];
		var index;

		while( temp.length ) {
			index = Math.floor( Math.random( 0 ) * temp.length );
			this.deck.push( temp[index] );
			temp.splice( index, 1 );
		}
	};

	// take a number of players and number of cards in each
	// hand, deal out cards, and return an array with
	// each of the hands
	this.deal = function( players, hand_num ) {
		var hands = [];
		var index; 

		for (var i = 0; i < players; i++) {
			hands[i] = [];

			for (var j = 0; j < hand_num; j++) {
				hands[i].push( this.draw() );
			}
		}

		return hands;
	};

	// draw the top card in the deck
	this.draw = function() {
		return this.deck.pop();
	}

	// resets deck to 52 cards
	this.replenish_deck = function() {
		var deck = [];
		// go through each suit and create each card
		this.suits.forEach( function(suit) {
			this.values.forEach( function( value ) {
				// push each card to the deck
				deck.push( { suit: suit, value: value });
			});
		});

		this.deck = deck;
	}

	return this;	
};





