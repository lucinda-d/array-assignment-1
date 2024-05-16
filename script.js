//create an array with 6 hobbies as elements.
var hobbies = ["fishing", "camping", "bakery", "reading", "hiking", "knitting"];

//use the length property to log out the length of the hobbies array.
console.log(hobbies.length);

//add a new hobby at the end of the array using push().
hobbies.push("coloring");
console.log(hobbies);

// //log out the elemnt at index 2.
console.log(hobbies[2]);

// //Remove the last element using pop.
hobbies.pop();
console.log(hobbies);

//After the 2nd element, add two new elements using splice(). Then, log it out.
hobbies.splice(2, 0, "photography", "skateboarding");
console.log(hobbies);

//Remove the first element using shift().
hobbies.shift();
console.log(hobbies);

//Add a new element at the beginning of the array using unshift().
hobbies.unshift("coding");
console.log(hobbies);

//Create a 2nd array called goals and add 3 goals as elements.
var goals = ["learn JS", "run", "summer fun"];
//Write a variable called allTheThings to joing the hobbies and goals arrays. You can use conat() or the spread operator to combine the arrays.
var allTheThings = [...hobbies, ...goals];
//Log out the new combined array
console.log(allTheThings);

//Choose an element in the middle of you allTheThings array and use indexOf to log out it's index. Log it out so that you can see the result(eg,4).
console.log(allTheThings[10]);
//Using the index of the element you just discovered, reove the element suing splice() and the index position.
allTheThings.splice(10, 1);
//Log out and check yor work!
console.log(allTheThings);

//Create a new variable called plans.
//In the value of the plans variable, use map() to map over the allTheThings array.
//Pass a parameter called item to the map() callback function.
//Inside the body of the callback function, modify each item to return something like: I can't wait to start ${item}.
//Outside the function, log out the value of the plans variable so that you can see the new array built from mapping another array.
var plans = allTheThings.map(function (item) {
  return `I can't wait to start ${item}!`;
});
console.log(plans);
