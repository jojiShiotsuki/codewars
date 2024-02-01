// A new task for you!

// You have to create a method, that corrects a given time string.
// There was a problem in addition, so many of the time strings are broken.
// Time is formatted using the 24-hour clock, so from 00:00:00 to 23:59:59.
// Examples
// "09:10:01" -> "09:10:01"  
// "11:70:10" -> "12:10:10"  
// "19:99:99" -> "20:40:39"  
// "24:01:01" -> "00:01:01"  
// If the input-string is null or empty return exactly this value! (empty string for C++) If the time-string-format is invalid, return null. (empty string for C++)

// Have fun coding it and please don't forget to vote and rank this kata! :-)

// I have created other katas. Have a look if you like coding and challenges.

function correctTimeString(timeString) {
    // Check if the input string is null or empty
    if (!timeString || timeString.trim() === '') {
        return timeString;
    }

    // Split the time string into hours, minutes, and seconds
    const [hours, minutes, seconds] = timeString.split(':').map(Number);

    // Check if the time format is invalid
    if (isNaN(hours) || isNaN(minutes) || isNaN(seconds) ||
        hours < 0 || hours > 23 || minutes < 0 || minutes > 59 || seconds < 0 || seconds > 59) {
        return null;
    }

    // Correct the time values if necessary
    const correctedHours = hours === 24 ? 0 : hours;
    const correctedMinutes = minutes >= 60 ? minutes % 60 : minutes;
    const correctedSeconds = seconds >= 60 ? seconds % 60 : seconds;

    // Format the corrected time values into a string
    const correctedTimeString = `${padZero(correctedHours)}:${padZero(correctedMinutes)}:${padZero(correctedSeconds)}`;

    return correctedTimeString;
}