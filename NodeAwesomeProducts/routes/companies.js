var express  = require('express'), 
    router   = express.Router(),
    Company = require('../models/company');

/* GET Company new. */
router.get('/new', function(req, res, next) {
  res.render('companies/new', {errors: {}});
});

// POST Company create
router.post('/', function(req, res, next) {
  // console.log('Request:', req.body.name);
  // console.log('Request:', req.body.body);
  // debugger
  var company = new Company({name: req.body.name,
                               products:  req.body.products
  });
  // don't wait, make a callback instead
  company.save(function(err, company){
    if(err) {
      // can define error with error{name: "Blah"}
      res.json({errors: err.errors});
    } else {
      res.json(company);
    }
  });
});

// GET Company :id show
router.get('/:id', function (req, res) {
  Company.findById(req.params.id, function(err, company) {
    if (err){
        res.render('error', { message: 'Not found',
                              error: {status: 404}
                            });
    } else {
        res.render('companies/show', {company: company})
    }
  });
});

// GET Company :id edit
router.get('/:id/edit', function (req, res) {
  Company.findById(req.params.id, function(err, company) {
    if (err){
        res.render('error', { message: 'Not found',
                              error: {status: 404}
                            });
    } else {
        res.render('companies/edit', {company: company, errors:{}});
    }
  });
});

// PATCH Company :id update
router.patch('/:id', function (req, res) {
  Company.findByIdAndUpdate(
    req.params.id, 
    {name: req.body.name,
     body:  req.body.body}, 
    function(err, company) {
      if (err){
        res.render('companies/edit', {company: company, errors: err.errors });
      } else {
        res.redirect(company._id);
      }
    }
  );
});

// GET Companys index
router.get('/', function (req, res) {
  Company.find('', function(err, companies){
    if (err){
      res.render('error', { message: 'Error',
                            error: {status: 500}
                          });
    } else {
      res.json(companies);
    }
  });
});

// DELETE Company
router.delete('/:id', function (req, res) {
  Company.findByIdAndRemove(
    req.params.id,
    function(err, company) {
      if (err){
        res.render('error', { message: 'Error',
                              error: {status: 500}
                            });
      } else {
        res.redirect('/companies');
      }
    }
  );
});

// router.delete("/:id", function(req, res) {
//   Company.remove({_id: req.params.id}, function(err, company){
//     if(err) {
//       res.render("companies/"+ company.id, {errors: err.errors, company: company});
//     } else {
//       res.redirect("/companies");
//     }
//   });
// });

module.exports = router;
