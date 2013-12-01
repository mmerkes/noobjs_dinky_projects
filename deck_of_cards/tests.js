// TEST SUITE

var cache = {};
var state = cache.myDeck;

test("Async Test #1", function() {
	pause();
	setTimeout(function() {
		assert(true, "First test completed");
		resume();
	}, 200);
});

test("Initialize deck", function() {
	pause();
	setTimeout(function() {
		state = deck_of_cards();
		assert( state.deck.length === 52, "This is a full deck." );
		resume();
	}, 400);
});

test("Shuffling method", function() {
	pause();
	setTimeout(function() {
		cache.deckA = state.deck;
		state.shuffle_deck();
		assert( state.deck === state.deck, "The deck does equal itself.");
		assert( state.deck !== cache.deckA, "The shuffle function works.");
		resume();
	}, 600);
});

test("Dealing method", function() {
	pause();
	setTimeout(function() {
		cache.hands = state.deal( 4, 6 );
		assert( cache.hands.length === 4, "This deck has 4 hands.");
		assert( cache.hands[0].length === 6, "Each hand has 6 cards.");
		resume();
	}, 800);
});

test("Drawing and replenish methods", function() {
	pause();
	setTimeout(function() {
		cache.deck_length = state.deck.length;
		state.draw();

		assert( (cache.deck_length - 1) === state.deck.length, "Drawing works.");

		assert( state.deck.length !== 52, "Confirms that we don't have a full deck.");
		state.replenish_deck();
		assert( state.deck.length === 52, "The deck was replenished.");
		resume();
	}, 1000);
});
