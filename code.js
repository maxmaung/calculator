$(function () {

var inputOne = "";
var inputTwo = "";
var operator = "";
var result = "";

$(".clear").on('click', function(){
$(".screen").empty()

    });


    $(".number").on('click',function(){

        var currentNumber = $(this).text()
        // console.log(currentNumber)
        $(".screen").append(currentNumber)


        if (operator === "+"){

          $(".screen").empty()

          var newNumber = $(this).text()

          $(".screen").append(newNumber)

        }

    });

    $(".add").on('click', function(){
        inputOne = $(".screen").text()
        inputOne = parseInt(inputOne)
        operator = $(this).text()
        console.log(operator)

    });


    $(".equal").on('click', function(){

          inputTwo = $(".screen").text()
          inputTwo = parseInt(inputTwo)

          if(operator === "+") {
            $(".screen").empty()
          }

          operator = ""
          console.log(operator)

          result = inputOne + inputTwo
          $('.screen').append(result)

    })


});
