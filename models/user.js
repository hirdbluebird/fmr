const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema({
	username:  String,
	password:  String,
	firstName: String,
	lastname:  String
});

module.exports = mongoose.model('User', User);