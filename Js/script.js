$.getJSON("Json/data.json", function (data) {

    var storie = data.stories;

    console.log(storie);
    console.log(document.getElementById("entry-template"));
    var source = document.getElementById("entry-template").innerHTML;
    var template = Handlebars.compile(source);

    console.log(data);


    for (var i = 0; i < 3; i++) {

        console.log(i);
        var context = storie[i];




        var html = template(context);

        console.log(html);
        $('#cards').append(html);



    }



});
