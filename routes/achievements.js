var express = require('express');
var https = require('https');
var router = express.Router();

var getAchievements = function(battletag, callback){
  var url = 'https://api.lootbox.eu/pc/us/' + battletag + '/achievements'
    https.get(url, function(res){
      var body = "";
      var data = {};
      res.on('data', function(chunk){
        body += chunk;
      });
      res.on('end', function(){
        data = JSON.parse(body);
        return callback(data);
      });
    });
};

/* GET achievements page. */
router.get('/:battletag?', function(req, res, next) {
  var battletag = req.params.battletag;
  if (battletag === undefined){
    res.send('Achievements for now');
  }else if (battletag.indexOf('-') === -1){
    res.send('User not found');
  }else{
    getAchievements(battletag, function(data){
      res.render('achievements', {'battletag': battletag.replace('-','#'), 'data': data});
    });
  }
});

/* POST achievements page. */
router.post('/', function(req, res, next){
  var battletag = req.body.battletag;
  res.redirect('achievements/' + battletag);
});

module.exports = router;