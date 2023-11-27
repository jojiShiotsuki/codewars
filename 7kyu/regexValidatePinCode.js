// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

// If the function is passed a valid PIN string, return true, else return false.

function validatePIN (pin) {
	if(pin.length != 4 && pin.length != 6){
	  return false;
	}else {
	  let newNum = pin.split('');
	  let valid = true;
	  
	  newNum.forEach((num) => {
		if(isNaN(parseInt(num))){
		  valid = false;
		}
	  });
	  
	  return valid;
	  
	}
  }