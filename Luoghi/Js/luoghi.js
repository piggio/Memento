var myMap = L.map('mapSearch').setView([41.886191, 12.489877], 6);

L.tileLayer('https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
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

    /* PLUGIN CLUSTER */
    var dataSource = new Bloodhound({
        datumTokenizer: Bloodhound.tokenizers.obj.whitespace('name'),
        queryTokenizer: Bloodhound.tokenizers.whitespace,
        identify: function (obj) {
            return obj.id;
        },
        local: Object.values(locations)
    });


    dataSource.initialize();

    $('#searchInput').typeahead({
        highlight: true,
        minLength: 1,
    }, {
        name: 'cities',
        display: 'name',
        source: dataSource
    });
    console.log(data.stories.title)
    $('#searchInput').bind('typeahead:select', function (e, suggestion) {
        $('#results').append('<h1>' + data.stories.title + '</h1>')
    });

});
