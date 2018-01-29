$(document).ready(function(){
	
	$('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs li').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	})

})


var myMap = L.map('mapScheda').setView([41.886191, 12.489877], 6);

L.tileLayer('https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href=   "http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 11,
    minZoom: 2,
    id: 'mapbox.streets',
    accessToken: 'your.mapbox.access.token'
}).addTo(myMap);

$.getJSON("../Json/data.json", function (data) {

    var locations = {};

    data.stories.forEach(function (story) {
        story.places.forEach(function (place) {
            if (locations.hasOwnProperty(place.id)) {
                locations[place.id]["infoStories"].push(story.title)
            } else {
                locations[place.id] = place;
                locations[place.id]["infoStories"] = [story.title];
            }

        });
    });

    console.log(locations, Object.values(locations));

    Object.values(locations).forEach(function (place) {
        L
            .marker([place.latitude, place.longitude])
            .bindPopup("<span>" + place.name + "</span><br><ul><li>" + place.infoStories.join("</li><li>"))
            .addTo(myMap);
    })
})



$.getJSON("correlati.json", function (data) {

    var storie = data.stories;

    console.log(storie);
    console.log(document.getElementById("entry-template"));
    var source = document.getElementById("entry-template").innerHTML;
    var template = Handlebars.compile(source);

    console.log(data);

    storie.sort(function (a, b) {
            return b.views - a.views;
        })
        .slice(0, 3)
        .forEach(function (s) {
            $('#cards').append(template(s));
        });



});









