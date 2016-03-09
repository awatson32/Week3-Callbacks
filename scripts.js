$(document).ready(function() {
    
    $('#addNum').on('click', function () {
        davidsLib.add(op1, op2, function(err, result) {
            if (err) {
                alert(err);
            } else {
                alert('The answer is: ' + result);
            }      
        })
    });
    
    $('#subtract').on('click', function() {
        davidsLib.subtract(op1, op2, function(err, result) {
            if (err) {
                alert(err);
            } else {
                alert('The answer is ' + result);
            }
        })
    });
    
    $('#multiply').on('click', function() {
        davidsLib.multiply(op1, op2, function(err, result) {
            if (err) {
                alert(err);
            } else {
                alert('The answer is ' + result);
            }
        })
    });
    
    $('#divide').on('click', function() {
        davidsLib.divide(op1, op2, function(err, result) {
            if (err) {
                alert(err);
            } else {
                alert('The answer is ' + result);
            }
        })
    });
    
})