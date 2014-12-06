  var Flickr = require("node-flickr");
  var config = require('../config/local.env');

  flickr = new Flickr(config);

  console.log('====', flickr)

  var formPhotoUrl = function(data){
    var  url = "https://farm" + data.farm + '.staticflickr.com/' + data.server + '/' + data.id + '_' + data.secret + '_m.jpg';
    return url;
  };

  var formLinkUrl = function(data){
    var  url = "https://www.flickr.com/photos/" + data.owner + '/'+ data.id + '/';
    return url;
  };

  exports.fetchFlickr = function(city, cb){
    var results = [];

    // search flickr for images that are tagged with the city
     flickr.get("photos.search", {'tags': city,  'sort': 'interestingness-desc', 'per_page': 12}, function(result){
      // console.log(result.photos.photo);

      if(result.photos) {
        var photos = result.photos.photo;
        for (var i = 0; i < photos.length; i++) {
          results.push({photo: formPhotoUrl(photos[i]), link: formLinkUrl(photos[i]) } );
        }
      }

      cb(results);
    });
  };


