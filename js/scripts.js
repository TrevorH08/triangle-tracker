//Business Logic
function isEqual(s1, s2, s3){  //All 3 parameters are numbers 
  if ((s1 === s2) === s3){
    return true; 
  }else{
    return false; 
  } 
}

function isIso(s1, s2, s3){
  if ( ((s1 === s2) && (s1 != s3))  ||  ((s1 === s3) && (s1 != s2)  ||  ((side2 === side3) != side1) )
}


//UI Logic 
function classify(event){
  event.preventDefault();
  const eq = "Equilateral"; 
  const iso = "Isosceles"; 
  const bruh = "NOT a triangle"; 
  const sca = "Scalene"
  
  const side1 = parseInt(document.getElementById("side1").value);
  const side2 = parseInt(document.getElementById("side2").value);
  const side3 = parseInt(document.getElementById("side3").value);
  
  /*  Logic Layout-- 
  If: is an equilateral? (side1 = side2 = side3) 
  else if: is an Isosceles?   
  else if: NOT a triangle?   
  else: [IS a triangle, but ISN'T either of the two aforementioned types. Thus,] it's a Scalene.  
  */ 

  if (isEqual(side1, side2, side3) === true){
    return eq; 
  } else if ( ((side1 === side2) != side3)  ||  ((side1 === side3) != side2)  ||  ((side2 === side3) != side1) ) {
    return iso;
  } else if ( ((side1 + side2) <= side3)  ||  ((side1 + side3) <= side2)  ||  ((side2 + side3) <= side1) ) {
    return bruh; 
  } else {
    return sca; 
  } 



}

