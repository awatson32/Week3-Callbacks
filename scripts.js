$(document).ready(function() {
    
    $('#addNum').on('click', function add(op1, op2) {
        davidsLib.add(function(err, result) {
            if (err) {
                alert(err);
            } else {
                console.log('The answer is: ' + result);
            }
            
        })
    });
    
})