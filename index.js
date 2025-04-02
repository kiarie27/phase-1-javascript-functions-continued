// code your solution here
// Define saturdayFun as a function declaration with a default activity
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
  }

  // Define mondayWork as a function expression with a default activity
  const mondayWork = function(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
  }

  // Define wrapAdjective as a higher-order function that returns a function
  function wrapAdjective(flair = "*") {
    return function(adjective = "special") {
      return `You are ${flair}${adjective}${flair}!`;
    }
  }

  // Export the functions for testing purposes
  module.exports = { saturdayFun, mondayWork, wrapAdjective };