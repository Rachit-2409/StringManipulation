console.log("String Manipulation");
const symbolRegex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?`~]/g;

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

// function remove_first_occurrence(str, substr){
//     str = str.toLowerCase().split(' ');
//     substr =  substr.toLowerCase();
//     let counter = 0;
//     for(let x = 0; x < str.length; x++){
//         if(str[x] === substr){
//             counter = counter + 1;
//         }
//     }
//     console.log(str)
// }


// remove_first_occurrence("The quick brown fox jumps over the lazy dog", 'the')  

/*Write a JavaScript function to find a word within a string.
Test Data :
console.log(search_word('The quick brown fox', 'fox'));
console.log(search_word('aa, bb, cc, dd, aa', 'aa'));
Output :
"'fox' was found 1 times."
"'aa' was found 2 times."*/

// function search_word(str, word){
// str = str.replace(symbolRegex, '').trim().split(' ');
// let counter = 0;

// for(let x =0; x<str.length; x++){
//     if(str[x] == word){

//         counter++
//     }
// }
// console.log(`word : ${counter} times`)
// }

// search_word('aa, bb, cc, dd, aa', 'aa')


/*Write a JavaScript function that checks whether a string ends with a specified suffix.
Test Data :
console.log(string_endsWith('JS PHP  PYTHON','PYTHON'));
true
console.log(string_endsWith('JS PHP PYTHON',''));
false*/

// function string_endsWith(str, word){
//      return str.endsWith(word);
// }
// console.log(string_endsWith('JS PHP  PYTHON','PYTHON'));
// console.log(string_endsWith('JS PHP PYTHON',"R"));

/*Write a JavaScript function to remove non-word characters.
Test Data :
console.log(remove_non_word('PHP ~!@#$%^&*()+`-={}[]|\\:";\'/?><., MySQL'));
"PHP - MySQL"*/

// function remove_non_word(str){
//     return str.replace(symbolRegex, '').trim().split(' ').join('-');
// }


// console.log(remove_non_word('PHP ~!@#$%^&*()+`-={}[]|\\:";\'/?><., MySQL'))


/*Write a JavaScript function to convert a string to title case.
Test Data :
console.log(sentenceCase('PHP exercises.  python exercises.'));
"Php Exercises. Python Exercises."*/

// function sentenceCase(str){
//     if(str.length == 0) return null;
//     let result = str.split(' ').map((word)=>word.charAt(0).toUpperCase() + word.slice(1, word.length).toLowerCase()).join(' ');
//     return result
// }
// console.log(sentenceCase('PHP exercises.  python exercises.'));



/*Write a JavaScript function to create a zero-filled value with an optional +, - sign.
Test Data :
console.log(zeroFill(120, 5, '-'));
"+00120"
console.log(zeroFill(29, 4));
"0029"**/


// function zeroFill(number, numberdigit, sign='')
// {   

//    let extra_number ="" ;
//    let  str = number.toString();

//    let diff = (numberdigit) - str.length;
//    console.log(diff)
//    if(str.length > numberdigit){
//        str =  str.slice(0, numberdigit);
//    }
//    else{
//         while(diff > 0){
//             extra_number = extra_number + "1"
//             diff--;
//         }
//         str = sign + extra_number + str;
//    }
// return str
// }


// console.log(zeroFill(15, 356,'-'))

/*Write a JavaScript function to test case-insensitive (except special Unicode characters) string comparison.
Test Data :
console.log(compare_strings('abcd', 'AbcD'));
true
console.log(compare_strings('ABCD', 'Abce'));
false*/

// function compare_strings(str1, str2){
//     return str1.toUpperCase() == str2.toUpperCase();
// }
// console.log(compare_strings('abcd', 'AbcD'));
// console.log(compare_strings('ABCD', 'Abce'));

/*Write a JavaScript function to create a case-insensitive search.
Test Data :
console.log(case_insensitive_search('JavaScript Exercises', 'exercises'));
"Matched"
console.log(case_insensitive_search('JavaScript Exercises', 'Exercises'));
"Matched"
console.log(case_insensitive_search('JavaScript Exercises', 'Exercisess'));
"Not Matched"*/


// function case_insensitive_search(str, word){
//     str =  str.toLowerCase();
//     word = word.toLowerCase();
//    let result =  str.includes(word);


//    if(result){return "Matched"}
//    else{return "Not Matched"}
// }
// console.log(case_insensitive_search('JavaScript Exercises', 'exercises'));
// console.log(case_insensitive_search('JavaScript Exercises', 'Exercises'));
// console.log(case_insensitive_search('JavaScript Exercises', 'Exercisess'));


/*Write a JavaScript function to uncapitalize the first character of a string.
Test Data :
console.log(Uncapitalize('Js string exercises'));
"js string exercises"*/



// function uncapitalize(str){
//     return str[0].toLowerCase() + str.slice(1, str.length)
// }
// console.log(uncapitalize('Js string exercises'));


/*Write a JavaScript function to uncapitalize the first letter of each word of a string.
Test Data :
console.log(unCapitalize_Words('Js String Exercises'));
"js string exercises"*/

// function unCapitalize_Words(str){
//     if(str.length ===0 ) return "undefined";
//     str = str.split(' ');
//     let result = str.map((word)=>{ return word.charAt(0).toLowerCase() + word.slice(1)}).join(' ')
//     return result
// }

// console.log(unCapitalize_Words('Js String Exercises'));



/*Write a JavaScript function to capitalize each word in the string.
Test Data :
console.log(capitalizeWords('js string exercises'));
"JS STRING EXERCISES"**/


