
const stringSize = () => {
    const n  = "This text has a certain number of characters";
    count = 0 ;
    for(var i = 0 ; i < n.length ; i++)
    {
        count++ ;
    }
     return count  ;  
}
const replaceCharacterE = (text) => { 
    var text = 'This text has a certain number of characters';
     var res = text.replace("e", ' ');
     return res;
}
const concatString = (text1, text2) => {
    text1 = 'el Javascript shi ' ;
    text2 = 'ra2e3' ;
    var text3 = text1 + text2 ;

    return text3 ;jpg
}
const showChar5 = (text) => {
   
    var res = text.substring(4,5);
    return res ;
}
const showChar9 = (text) => {
    
    var res = text.substring(0,9);
    return res ;
}
const toCapitals = (text) => {
    var res = text.toUpperCase();
    return res ;

}
const toLowerCase = (text) => {
    var res = text.toLowerCase();
    return res ;

}
const removeSpaces = (text) => {
    var res = text.trim();
    return res ;
}
const IsString = (text) => { 
   // var b = text;

     if(typeof(text) == "string"){
       return true;

     }   
     else{
         false;
     }
    
}

const getExtension = (text) => {

return text.split('.').pop();
}
const countSpaces = (text) => {
return text.split(" ").length-1;

}
const InverseString = (text) => {
    return text.split('').reverse().join('');
}

const power = (x, y) => {
    return (Math.pow(x, y));
}
const absoluteValue = (num) => {
    return (Math.abs(num));
}
const absoluteValueArray = (array) => {
    return array.map (Math.abs);
    
}
const circleSurface = (radius) => {
    return Math.round(Math.PI*radius*radius);
}
const hypothenuse = (ab, ac) => {
  return  (Math.hypot(ab, ac));
}
const BMI = (weight, height) => {
   return parseFloat((weight/(height*height)).toFixed(2));//
}

const createLanguagesArray = () => { 
var Array =["Html", "CSS", "Java", "PHP"];
return Array;

}

const createNumbersArray = () => {
 var Array = [0,1,2,3,4,5];
 return Array;
}

const replaceElement = (languages) => {
    var Array =["Html", "CSS", "Java", "PHP"];
    var removed = Array.splice(2, 1, 'Javascript');
    return Array;
   
}

const addElement = (languages) => {
    var Array =["Html", "CSS", "Javascript", "PHP"];
    Array.push("Ruby", "Python")
    return Array;
}

const addNumberElement = (numbers) => {
  var Array = [0,1,2,3,4,5]
  Array.unshift(-2, -1);
  return Array;
}

const removeFirst = (languages) => {
  var Array  = ['Html', 'CSS', 'Javascript', 'PHP', 'Ruby', 'Python'];
  Array.shift("Html");
  return Array;
}

const removeLast = (languages) => {
    var Array  = ['CSS', 'Javascript', 'PHP', 'Ruby', 'Python'];
    Array.pop("Python");
    return Array;
}

const convertStrToArr = (social_arr) => {
    var str = 'Facebook,Twitter,Google +,Viadeo,LinkedIn';
     var res = str.split(',');
      return res;
}

const convertArrToStr = (languages) => {
   var array = ['CSS', 'Javascript', 'PHP', 'Ruby'];
    return array.toString(',');
   
   
}

const sortArr = (social_arr) => {
  var array = ['Facebook','Twitter', 'Google +','Viadeo','LinkedIn'];
      return array.sort();
}

const invertArr = (social_arr) => {
    var array = ['CSS','Javascript','PHP','Ruby'];
     return array.reverse();

}