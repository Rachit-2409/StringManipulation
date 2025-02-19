console.log("String Manipulation");

/*--------------------------------------------*/

/*Write a JavaScript function to check whether an 'input' is a string or not.
Test Data :
console.log(is_string('w3resource'));
true
console.log(is_string([1, 2, 4, 0]));
false*/

/*-----------------------------------------------*/

// function StingChecker(val){

//     console.log(typeof val === "string");
// }
// StingChecker("1456")

/*-------------------------------------------------*/

/*Write a JavaScript function to check whether a string is blank or not.
Test Data :
console.log(is_Blank(''));
console.log(is_Blank('abc'));
true
false*/

// function EmptyStringFinder(val){
//     console.log(val.length == 0 && typeof val === "string" );
// }

// EmptyStringFinder("25");

/*------------------------------------------------*/

/*Write a JavaScript function to split a string and convert it into an array of words.
Test Data :
console.log(string_to_array("Robin Singh"));
["Robin", "Singh"]*/

// function StringtoArray(val){
//     if(typeof val != "string") return null;
//         console.log(val.split(" "))
// }


// StringtoArray("Rachit Gupta")

/*------------------------------------------------*/

/*Write a JavaScript function to extract a specified number of characters from a string.
Test Data :
console.log(truncate_string("Robin Singh",4));
"Robi"-**/


// function StringExtractor(val, size){
//     if(typeof val != "string") return null;
//     console.log(val.slice(0, size))
// }


// StringExtractor("Rachit", 4)

/*-----------------------------------------*/
/*Write a JavaScript function to convert a string into abbreviated form.
Test Data :
console.log(abbrev_name("Robin Singh"));
"Robin S."*/


// function abbrev_name(name){
//     let names = name.split(' ');
//     let abbrev =  names[0] + " " + names[1].charAt(0).toUpperCase() + "."
//     console.log(abbrev);
// }


// abbrev_name("Rachit Gupt")


/*-----------------------------------------*/

/*Write a JavaScript function that hides email addresses to prevent unauthorized access.
Test Data :
console.log(protect_email("robin_singh@example.com"));
"robin...@example.com"*/


// function email_hidder(emailid){
//     let position = emailid.indexOf("@");
//     if(position < 3){
//         console.log(emailid[0] + '...@'+emailid.split('@')[1])
//     }else{
//         let firstPart =  emailid.slice(0,3);
//         console.log(firstPart +"..." +emailid.slice(position, emailid.length))
//     }
   
    
// }

// email_hidder('rachitgupta815@gmail.com')

/*-----------------------------------------------*/

/*Write a JavaScript function to parameterize a string.
Test Data :
console.log(string_parameterize("Robin Singh from USA."));
"robin-singh-from-usa"*/


// function parameterize(str){
//     let newstr =  str.split(" ");
//     let finalval = newstr.map((val)=> val.toLowerCase())
//     console.log(finalval.join("-"));
// }

// parameterize("Robin Singh from USA.")


/*-----------------------------------------*/

/*Write a JavaScript function to capitalize the first letter of a string.
Test Data :
console.log(capitalize('js string exercises'));
"Js string exercises"*/

// function capitalize(str){  str.trim(); str = str[0].toUpperCase() + str.slice(1, str.length)
//     console.log(str);}




// capitalize('rachit Gupta')

/*-------------------------------------*/

/*Write a JavaScript function to capitalize the first letter of each word in a string.
Test Data :
console.log(capitalize_Words('js string exercises'));
"Js String Exercises"*/


// function capitalize_all(str){
//     if(str.length == 0 ) return 0;
    
//      str = str.trim().split(" ");
//      let newStr = str.map((val)=>(val[0].toUpperCase() + val.slice(1, val.length))).join(' ')
//      console.log(newStr)
// }

// capitalize_all('js string exercises')


/*------------------------------------------*/

/*Write a JavaScript function that takes a string with both lowercase and upper case letters as a parameter. It converts upper case letters to lower case, and lower case letters to upper case.
Test Data :
console.log(swapcase('AaBbc'));
"aAbBC"*/

// function swap_characters(str){
//      if(str.length == 0 )return null;
//     let newStr = "";
//     for(let x  = 0; x < str.length; x++){
     
//         if(str[x] == str[x].toLowerCase()){
//             newStr += str[x].toUpperCase()
//         }
//         else{
//            newStr += str[x].toLowerCase();
//         }
//     }

// console.log(newStr)

// }


// swap_characters("rAChkgin");



/*Write a JavaScript function to convert a string into camel case.
Test Data :
console.log(camelize("JavaScript Exercises"));
console.log(camelize("JavaScript exercises"));
console.log(camelize("JavaScriptExercises"));
"JavaScriptExercises"
"JavaScriptExercises"
"JavaScriptExercises"*/

// function camelize(Str){
//     Str = Str.trim().split(" ");
//     let newStr =  Str.map((val)=> val[0].toUpperCase() +  val.slice(1, val.length));
//     newStr = newStr.join('')
//     console.log(newStr)
// }



// camelize("new York ")


/*Write a JavaScript function to uncommelize a string.
Test Data :
console.log(uncamelize('helloWorld'));
console.log(uncamelize('helloWorld','-'));
console.log(uncamelize('helloWorld','_'));
"hello world"
"hello-world"
"hello_world"*/

/*---------------------------------------------------------------*/ 


/*Write a JavaScript function to concatenate a given string n times (default is 1).
Test Data :
console.log(repeat('Ha!'));
console.log(repeat('Ha!',2));
console.log(repeat('Ha!',3));
"Ha!"
"Ha!Ha!"
"Ha!Ha!Ha!"/*/


