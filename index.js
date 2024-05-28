

var birthdayElement = document.querySelector("input#wbdv-date-input-id");
var buttonElement = document.querySelector("button#wbdv-btn-calculate-id");
var ageShow = document.querySelector("p#wbdv-age-show-id");



function calculateAge(){
    if(birthdayElement.value ===""){
        alert("please enter your date of birth!");
        return "__";
    }
    var birthdayDate = new Date(birthdayElement.value);
    var birthdayDay = birthdayDate.getDay();
    var birthdayMonth = birthdayDate.getMonth();
    var birthdayYear = birthdayDate.getFullYear();
    
    var currentDate = new Date();
    var currentDay = currentDate.getDay();
    var currentMonth = currentDate.getMonth();
    var currentYear = currentDate.getFullYear();
    
   
    if(currentMonth<birthdayMonth || ((currentMonth===birthdayMonth) && currentDay<birthdayDay)){
       return currentYear - (birthdayYear+1);
    }else{
        return currentYear - (birthdayYear);
    }
}



 buttonElement.addEventListener("click",function (event){
    event.preventDefault();
    var age = calculateAge();
    ageShow.innerText = `Your age is ${age} years old`;
});







