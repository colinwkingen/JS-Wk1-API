var apiKey = "AIzaSyAGZqHCSiz3soGvUCJCZWtJ3gMC50fMuoU";

function Map() {

}
Map.prototype.initMap = function initMap() {
  var mapDiv = document.getElementById('map');
  var map = new google.maps.Map(mapDiv, {
      center: {lat: 45.5231, lng: -122.6765},
      zoom: 8
  });
};

exports.mapModule = Map;
