//Create an object and name it DateFormatter
var d = new Date();
var day = d.getDay();
var hours = d.getHours();
var minutes = d.getMinutes();
var month = d.getMonth() + 1;
var seconds = d.getSeconds();
var year = d.getFullYear();
var ampm = hours < 12 ? "AM" : "PM";

if (hours > 12) {
  hours = hours -= 12;
}

var monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

var dayNames = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

var DateFormatter = {
  //returns the date's time with hours, minutes and AM or PM
  getShortTime: function(date) {
    return hours + ":" + minutes + " " + ampm;
  },
  //returns the date's time with hours, minutes, seconds and AM or PM
  getLongTime: function(date) {
    return hours + ":" + minutes + ":" + seconds + " " + ampm;
  },
  //returns the date in the format month/day/year
  getShortDate: function(date) {
    return month + "/" + day + "/" + year;
  },
  //returns the date in the format Month Day, Year
  getLongDate: function(date) {
    return monthNames[d.getMonth()] + " " + day + ", " + year;
  },
  //returns the date in the format month/day/year hour:minutes AM|PM
  getShortDateTime: function(date) {
    return month + "/" + day + "/" + year + " " + hours + ":" + minutes + " " + ampm;
  },
  //returns the date in the format Month Day, Year hour:minutes AM|PM
  getLongDateTime: function(date) {
    return monthNames[d.getMonth()] + " " + day + ", " + year + " " + hours + ":" + minutes + " " + ampm;
  },
  //returns the date in the format Day of the week, Month Day, Year hour:minutes AM|PM
    getExtendedDateTime: function(date) {
    return dayNames[d.getDay()] + ", " + monthNames[d.getMonth()] + " "+ day + ", " + year + " " + hours + ":" + minutes + " " + ampm;
  }
};

//console logs
console.log(DateFormatter.getShortTime("date"));
console.log(DateFormatter.getLongTime("date"));
console.log(DateFormatter.getShortDate("date"));
console.log(DateFormatter.getLongDate("date"));
console.log(DateFormatter.getShortDateTime("date"));
console.log(DateFormatter.getLongDateTime("date"));
console.log(DateFormatter.getExtendedDateTime("date"));




