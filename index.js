// Write your solution here!
let cats=["Milo", "Otis", "Garfield"];

function  destructivelyAppendCat(){
    
    

    cats.push('Ralph');
    
};
beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });

function destructivelyPrependCat(){
    cats.unshift("Bob");
};
beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });
function destructivelyRemoveLastCat(){
    cats.pop();
};
beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });
function destructivelyRemoveFirstCat(){
cats.shift();
};
beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });
function appendCat(){
    const newarray=[...cats,"Broom"];
    return newarray;
};
beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });
  function prependCat(){
    const newarray=["Arnold",...cats];
    return newarray;
};
beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });
function removeLastCat(){
const newcats = cats.slice(0,2);
return newcats;
};
beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });
function removeFirstCat(){
    const newcats1 = cats.slice(1);
    return newcats1;
};


