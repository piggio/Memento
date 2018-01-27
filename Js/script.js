$(window).scroll(function () {
    if ($(document).scrollTop() > 50) {

        $('nav').addClass('shrink');
        $('#Livello_1-2').addClass('whiteLogo');
    } else {
        $('nav').removeClass('shrink');
        $('#Livello_1-2').removeClass('whiteLogo');
    }
});




$.getJSON("Json/data.json", function (data) {

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


$("#scrollbtn").click(function() {
    $('html, body').animate({
        scrollTop: $("#stories").offset().top
    }, 800);
});

$("#catnav").click(function() {
    $('html, body').animate({
        scrollTop: $("#cat").offset().top
    }, 800);
});

