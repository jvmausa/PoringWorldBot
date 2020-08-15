const fuzzysort = require('fuzzysort');
const lists = require('./lists.js');
const itemdict = require('./itemdict.json');
let extras = ["mvp card", "mini card", "mvp★ card", "mini★ card", "mvp/mini card", "mvp/mini★ card", "undead card", "dead card", "revenant card", "boss card"];
itemdict = itemdict.concat(extras);

let fuzzy = {};

// RETURNS undefined IF NOT FOUND A MATCH

fuzzy.enchant = function(query) {
	let result = fuzzysort.go(query, lists.enchant, { limit: 1 })[0];
	return result === undefined ? undefined : result.target;
};

fuzzy.parameter = function(query) {
	let result = fuzzysort.go(query, lists.parameter, { limit: 1 })[0];
	return result === undefined ? undefined : result.target;
};

fuzzy.name = function(query) {
	let result = fuzzysort.go(query, itemdict, { limit: 1 })[0];
	return result === undefined ? undefined : result.target;
}










module.exports = fuzzy;
