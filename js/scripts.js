//Business Logic
console.log("Sup");
function isEqual(s1, s2, s3){  //All 3 parameters are numbers 
  if ((s1 === s2) && (s2=== s3)){
    console.log("isEqual = True");
    return true; 
  }else{
    console.log("isEqual = False");
    return false; 
  } 
}

function isIso(s1, s2, s3){
  if ( ((s1 === s2) && (s2 != s3))  ||  ((s1 === s3) && (s3 != s2))  ||  ((s2 === s3) && (s3 != s1)) ){
    console.log("isIso = True");
    return true; 
  }else{
    console.log("isIso = False");
    return false; 
  }
} 

function notTri(s1, s2, s3){
  if ( ((s1 + s2) <= s3)  ||  ((s1 + s3) <= s2)  ||  ((s2 + s3) <= s1) ){
    console.log("notTri = True");
    return true; 
  }else{ 
    console.log("notTri = False");
    return false; 
  } 
} 

//UI Logic 
function classify(event){
  event.preventDefault();
  
  const side1 = parseInt(document.getElementById("side1").value);
  const side2 = parseInt(document.getElementById("side2").value);
  const side3 = parseInt(document.getElementById("side3").value);
  console.log("Side #1 = " + side1);
  console.log("Side #2 = " + side2);
  console.log("Side #3 = " + side3);


  /*  Logic Layout-- 
  If:  is an equilateral? (side1 = side2 = side3) 
  else if:  is an Isosceles?   
  else if:  NOT a triangle?   
  else: [IS a triangle, but ISN'T either of the two aforementioned types. Thus,] it's a Scalene.  
  */ 

  const eq = "Equilateral"; 
  const iso = "Isosceles"; 
  const bruh = "NOT a triangle"; 
  const sca = "Scalene";

  let result; 
  if (isEqual(side1, side2, side3) === true){
    result = eq; 
  } else if (isIso(side1, side2, side3) === true) {
    result = iso;
  } else if (notTri(side1, side2, side3) === true) {
    result = bruh; 
  } else {
    result = sca; 
  } 

  document.getElementById("result").innerText = result; 

}


window.addEventListener("load", function(){
  const form = document.getElementById("tracker");
  form.addEventListener("submit", classify);
}); 
