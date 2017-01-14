$(function () {

var inputOne = "";
var inputTwo = "";
var operator = "";
var result = "";
var operatorWasClicked = false;

$(".clear").on('click', function(){
      $(".screen").empty()
});


    $(".number").on('click',function(){

        var currentNumber = $(this).text()
        // console.log(currentNumber)
        $(".screen").append(currentNumber)


        if (operatorWasClicked === true){

          $(".screen").empty()

        var newNumber = $(this).text()

          operatorWasClicked = false

        $(".screen").append(newNumber)


      } else if (operatorWasClicked === true){

          $(".screen").empty()

        var newNumber = $(this).text()

        operatorWasClicked = false

        $(".screen").append(newNumber)


        }


  });

    $(".add").on('click', function(){
        inputOne = $(".screen").text()
        inputOne = parseInt(inputOne)
        operator = $(this).text()
        console.log(operator)
        operatorWasClicked = true

    });

    $(".minus").on('click', function(){
        inputOne = $(".screen").text()
        inputOne = parseInt(inputOne)
        operator = $(this).text()
        console.log(operator)
        operatorWasClicked = true
    });



    $(".equal").on('click', function(){

          inputTwo = $(".screen").text()
          inputTwo = parseInt(inputTwo)

          $(".screen").empty()


          if (operator === "+"){
              result = inputOne + inputTwo
          }else if (operator === "-"){
              result = inputOne - inputTwo
          }

          $('.screen').append(result)

          operator = ""
          console.log(operator)

    })

});
