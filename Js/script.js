$(window).scroll(function () {
    if ($(document).scrollTop() > 50) {

        $('nav').addClass('shrink');
        $('#Livello_1-2').addClass('whiteLogo');
    } else {
        $('nav').removeClass('shrink');
        $('#Livello_1-2').removeClass('whiteLogo');
    }
});


/*$(function () {
    $.scrollify({
        section: "section",
        interstitialSection: ".foot",
    });
});*/



$.getJSON("Json/data.json", function (data) {

    var storie = data.stories;

    console.log(storie);
    console.log(document.getElementById("entry-template"));
    var source = document.getElementById("entry-template").innerHTML;
    var template = Handlebars.compile(source);

    storie.sort(function (a, b) {
            return b.views - a.views;
        })
        .slice(0, 3)
        .forEach(function (s) {
            $('#cards').append(template(s));
        });


<<<<<<< HEAD
});

<<<<<<< HEAD
$("#scrollbtn").click(function() {
    $('html, body').animate({
        scrollTop: $("#stories").offset().top
    }, 1000);
});

$("#catnav").click(function() {
    $('html, body').animate({
        scrollTop: $("#cat").offset().top
    }, 1000);
});


=======

//$.getJSON("Json/data.json", function (data) {}
>>>>>>> 13192efd999d8c88f4f175d4292dd565f741d176
=======
});


//$.getJSON("Json/data.json", function (data) {}
>>>>>>> 13192efd999d8c88f4f175d4292dd565f741d176
