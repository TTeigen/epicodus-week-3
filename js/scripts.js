$(function(){
  var arr =[];
  var dave = "I'm sorry Dave I can't do that";
//Back End
//create an array from 0-userInput;
  function count(number) {
    for (var i = 0 ; i <= number ; i++) {
      arr.push(i);
    };
    return arr;
};
//check indices for 1,2,3 exceptions
  function rules(arr) {
    for (var i = 0; i < arr.length; i++) {
      if (i > 9){
        var check = arr[i].toString().split('');
      } else {
        var check = arr[i].toString();
      }
      if (check.indexOf('1') >=0  && check.indexOf('2') < 0 && check.indexOf('3') < 0) {
        arr.splice(i,1,"Beep!");
      } else if (check.indexOf('2') >= 0  &&  check.indexOf('3') < 0) {
        arr.splice(i,1,"Boop");
      } else if (check.indexOf('3') >= 0) {
        arr.splice(i,1,dave);
      }
    }
  };
//finds Daves and replaces them with nameInput
  function isDave(nameInput){
    for (var i = 3; i < arr.length; i+=3) {
      var check = arr[i].toString().split(" ");
      if (check.indexOf("Dave") > 0) {
      arr[i] = "I'm sorry "+nameInput+" I can't do that";
      }
    }
  }



//Front End
  $("form").submit(function(event){
    event.preventDefault();
    var userInput = $("input#field1").val();
    if (userInput > 500) {
      $(".longtime").show();
    }
    var nameInput = $("input#field2").val();
    arr = []; //clears the array so user make multiple attempts
    if (!nameInput) {
      alert("Please enter your name! It's important :)");
    } else {
      var numbers = count(userInput);
      rules(numbers);
      isDave(nameInput);
      $("#result").text(arr);
      $("form")[0].reset();
    }
  })
});
