$(function(){
//Back End
//create an array from 0-userInput;
  function count(number) {
  for (var i = 0 ; i <= number ; i++) {
    arr.push(i);
  }
  return arr;
}
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
        arr.splice(i,1,"I'm sorry Dave I can't do that");
      }
    }
  }


//Front End
  $("form").submit(function(event){
    event.preventDefault();
    var userInput = $("input#field1").val();
    var nameInput = $("inputefield2").val();
    var arr = []; //clears the array so user make multiple attempts
    var numbers = count(userInput);
    rules(numbers);
    $("#result").text(arr);
  })
}























});