// function stringRepeater(str, num){
//     if(typeof str != "string" || str.length == 0) return 0;

//    let result = "";

//     for(let x = 0; x < num; x++){
//         result += str
//     }
    
//     console.log(result)
// }


// stringRepeater("Ha",2);

/*------------------------------------------------------*/
/*Write a JavaScript function to insert a string within a string at a particular position (default is 1).
Test Data :
console.log(insert('We are doing some exercises.'));
console.log(insert('We are doing some exercises.','JavaScript '));
console.log(insert('We are doing some exercises.','JavaScript ',18));
"We are doing some exercises."
"JavaScript We are doing some exercises."
"We are doing some JavaScript exercises."*/

// function StringInsertor(str, addOn, Position){
 
//     console.log(str.slice(0, Position) + addOn + str.slice(Position))
// }

// StringInsertor("Rachit The", " Great", 8)


/*-------------------------------------------------*/
/*Write a JavaScript function to truncate a string if it is longer than the specified number of characters. Truncated strings will end with a translatable ellipsis sequence ("...") (by default) or specified characters.
Test Data :
console.log(text_truncate('We are doing JS string exercises.'))
console.log(text_truncate('We are doing JS string exercises.',19))
console.log(text_truncate('We are doing JS string exercises.',15,'!!'))
"We are doing JS string exercises."
"We are doing JS ..."
"We are doing !!"*/

// function formatter(str, size){
//     if(str.length > size){
//         str =  str.slice(0,size) + "......"
//     }
//     console.log(str)
   
// } 

// formatter("11565456",3)



/*---------------------------------------------------*/

/*Write a JavaScript function to chop a string into chunks of a given length.
Test Data :
console.log(string_chop('w3resource'));
console.log(string_chop('w3resource',2));
console.log(string_chop('w3resource',3));
["w3resource"]
["w3", "re", "so", "ur", "ce"]
["w3r", "eso", "urc", "e"]*/



// function chunksgenerator(str, num){
//     if(str.length == 0 ) return null;
//     let result = [];
//     for(let x = 0; x<str.length; x += num ){
//         result.push(str.slice(x, x+num))
//     }
//     console.log(result)
// }


// chunksgenerator("RachitGupta", 3)


/*---------------------------------------------------*/

/*Write a JavaScript function to count substrings in a string.
Test Data :
console.log(count("The quick brown fox jumps over the lazy dog", 'the'));
Output :
2
console.log(count("The quick brown fox jumps over the lazy dog", 'fox',false));
Output :
1*/

// function substringCounter(str, substr){
//     if(str.length ==0) return null
//     let counter = 0;
//     str = str.toLowerCase().split(' ');
//     substr = substr.toLowerCase()
//     console.log(str)
//     for(let i = 0; i<str.length; i++){
//         if(str[i] == substr){
//             counter =  counter + 1;
//         }
//     }
//     console.log(counter)
// }


// substringCounter("The quick brown fox jumps over the lazy dog", "Dog")


/*-------------------------------------------------------*/


/*Write a JavaScript function that can pad (left, right) a string to get to a specific length.
Test Data :
console.log(formatted_string('0000',123,'l'));
console.log(formatted_string('00000000',123,''));
Output :
"0123"
"12300000"*/



/*-----------------------------------------------------*/


/*Write a JavaScript function to repeat a string for a specified time.
Test Data :
console.log(repeat_string('a', 4));
console.log(repeat_string('a'));
Output :
"aaaa"
"Error in string or count."*/


// function repeat_string(str, ouccrance){

//     if(str.length ==0 || str == undefined ||  str == null || str == Infinity || str.length < 0 || ouccrance == null ) console.log("Error happend")
//     else{
//         let result = "";
//         for(let x = 0; x < ouccrance; x++ ){
//             result += str;
//         }
//         console.log(result);
// }
   
// }


// repeat_string("a")


/*-------------------------------------------------------*/

/*Write a JavaScript function to get a part of a string after a specified character.
Test Data :
console.log(subStrAfterChars('w3resource: JavaScript Exercises', ':','a'));
console.log(subStrAfterChars('w3resource: JavaScript Exercises', 'E','b'));
Output :
"w3resource"
"xercises"*/

// function subStrAfterChars(str, char){
//     let index =  str.indexOf(char);
//     let result =  str.slice(index+1)
//     console.log(result)
// }

// subStrAfterChars("w3resource","e")

/*-----------------------------------------------------*/

/*Write a JavaScript function to strip leading and trailing spaces from a string.
*/


// function spaceremover(str){
//     str  = str.trim();
//     console.log(str)
// }

// spaceremover("      bfdgfdgd")


/*Write a JavaScript function to alphabetize a given string.
Alphabetize string : An individual string can be alphabetized. This rearranges the letters so they are sorted A to Z.
Test Data :
console.log(alphabetize_string('United States'));
Output :
"SUadeeinsttt"*/


// function alphabetize(str){
//     let abc = str.split("").sort().join("");
//     console.log(abc)
// }

// alphabetize("rachitgupta")


/*Write a JavaScript function to remove the first occurrence of a given 'search string' from a string.
Test Data :
console.log(remove_first_occurrence("The quick brown fox jumps over the lazy dog", 'the'));
Output :
"The quick brown fox jumps over lazy dog"*/

function remove_first_occurrence(str, substr){
    str = str.toLowerCase().split(' ');
    substr =  substr.toLowerCase();
    let counter = 0;
    console.log(str)
}


remove_first_occurrence("The quick brown fox jumps over the lazy dog", 'the')