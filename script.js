/* 1. Create a function to calculate the sum of the two given integers. If the two values are the same, return triple their sum. */

function calculate(int1, int2) {
    if (int1 === int2) {
      return 3 * (int1 + int2);
    } else {
      return int1 + int2;
    }
  }
  
  console.log(calculate(2, 2));
  console.log(calculate(1, 2));
  
  /* 2. Create a function to check two given integers. Return `true` if one of them is 50 or if their sum is 50. */
  function check(int1, int2) {
    if (int1 === 50 || int2 === 50 || int1 + int2 === 50) {
      return true;
    }
  }
  
  console.log(check(1, 2));
  console.log(check(50, 0));
  console.log(check(50, 50));
  console.log(check(30, 20));
  
  /* 3. Create a function to remove a character at a specified position from a given string: pass the position and the string as parameters, return the new string. */
  
  function removeChar(string, position) {
    stringRemoved = string.replace(string.charAt(position - 1), ""); // added - 1 to position to match the index.
    return stringRemoved;
  }
  
  console.log(removeChar("Mother Mary", 3));
  /* 4. Create a function to find and return the largest of three given integers. */
  
  function findLargest(int1, int2, int3) {
    if (int1 >= int2 && int1 >= int3) {
      return int1;
    } else if (int2 >= int1 && int2 >= int3) {
      return int2;
    } else {
      return int3;
    }
  }
  
  console.log(findLargest(3, 3, 2));
  
  // another solution
  
  function findLargest2(int1, int2, int3) {
    let integers = [int1, int2, int3];
    let largest = int1;
  
    for (let integer of integers) {
      integer > largest ? (largest = integer) : (largest = largest);
    }
    return largest;
  }
  
  console.log(findLargest2(5, 5, 5));
  
  /* 5. Create a function to check if two numbers are in the range 40-60 or 70-100. 
      Return `true` if they do, return `false` if one (or both) don't. */
  
  function checkRange(int1, int2) {
    if (
      ((int1 >= 40 && int1 <= 60) || (int1 >= 70 && int1 <= 100)) &&
      ((int2 >= 40 && int2 <= 60) || (int2 >= 70 && int2 <= 100))
    ) {
      return true;
    } else {
      return false;
    }
  }
  
  console.log(checkRange(100, 70));
  
  /* 6. Create a function to create a new string composed of a specified number of copies of a given string. 
      Pass the string and the number of copies as parameters. */
  
  function createString(string, number) {
    let newString = "";
    let i = 0;
    while (i < number) {
      newString += string;
      i++;
    }
    return newString;
  }
  console.log(createString("Aziz", 3));
  
  /* 7. Create a function to display the city name if the string begins with "Los" or "New". 
      Pass the city name as a parameter. Return `false` if they start with a different string. */
  
  function showCity(cityName) {
    let containsLos = cityName.includes("Los");
    let containsNew = cityName.includes("New");
    return containsLos || containsNew;
  }
  
  console.log(showCity("Los Angeles"));
  
  /* 8. Create a function to calculate and return the sum of all elements from an array with 3 elements. 
      Pass the array as a parameter. */
  
  function returnSum(array) {
    let sum = 0;
    array.forEach((element) => {
      sum += element;
    });
    return sum;
  }
  
  let exampleArray = [1, 2, 10];
  console.log(returnSum(exampleArray));
  
  /* 9. Create a function to test if an array of lenght 2 contains 1 OR 3. 
      Return `true` is it does, `false` if it doesn't. */
  
  function testArray(array) {
    let contains1 = array[0] === 1 || array[1] === 1;
    let contains3 = array[0] === 3 || array[1] === 3;
    return contains1 || contains3;
  }
  
  let arrayOf2 = [2, 5];
  
  console.log(testArray(arrayOf2));
  
  /* 10. Create a function to test if an array of lenght 2 DOES NOT contain 1 or 3. 
      Return `true` if it doesn't, `false` if it does. */
  
  function testArray2(array) {
    let contains1 = array[0] === 1 || array[1] === 1;
    let contains3 = array[0] === 3 || array[1] === 3;
    return !contains1 && !contains3;
  }
  
  console.log(testArray2(arrayOf2));
  
  /* 11. Create a function to find the longest string from a given array of strings. 
      Pass the array as parameter and return the longest string. */
  
  function longestString(strings) {
    let longestString = "";
    let longestLength = 0;
    for (let string of strings) {
      if (string.length > longestLength) {
        longestString = string;
        longestLength = string.length;
      }
    }
    return longestString;
  }
  
  let starWars = [
    "Luke",
    "Han",
    "Leia",
    "C3PO",
    "Chewie",
    "Darth Vader",
    "R2-D2",
  ];
  console.log(longestString(starWars));
  
  /* 12. Create a function to find the types of a given angle:
    1. Acute angle ⇒ between 0 and 90 degrees. Return `acute`.
      2. Right angle ⇒ 90 degree. Return `right`
      3. Obtuse angle ⇒ between 90 and 180. Return `obtuse`
      4. Straight angle ⇒ 180 degrees. Return `straight`
      Pass the angle as a parameter.
  */
  
  /*function angle(angleValue) {
  let typeOfAngle = ""
      switch (angleValue) {
          case (angleValue < 90 && angleValue > 0): typeOfAngle = "acute";
              break;
          case angleValue === 90: typeOfAngle = "right";
              break;
          case angleValue < 180 && angleValue > 90: typeOfAngle = "obtuse";
              break;
          case angleValue === 180: typeOfAngle = "straight";
              break;    
          default: "Please enter a value between 0 and 180"
              break;
      } return typeOfAngle
  }*/
  
  function angle(angleValue) {
    if (angleValue < 90 && angleValue > 0) {
      return "acute";
    } else if (angleValue === 90) {
      return "right";
    } else if (angleValue < 180 && angleValue > 90) {
      return "obtuse";
    } else if (angleValue === 180) {
      return "straight";
    } else {
      return "Please enter a value between 0 and 180";
    }
  }
  
  console.log(angle(129));
  
  /* 13. Create a function to find and return the index of the greatest element of a given array of integers that you passed as a parameter. */
  
  function findAndReturnIndex(numbers){
  let greatestElement = numbers[0];
  let greatestElementIndex = 0
  
          for (let i = 1; i < numbers.length; i++) {
          if (numbers[i] > greatestElement){
              greatestElement = numbers[i]
              greatestElementIndex = i
          }
        }
        return greatestElementIndex
  }
  
  let numbersArray = [1,3,5,7,10,8,0,2]
  console.log(findAndReturnIndex(numbersArray))
  
  /* 14. Create a function to find and return the largest **even** number from an array of integers that is passed a parameter. */
  function findLargestEven(array) {
  let onlyEvens = []
      for (let i = 0; i < array.length; i++) {
          if (array[i] % 2 === 0) {
          onlyEvens.push(array[i]);
          }
      }
  let greatestEven = onlyEvens[0]
  for (let i = 0; i <onlyEvens.length; i++) {
      if (onlyEvens[i] > greatestEven) {
          greatestEven = onlyEvens[i];
      }
  }
  return greatestEven
  
  }
  
  console.log(findLargestEven(numbersArray))
  
  /* 15. Create a function to check from two given integers (passed as parameters) if one is positive and the other is negative. 
      Return `true` if that's the case, return `false` if it's not. */
  
  function checkPositiveNegative(int1, int2) {
      let option1 = int1 < 0 && int2 > 0
      let option2 = int1 > 0 && int2 < 0
      return option1 || option2
  }
  
  console.log(checkPositiveNegative(2,-2))
  
  /* 16. Create a function to create and return a new string where the first 3 characters and in lower case and the others are in upper case. 
      If the string's length is less than 3, convert the whole string into uppercase. Pass the original string as a parameter. */
  
  function differentCase(string){
      if (string.length < 3) {
         return string.toUpperCase();
      } else {
         let first3 = string.substr(0,3)
         first3 = first3.toLowerCase()
         let theRest = string.substr(3)
         theRest = theRest.toUpperCase();
         return first3 + theRest
      }
  }
  
  console.log(differentCase("Aziz"))
  
  /* 17. Create a function to calculate the sum of two integers (passed as parameters). 
      If the sum is in the 50-80 range, return `65`, otherwise, return `80`. */
  function calcWeirdSum(int1, int2) {
      let sum = int1 + int2
      sum > 50 && sum < 80 ? sum = 65 : sum = 80
      return sum
  }
  
  console.log(calcWeirdSum(40,30))
  
  /* 18. Create a function to convert a number (passed as a parameter) into a string, basing yourself on this example: 
      The number has 3 as a factor ⇒ return `Diego`
      The number has 5 as a factor ⇒ return `Riccardo`
      The number has 7 as a factor ⇒ return `Stefano`
      If the number does not have 3,5, or 7, return the original number. 
      ⚠️ The factor is an integer which evenly divides a number without leaving a remainder. One number can have more than one factor, in that case you should return both names. 
  Ex. 15 has both 3 and 5 has factors: the function will return `DiegoRiccardo` */
  
  function numberToString(int1) {
  let finalString = ""
      if (int1 % 3 === 0) {
          finalString += "Diego";
      }
  
      if (int1 % 5 === 0) {
          finalString += "Riccardo"
      }
      
      if (int1 % 7 === 0) {
          finalString += "Stefano"
      } 
  
      if (finalString.length > 0) {
          return finalString
      } else {
          return int1
      }
  }
  
  console.log(numberToString())
  
  /* 19. Create a function that that takes a phrase as a parameter and returns its acronym.
  Ex. British Broadcasting Corporation returns `BBC` */
  
  function returnAcronym(string){
  let array = string.split(" ")
  let acronym = ""
  for (let i=0; i < array.length; i++) {
      let firstLetter = array[i].charAt(0)
      firstLetter = firstLetter.toUpperCase()
      acronym += firstLetter
  };
  return acronym
  }
  
  console.log(returnAcronym("British Broadcasting Corporation"))