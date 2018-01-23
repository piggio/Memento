$(document).ready(function(){
	
	$('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs li').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
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