// function capitalize_Words(str){
//     return str.toUpperCase();
// }

// console.log(capitalize_Words('js string exercises'));

/*Uncapitalize All Words

Write a JavaScript function to uncapitalize each word in the string.
Test Data :
console.log(unCapitalizeWords('JS STRING EXERCISES'));
"js string exercises"*/


// function unCapitalizeWords(str){
//     str = str.replace(symbolRegex,'').toLowerCase();
//     return str
// }

// console.log(unCapitalizeWords('JS STRING EXERCISES'));


/*Write a JavaScript function to test whether the character at the index provided is upper case.
Test Data :
console.log(isUpperCaseAt('Js STRING EXERCISES', 1));
false*/

// function isUpperCaseAt(str, num) {

//     if (num < 0 || num > str.length) return null;

//     if (str[num] == str[num].toUpperCase()) return true
//     else return false;
// }
// console.log(isUpperCaseAt('Js STRING EXERCISES', 1));


/*Write a JavaScript function to test whether the character at the given (character) index is lower case.
Test Data :
console.log(isLowerCaseAt ('Js STRING EXERCISES', 1));
true*/
// function isLowerCaseAt(str, num) {

//     if (num < 0 || num > str.length) return null;

//     if (str[num] == str[num].toLowerCase()) return true
//     else return false;
// }
// console.log(isLowerCaseAt('Js STRING EXERCISES', 3));


/*Write a JavaScript function to test whether a string starts with a specified string.
Test Data :
console.log(startsWith('js string exercises', 'js'));
true*/

// function startsWith(str, word){
//     if(!str || !word ) return null;

//     return str.startsWith(word) 
// }
// console.log(startsWith('js string exercises', 'js'));


/*Write a JavaScript function to test whether a string ends with a specified string.
Test Data :
console.log(endsWith('JS string exercises', 'exercises'));
true*/

// function endsWith(str, word){
//     if(!str || !word ) return null;

//     return str.endsWith(word) 
// }
// console.log(endsWith('js string exercises', 'exercises'));

/*Write a JavaScript function to get a guid (an acronym for 'Globally Unique Identifier'?) of the specified length, or 32 by default.
Test Data :
console.log(guid());
console.log(guid(15));
"hRYilcoV7ajokxsYFl1dba41AyE0rUQR"
"b7pwBqrZwqaDrex"*/

// function guid(size=32){
//     let words = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ~`!@#$%^&*()_+-={}[]:;><?'
//     let result = "";
//     for(let x = 0; x<size; x++){
//         let randomNumber = Math.floor(Math.random()*size)+1;
//         result = result + words[randomNumber];
//     }
//     return result;
// }
// console.log(guid());
// console.log(guid(15));


/*Write a JavaScript program to check if a given string contains alphanumeric characters that are palindromes regardless of special characters and letter case.
A palindrome is a word, number, phrase, or other sequence of symbols that reads the same backwards as forwards, such as the words madam or racecar, the date/time stamps 11/11/11 11:11 and 02/02/2020, and the sentence: "A man, a plan, a canal - Panama". The 19-letter Finnish word saippuakivikauppias (a soapstone vendor), is the longest single-word palindrome in everyday use, while the 12-letter term tattarrattat (from James Joyce in Ulysses) is the longest in English.
Test Data :
('$22_|1372^2731|_22') -> true
('12%^&2') -> false
('234%$$%432') -> true
(1234) -> "It must be string"
('aba%$aba') -> true
('Aba%$aba') -> true*/

// function palindrome(str){
//     if(typeof str != "string") return null
//     str = str.replace(symbolRegex, '');
//     return str.split('').reverse().join('') == str
// }

// console.log(palindrome('$22_|1372^2731|_22'))
// console.log(palindrome('12%^&2'))
// palindrome('234%$$%432')

/*Write a JavaScript function to check a given string is in Flat case or not.
Flat case: As the name implies, flatcase refers to the use of lowercase letters, with no spaces between words.
Test Data :
('j') -> true
('java exercises') -> false
('JavaScriptExercises') -> false
('javascriptexercises') -> true
(12356) -> "It must be a string."*/


// function flatcase(str){
//     if(typeof str != "string") return null;

//     for(let x =0; x<str.length; x++){
//         if(str[x] != str[x].toLocaleLowerCase() || str[x] ==" "){
//             return false
//         }
//     }
//     return true
// }


// console.log(flatcase('j'));
// console.log(flatcase('java Excersise'))
// console.log(flatcase('JavaScriptExercises'))


/*Kebab case: "the-quick-brown-fox-jumps-over-the-lazy-dog"
Similar to snake case, above, except hyphens rather than underscores are used to replace spaces. It is also known as spinal case, param case, Lisp case in reference to the Lisp  programming language, or dash case (or illustratively as kebab-case).
Write a JavaScript function to check a given string is in Kebab case or not.*/


// function kebabtest(str){
//     if(typeof str != "string") return null
    

//     for(let x = 0; x<str.length; x++){
//         if(str[x] != str[x].toLowerCase() || str[x]== ' ' || str[x] == '_' ){
//             return false
//         }
//     }
//     return str.includes('-') && !str.includes('--')
// }

// console.log(kebabtest("the-quick-brown-fox-jumps-over-the-lazy-dog"))




/*Write a JavaScript function to reverse words in a given string.
Test Data :
("abc") -> "cba"
("JavaScript Exercises") -> "tpircSavaJ sesicrexE"
(1234) -> "It must be a string."*/

// function reversef(str){
//     str = str.split('').reverse().join('');
//     return str;
// }


// console.log(reversef("JavaScript Exercises"))
// console.log(reversef("cba"))