  var Flickr = require("node-flickr");
  console.log('====',process.env.NODE_ENV )

  // if loc.env file exists, use it to get Flickr API key
  try {
    config = require('../config/local.env');
  // else set Flickr API key on the server
  } catch (e) {
    config = {"api_key": process.env.API_KEY};
  }

  flickr = new Flickr(config);

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
      // console.log(result.photos);

      if(result.photos) {
        var photos = result.photos.photo;
        for (var i = 0; i < photos.length; i++) {
          results.push({photo: formPhotoUrl(photos[i]),
                       link: formLinkUrl(photos[i]),
                       title: photos[i].title
                     } );
        }
      }

      cb(results);
    });
  };


