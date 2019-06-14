$(function(){
  var arr =[];
  var dave = "I'm sorry Dave I can't do that"
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
//finds Daves and replaces them with the users' inputted name
  function notDave(name) {
    for (var i = 0; i < arr.length; i++) {
      if (i%3 && ) {
        alert(arr[i]);
        var j = arr[i].split(' ');
        j.splice(2,1,name)
      }
    }
  }


//Front End
  $("form").submit(function(event){
    event.preventDefault();
    var userInput = $("input#field1").val();
    var nameInput = $("inputefield2").val();
    arr = []; //clears the array so user make multiple attempts
    var numbers = count(userInput);
    rules(numbers);
    notDave(nameInput);
    $("#result").text(arr);
  })

























});
