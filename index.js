// Question-1-start 
let numbers = [3,4,5]
function findPair(numbers,target){
 for(let i=0; i<numbers.length; i++){
  for(let j = 1+i; j<numbers.length; j++){
    if(numbers[j] + numbers[i] === target){
      return [numbers[i],numbers[j]]
    }
  }
 }

}
let target = 7;
let result2 = findPair(numbers,target);
console.log(result2);

// Question-1-end




//  Question-2-start
let convert = "javascript";
function revs(convert) {
  return convert.split("").reverse().join("");
}
let result = revs(convert);
console.log(result);
//  Question-2-start


// Question-3-Start
let arr = [2, 4, 7, 10, 1];
function numbers(arr) {
  let numbersArr = arr.sort((a, b) => b - a);
  return numbersArr[0] + numbersArr[1];
}
let result1 = numbers(arr);
console.log(result1);
// Question-3-End


// Question-4-start 
let array = ["Hello","hi","welcome"]
function four(array){
  let newarray = [];
  for(let i=0; i<array.length; i++){
    if (array[i].length >= 3){
      newarray.push(array[i])
    }
  }
  return newarray;
}
let result3 = four(array);
console.log(result3);
// Question-4-end



// Question-5-start 
let a = [2,3,3,43,53,22,4,,6];
function evennmbr(array1){
  let number = [];
  for(i=0; i<a.length; i++){
    if(a[i]%2 === 0)
      number.push(a[i]);
  }
  return number;
}
let result4 = evennmbr(a);
console.log(result4);
// Question-5-end 



// Question-6-start
let obj = { 
  name1: "Muzammil",
  age1: 23,
  name:"Jaffar",   
  age:50
};

function six(obj){
 let value = Object.values(obj);
  return value;
}
let result5 = six(obj);
console.log(result5);
// Question-6-end 


// Question-7-start 
let take = prompt("");
function seven(take){
  for(let i=0; i<take.length; i++){
  const checked = take.split("").reverse().join("");
    if(checked === take){
      return true;
    }
    else{
      return false;
    }
    return checked
  }

}
let result6 = seven(take);
console.log(result6);
// Question-7-end




// Question-9-start
let arr1 = ["Sohail", "Jaffar", "Rafay"];

function counter(arr1) {
  let newarr = [];

  for (let i = 0; i < arr1.length; i++) {
    newarr.push(arr1[i].length);
  }

  return newarr;
}
let newarr = counter(arr1);
console.log(newarr);
// Question-9-end


// Question-10-start 
let no = [2,3,12,34,5,6,1];
function ten(no){
  for (let i=0; i <no.length; i++){
    if(no[i]>=10){
      return i;
    }
  }
}
let result7 = ten(no);
console.log(result7);
// Question-10-End
