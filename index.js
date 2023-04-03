// Code your solution here
function findMatching(drivers, str) {
    return drivers.filter(driver => driver.toLowerCase() === str.toLowerCase());
}

function fuzzyMatch(drivers, letters) {
    return drivers.filter(function(driver) {
      for (var i = 0; i < letters.length; i++) {
        if (driver.slice(i, i + 1).toLowerCase() !== letters[i].toLowerCase()) {
          return false;
        }
      }
      return true;
    });
  }

function matchName(drivers, str) {
    return drivers.filter(driver => driver.name === str)
}