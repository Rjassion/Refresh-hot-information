var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
	res.render('index', {});
});

router.get('/home/:file', function (req, res, next) {
    var file = req.params.file || 'login';
    res.render('home/' + file, { title: file });
});

router.post('/json1', function (req, res) {
	res.setHeader('Access-Control-Allow-Origin', '*');
    res.json({
        "code":1001,
        "info":['Schweinsteiger','Martial','Memphis','Darmian','Shaw','Smalling','Roney'],
        "msg":"success"
    });
});
module.exports = router;
