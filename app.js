const userDayInput = document.querySelector("#day");
const userMonthInput = document.querySelector("#month");
const userYearInput = document.querySelector("#year");

const dayOutput = document.querySelector(".userDays");
const monthOutput = document.querySelector(".userMonths");
const yearOutput = document.querySelector(".userYears")

const btn = document.querySelector("#icon");

let todayString = new Date().toISOString().split("T")[0];

let todayArray = todayString.split("-")


const date = new Date();
const [month, day, year] = [
   date.getMonth() + 1,
   date.getDate(),
   date.getFullYear(),
];

btn.addEventListener("click", ()=>{
   dayValue = userDayInput.value;
   monthValue = userMonthInput.value;
   yearValue = userYearInput.value;
   let para = document.createElement("p")
   let unvalid = document.querySelectorAll(".unvalid")

   let yearDif, monthDif, dayDif;

   yearDif = year - yearValue;
   monthDif = month - monthValue;
   dayDif = day - dayValue;

   let arrayToday = [userYearInput.value, userMonthInput.value, userDayInput.value]

   console.log(arrayToday)
   

   if(dayValue > 31){
   } else if (monthValue > 12){
   } else if(yearValue > year){
   } else{
      if(dayDif < 1){
         monthOutput.textContent = monthDif -1;
         yearOutput.textContent = yearDif;
         if(month === 4 || month === 6 || month === 9 || month === 11 ){
            dayOutput.textContent =  dayDif + 30;
         } else if(month === 2){
            dayOutput.textContent = dayDif + 28;
         } else{
            dayOutput.textContent = dayDif + 31;
         }
      } else{ 
         dayOutput.textContent =  dayDif;
         monthOutput.textContent = monthDif;
         yearOutput.textContent = yearDif;
      }
   }

})
let ageDif = new Object();
const [userMonth, userDay, userYear] = [
   userMonthInput.value,
   userDayInput.value,
   userYearInput.value,
];
