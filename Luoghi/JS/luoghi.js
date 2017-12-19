var myMap = L.map('mapSearch').setView([41.886191, 12.489877], 6);

L.tileLayer('https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'your.mapbox.access.token'
}).addTo(myMap);

$.getJSON("../../Json/data.json", function (data) {

    var places = []; /* deve essere un obj con id dei luoghi */

    data.stories.forEach(function (story) {
        story.places.forEach(function (place) {
            places.push(place);

            /* invece di avere elenco di storie con luoghi, dobbiamo avere elenco di luoghi con storie */

        });
    });

    console.log(places);

    places.forEach(function (place) {
        L.marker([place.latitude, place.longitude]).addTo(myMap);
    })

})


/* PLUGIN CLUSTER */
