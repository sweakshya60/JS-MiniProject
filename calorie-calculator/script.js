function inputCaloriesByDay(day) {
  if(day === 'Monday'){
    return 3500;
  }
  else if(day === 'Tuesday'){
    return 1000;
  }
  else if(day === 'Wednesday'){
    return 1500;
  }  
  else if(day === 'Thursday'){
    return 2000;
  } 
  else if(day === 'Friday'){
    return 2500;
  } 
  else if(day === 'Saturday'){
    return 3000;
  } 
  else if(day === 'Sunday'){
    return 500;
  }
  else{
    return 'Please choose valid day';
  }
}

function getTotalCalories() {
  return inputCaloriesByDay('Monday') + 
  inputCaloriesByDay('Tuesday') + inputCaloriesByDay('Wednesday') 
  + inputCaloriesByDay('Thursday') + inputCaloriesByDay('Friday') 
  + inputCaloriesByDay('Saturday') + inputCaloriesByDay('Sunday');
}
function getIdealCalories() {
  let idealDailyCalories = 200;
  return idealDailyCalories*7;
}

function calculateHealthPlan() {
  let actualCalories = getTotalCalories();
  let idealCalories = getIdealCalories();

  if (actualCalories === idealCalories){
    return 'You ate just the right amount of food!';
  }
  else if (actualCalories > idealCalories){
   return 'Time to head to the gym!';
  }
  else{
    return 'Time for seconds!';
  }
}

document.write('<br>');
document.write(calculateHealthPlan());

