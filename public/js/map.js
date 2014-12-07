(function(){
  
  L.mapbox.accessToken = 'pk.eyJ1Ijoid3lraHVoIiwiYSI6IjRLMkU5MzgifQ.1BSKyhp5qSntn6ZfbVJ3XQ';

  var geocoder = L.mapbox.geocoder('mapbox.places-v1'),
    map = L.mapbox.map('map', 'wykhuh.k2lh4n8h'),
    place = document.getElementById('city');


  // queries Mapbox to get coordinates for a particular city
  geocoder.query(place.innerHTML, showMap);

  function showMap(err, data) {
    var lat = data.latlng[0] || 0;
    var lon = data.latlng[1] || 0;

    // set center point and zoom level for map
    map.setView([lat, lon], 2);

    // add marker for the city
    L.marker(new L.LatLng(lat, lon), {
      icon: L.mapbox.marker.icon({ 'marker-color': 'ff8888'})
    }).addTo(map);

  };


})();

