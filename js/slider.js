var slideIndex1 = 1;
showDivs1(slideIndex1);

function plusDivs1(n) {
  showDivs1(slideIndex1 += n);
}

function showDivs1(n) {
  var i1;
  var x1 = document.getElementsByClassName("slider1");
  if (n > x1.length) {slideIndex1 = 1}    
  if (n < 1) {slideIndex1 = x1.length}
  for (i1 = 0; i1 < x1.length; i1++) {
     x1[i1].style.display = "none";  
  }
  x1[slideIndex1-1].style.display = "block";  
}


var slideIndex2 = 1;
showDivs2(slideIndex2);

function plusDivs2(n) {
  showDivs2(slideIndex2 += n);
}

function showDivs2(n) {
  var i2;
  var x2 = document.getElementsByClassName("slider2");
  if (n > x2.length) {slideIndex2 = 1}    
  if (n < 1) {slideIndex2 = x2.length}
  for (i2 = 0; i2 < x2.length; i2++) {
     x2[i2].style.display = "none";  
  }
  x2[slideIndex2-1].style.display = "block";  
}


var slideIndex3 = 1;
showDivs3(slideIndex3);

function plusDivs3(n) {
  showDivs3(slideIndex3 += n);
}
function showDivs3(n) {
  var i3;
  var x3 = document.getElementsByClassName("slider3");
  if (n > x3.length) {slideIndex3 = 1}    
  if (n < 1) {slideIndex3 = x3.length}
  for (i3 = 0; i3 < x3.length; i3++) {
     x3[i3].style.display = "none";  
  }
  x3[slideIndex3-1].style.display = "block";  
}


var slideIndex4 = 1;
showDivs4(slideIndex4);

function plusDivs4(n) {
  showDivs4(slideIndex4 += n);
}

function showDivs4(n) {
  var i4;
  var x4 = document.getElementsByClassName("slider4");
  if (n > x4.length) {slideIndex4 = 1}    
  if (n < 1) {slideIndex4 = x4.length}
  for (i4 = 0; i4 < x4.length; i4++) {
     x4[i4].style.display = "none";  
  }
  x4[slideIndex4-1].style.display = "block";  
}
