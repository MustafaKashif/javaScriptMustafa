// Chapter No. 26 - 30

// Question No. 01
// var inputFromUser = +prompt("Enter any positive Integer in decimal values : ")
// document.write("Number is : " , inputFromUser , "<br/>")
// document.write("Round Off value is : ", Math.round(inputFromUser), "<br/>")
// document.write("Floor Value is : ", Math.floor(inputFromUser), "<br/>")
// document.write("Ceil Value is : ", Math.ceil(inputFromUser), "<br/>")

// Question No. 02
// var inputFromUser = +prompt("Enter any Negative Integer in decimal values : ")
// document.write("Number is : " , inputFromUser , "<br/>")
// document.write("Round Off value is : ", Math.round(inputFromUser), "<br/>")
// document.write("Floor Value is : ", Math.floor(inputFromUser), "<br/>")
// document.write("Ceil Value is : ", Math.ceil(inputFromUser), "<br/>")

// Question No. 03
// var inputFromuser = +prompt("Enter any negative value : ")
// document.write("The Absolute value of the given value is : ", Math.abs(inputFromuser))

// Question No. 04
// document.write("The value of dice is : ", Math.floor(Math.random()*6 + 1))

// Question No. 05
// var randomCoin = Math.floor(Math.random() * 2 + 1   )
// if(randomCoin == 1){
//     document.write("Tails !")
// }
// else{
//     document.write("Heads !")
// }

// Question No. 06
// document.write("The random Number between 1 and 100 is : ", Math.floor(Math.random()*100 + 1))


// Question No. 07
// var inputFromUser = +prompt("Enter any random number between 1 to 10 : ")
// var randomNumber = Math.floor(Math.random() * 10 + 1)
// if(inputFromUser === randomNumber){
//     document.write("Congratulations !")
// }
// else{
//     document.write("Try Again")
// }

// Chapter No. 26 - 30 Completed

// Chapter No. 31 - 34

// Question No. 01 

// var todayDate = new Date();
// document.write(todayDate);   

// Question No. 02

// var todayDate = new Date();
// var string = todayDate.toString();
// var month = string.slice(4, 7);
// if (month === "Jan"){
//     document.write("Current month: January")
// }else if(month === "Feb"){
//     document.write("Current month: February")
// }else if(month === "Mar"){
//     document.write("Current month: March")
// }else if(month === "Apr"){
//     document.write("Current month: April")
// }else if(month === "May"){
//     document.write("Current month: May")
// }else if(month === "Jun"){
//     document.write("Current month: June")
// }else if(month === "Jul"){
//     document.write("Current month: July")
// }else if(month === "Aug"){
//     document.write("Current month: August")
// }else if(month === "Sep"){
//     document.write("Current month: September")
// }else if(month === "Oct"){
//     document.write("Current month: October")
// }else if(month === "Nov"){
//     document.write("Current month: November")
// }else if(month === "Dec"){
//     document.write("Current month: December")
// }

// Question No. 03

// var todayDate = new Date();
// var string = todayDate.toString();
// var day = string.slice(0, 3);
// document.write("Today is : "+day);

// Question No. 04

// var day = todayDate.getDay();
// if(day == 0 || day == 6){
//     document.write("It's Funday");
// }

// Question No. 05

// var days = todayDate.getDay();
// if(days > 0 || days <= 15){
//       document.write("First fifteen days of the month");
// }
// else if(days > 15 || days <= 30){
//       document.write("Last days of the month");
// }

// Question No. 06

// var todayDate = new Date();
// document.write(todayDate);
// document.write("<br>");
// var millisecondToday = todayDate.getTime();
// var minutes = millisecondToday / 60000;
// document.write("<br>");
// document.write("Elapsed Milliseconds from Jan 1 , 1970 : "+millisecondToday);
// document.write("<br>");
// document.write("Elapsed minutes from Jan 1, 1970 : "+minutes);

// Question No. 07

// var todayDate = new Date();
// var today = todayDate.toString();
// var time = today.slice(12, 14);
// if(time >= "00" || time <= "12"){
//     document.write("It's AM");
// }
// else if(time >= "13" || time <= "24"){
//     document.write("It's PM");
// }

// Question No. 08

// var laterDate = new Date();
// var later = laterDate.setDate("00");
// var later = laterDate.setMonth("11");
// var later = laterDate.setFullYear("2020");
// var later = laterDate.setHours("00");
// var later = laterDate.setMinutes("00");
// var later = laterDate.setSeconds("00");
// document.write(laterDate);

// Question N0. 09

// var todayDate = new Date();
// var d = todayDate.setDate("16");
// var m = todayDate.setMonth("08");
// var thatDay = new Date();
// var da = thatDay.setDate("18");
// var mo = thatDay.setMonth("05");
// var ye = thatDay.setFullYear("2015");
// var td = todayDate.getTime();
// var thd = thatDay.getTime();
// var difference = Math.floor((td - thd)/(1000 * 60 * 60 * 24)); 
// document.write(difference+" "+"Days passed since 1st Ramadan 2015");

// Question No. 10

// var todayDate = new Date();
// var dateO = todayDate.setDate("01");
// var yearO = todayDate.setFullYear("2022");
// var monthO = todayDate.setMonth("00");
// var thatDay = new Date();
// var secondsToday = todayDate.getTime();
// var secondsThatDay = thatDay.getTime();
// var result = (secondsThatDay - secondsToday)/1000;
// document.write(result+" "+"Seconds have passed since 2022 starts");

// Question No. 11

// var todayDate = new Date();
// document.write("Current Date is : "+todayDate);
// var laterDay = new Date();
// var year = laterDay.setHours("10");
// document.write("<br>1 Hours ago on this same day : "+laterDay);

// Question No. 12

// var todayDate = new Date();
// document.write("Current Date is : "+todayDate);
// var laterDay = new Date();
// var year = laterDay.setFullYear("1922");
// document.write("<br>100 years ago on this same day : "+laterDay);

// Question No. 13

// var input = parseInt(prompt("Enter your Age : "));
// var currentYear = 2022;
// var YearOfBirth = currentYear - input;
// document.write("Your birth year is : "+YearOfBirth);

// Question No. 14

// var customerName = prompt("Enter your Name : ");
// var monthName = prompt("Enter the Name of the month : ");
// var numberOfUnits = parseFloat(prompt("Enter the number of units : "));
// var chargePerUnit = parseFloat(prompt("Enter the Charge per unit : "));
// var latePaymentCharge = parseFloat(prompt("Enter the late payment Charge : "));
// var netAmount = numberOfUnits * chargePerUnit;
// var grossAmount = netAmount + latePaymentCharge;
// document.write("<br><b>K-Electric Bill</b>");
// document.write("<br>Customer Name : "+customerName);
// document.write("<br>Name of the Month : "+monthName);
// document.write("<br>Number of Units : "+numberOfUnits.toFixed(2));
// document.write("<br>Charges per unit : "+chargePerUnit.toFixed(2));
// document.write("<br>Net Amount Payabale (Within due Date): "+netAmount.toFixed(2));
// document.write("<br>Late Payment Charges : "+latePaymentCharge.toFixed(2));
// document.write("<br>Gross amount Payable (After Due Date):"+grossAmount.toFixed(2));

// Chapter No. 31-34 Completed 
