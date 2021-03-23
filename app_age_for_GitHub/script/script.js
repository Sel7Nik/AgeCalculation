function funAge(){
  let dateInput = document.querySelector("#idInputDate").value;
  let odjDateInput =new Date(dateInput);
  let objDateNow = new Date();
  let interval = objDateNow-odjDateInput;
  let yearAge = Math.floor(interval/(1000*60*60*24*365.25));
  let monthAge = Math.floor((interval-(yearAge*(1000*60*60*24*365.25)))/(1000*60*60*24*30));

// return ("For date " + dateInput + " age is  " +'<br>'+ yearAge + " year and " + monthAge + " month");
document.querySelector(".howManyYears").innerHTML = ("For date " + dateInput + " age is  " +'<br>'+ yearAge + " year and " + monthAge + " month");
}

// function funAge(){
//   document.querySelector(".howManyYears").innerHTML = getForms ();
// }