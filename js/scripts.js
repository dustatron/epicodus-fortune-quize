$(document).ready(function () {
    
    //Submit button function
    $('form#fortune').submit(function (event) {
        event.preventDefault();
        
            var badThings = [];
            var goodThings = [];

        $('input:checkbox[name=unlucky]:checked').each(function () {
            var selectedOption = $(this).val();
            badThings.push(selectedOption);
        });

        $('input:checkbox[name=good]:checked').each(function () {
            var selectedOption = $(this).val();
            goodThings.push(selectedOption);
        });

        $('.result').empty();
        printOutArray(badThings);
        printOutArray(goodThings);
    });

    //Write to page
    function printOutArray(printThis) {
        var result = $('.result');
        printThis.forEach(function (item) {
            result.append('<li>' + item + '</li>');
        });
    }

});
