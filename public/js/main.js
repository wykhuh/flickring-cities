
(function(){
  var photos = document.getElementsByClassName("photo");

  for(var i = 0; i < photos.length; ++i){
      photos[i].onmouseover = function() {
          var el = this;
          el.lastChild.className ='show';
      };
      photos[i].onmouseout = function() {
          var el = this;
          el.lastChild.className ='hide';
      };
  }
})();
