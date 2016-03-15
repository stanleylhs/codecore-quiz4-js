var mongoose = require('mongoose'),
    Schema   = mongoose.Schema;

var CompanySchema = new Schema({
  name: {type: String, required: true},
  products:  [],
});

var Company = mongoose.model("Company", CompanySchema);

module.exports = Company;
// so var require will work
