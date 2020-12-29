$(document).ready(function() {
        console.log("hola");
        $(document).on('click', '.stark', function(){
            $.get("https://anapioficeandfire.com/api/houses/362", function(data) {
                console.log(data);

            $('#info').html(
                "<h1>House Details: </h1>" +
                
                "<h2>Name: "+ data.name + "</h2>" +
                "<h2>Words: "+ data.words + "</h2>" +

                "<p><h2>Titles:</h2>" + data.titles + "</p>"
                
            );
        });
    });
        $(document).on('click', '.targaryen', function(){
            $.get("https://anapioficeandfire.com/api/houses/378", function(data) {
                console.log(data);

            $('#info').html(
                "<h1>House Details: </h1>" +
                
                "<h2>Name: "+ data.name + "</h2>" +
                "<h2>Words: "+ data.words + "</h2>" +

                "<p><h2>Titles:</h2>" + data.titles + "</p>"
                
            );
        $(document).on('click', '.lannister', function(){
            $.get("https://anapioficeandfire.com/api/houses/229", function(data) {
                console.log(data);
    
            $('#info').html(
                "<h1>House Details: </h1>" +
                    
                "<h2>Name: "+ data.name + "</h2>" +
                "<h2>Words: "+ data.words + "</h2>" +
    
                "<p><h2>Titles:</h2>" + data.titles + "</p>"
                    
            );
        });
    });
        $(document).on('click', '.baratheon', function(){
            $.get("https://anapioficeandfire.com/api/houses/17", function(data) {
                console.log(data);

        $('#info').html(
            "<h1>House Details: </h1>" +
            
            "<h2>Name: "+ data.name + "</h2>" +
            "<h2>Words: "+ data.words + "</h2>" +

            "<p><h2>Titles:</h2>" + data.titles + "</p>"
            
            );
        });
    });
            
            
            }, 'json');
        });
    });
