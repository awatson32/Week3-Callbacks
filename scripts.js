$(document).ready(function() {
    
    $('#addNum').on('click', function add(err, result) {
        if (err) {
            alert('Nope, sorry!');
        } else {
            alert('The answer is: ' + result);
        }
    });
    
})