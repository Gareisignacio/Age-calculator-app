const userDayInput = document.querySelector("#day");
const userMonthInput = document.querySelector("#month");
const userYearInput = document.querySelector("#year");

const dayOutput = document.querySelector(".userDays");
const monthOutput = document.querySelector(".userMonths");
const yearOutput = document.querySelector(".userYears")

const btn = document.querySelector("#icon");

const date = new Date();
const [month, day, year] = [
   date.getMonth(),
   date.getDate(),
   date.getFullYear(),
];

btn.addEventListener("click", ()=>{
   dayValue = userDayInput.value;
   monthValue = userMonthInput.value;
   yearValue = userYearInput.value;

   let para = document.createElement("p")

   if(dayValue > 31){
      para.textContent = "Must be a valid day"
      userDayInput.parentElement.appendChild(para);
      para.style.color = "red";
   } else if (monthValue > 12){
      para.textContent = "Must be a valid month"
      userMonthInput.parentElement.appendChild(para);
      para.style.color = "red";
   } else if(yearValue > year){
      para.textContent = "Must be in the past"
      userYearInput.parentElement.appendChild(para);
      para.style.color = "red";
   } else{
      yearOutput.textContent = Number(year - yearValue);

      dayOutput.textContent = Number(day -dayValue);
      monthOutput.textContent = Number(month - monthValue);
   }

})

