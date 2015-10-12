var map;
var interval;
var marker;

function initialize() {
    map = new google.maps.Map(document.getElementById('map-canvas'), {
        center: new google.maps.LatLng(48.1293954, 11.556663), // Munich Germany
        zoom: 10
    });


}

//map.setZoom(2);

function newLocation(newLat, newLng, newZoom) {

    interval = setInterval(function () {
        map.setZoom(2);
        map.panBy(1, 0);
    }, 1000);
    
    map.setCenter({
        lat: newLat,
        lng: newLng
    });
    marker = new google.maps.Marker({
        position: { lat: newLat, lng: newLng },
        map: map
    });
    //map.panTo(position);
    map.setZoom(newZoom);
    clearInterval(interval);
}

/*
function newZoom(newZoom) {
    map.setZoom(newZoom);
}*/


google.maps.event.addDomListener(window, 'load', initialize);