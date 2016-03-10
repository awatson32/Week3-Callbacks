$(document).ready(function() {
    
    
    
    
    $('#addNum').on('click', function () {
        $('#addNum').addClass('btn-active');
        $(this).text('Loading...');
        
        var num1 = $('#op1').val();
        var num2 = $('#op2').val();
        davidsLib.add(num1, num2, function(err, result) {
            if (err) {
                alert(err);
            } else {
                console.log(result);
                alert('The answer is: ' + result);
            } 
            $('#addNum').removeClass('btn-active').text('Add');     
        });
    });
    
    $('#subtract').on('click', function() {
        $('#subtract').addClass('btn-active');
        $(this).text('Loading...');
        
        var num1 = $('#op1').val();
        var num2 = $('#op2').val();
        davidsLib.subtract(num1, num2, function(err, result) {
            if (err) {
                alert(err);
            } else {
                alert('The answer is ' + result);
            }
            $('#subtract').removeClass('btn-active').text('Subtract');
        });
    });
    
    $('#multiply').on('click', function() {
        $('#multiply').addClass('btn-active');
        $(this).text('Loading...');
        
        var num1 = $('#op1').val();
        var num2 = $('#op2').val();
        davidsLib.multiply(num1, num2, function(err, result) {
            if (err) {
                alert(err);
            } else {
                alert('The answer is ' + result);
            }
            $('#multiply').removeClass('btn-active').text('Multiply');
        })
    });
    
    $('#divide').on('click', function() {
        $('#divide').addClass('btn-active');
        $(this).text('Loading...'); 
        
        var num1 = $('#op1').val();
        var num2 = $('#op2').val();
        davidsLib.divide(num1, num2, function(err, result) {
            if (err) {
                alert(err);
            } else {
                alert('The answer is ' + result);
            }
            $('#divide').removeClass('btn-active').text('Divide');
        })
    });
    
})