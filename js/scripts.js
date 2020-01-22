$(document).ready(function () {
    var total;
    
    //Submit button function
    $('form#fortune').submit(function (event) {
        event.preventDefault();
        
        var badThings = [];
        var goodThings = [];

        $('input:checkbox[name=unlucky]:checked').each(function () {
            var selectedOption = parseInt($(this).val());
            badThings.push(selectedOption);
        });

        $('input:checkbox[name=good]:checked').each(function () {
            var selectedOption = parseInt($(this).val());
            goodThings.push(selectedOption);
        });

        if(badThings.length > 0 && goodThings.length > 0){
            total = (badThings.reduce(function(a,b){return a + b})) - (goodThings.reduce(function(a,b){return a + b}));
        } else if (badThings.length === 0 && goodThings.length >= 1 ){
            total = 0;
        } else if (badThings.length >= 1 && goodThings.length === 0) {
            total = badThings.reduce(function(a,b){return a + b});
        } else {
            total = 10000;
        }

        
        console.log(total);
        $('.result').empty();


        if (total <= 100) {
            printResult("You will get a coding job")
        } else if (total > 101 && total < 250) {
            printResult("your mother will learn to make soup, better.")
        } else if(total > 250){
            printResult("You will win a perfectly adequate pen.")
        } else {
            printResult("fail");
        };

        // printOutArray(badThings);
        // printOutArray(goodThings);

    });



    //Write to page Functions
    function printOutArray(printThis) {
        var result = $('.result');
        printThis.forEach(function (item) {
            result.append('<li>' + item + '</li>');
        });
    }

    function printResult(item) {
        var result = $('.result');
        result.append('<li>' + item + '</li>');
    } 


});


/*fortune options:
1. You will get a coding job. = 250 >
2. your mother will learn to make soup, better.= 250 - 100
3. You will win a perfectly adequate pen = 100 <
*/