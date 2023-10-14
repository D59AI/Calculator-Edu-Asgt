const oneButton=document.getElementById('oneButton');
const twoButton=document.getElementById('twoButton');
const threeButton=document.getElementById('threeButton');
const fourButton=document.getElementById('fourButton');
const fiveButton=document.getElementById('fiveButton');
const sixButton=document.getElementById('sixButton');
const sevenButton=document.getElementById('sevenButton');
const eightButton=document.getElementById('eightButton');
const nineButton=document.getElementById('nineButton');
const zeroButton=document.getElementById('zeroButton');
const plusButton=document.getElementById('plusButton');
const minusButton=document.getElementById('minusButton');
const multiplyButton=document.getElementById('multiplyButton');
const divideButton=document.getElementById('divideButton');
const percentageButton=document.getElementById('percentageButton');
const equalButton=document.getElementById('equalButton');
const clearButton=document.getElementById('clearButton');
var calculatorDisplay=document.getElementById('calculatorDisplay');
const backSpaceButton=document.getElementById('backSpaceButton');
var char="";
var finalChar="";


document.addEventListener('keydown',function(e) {
    console.log(e.keyCode);
    if (e.keyCode==49){
        finalChar="";
        char=char+parseInt(oneButton.value);
        calculatorDisplay.innerHTML=char;
    }else if (e.keyCode==50){
        finalChar="";
        char=char+parseInt(twoButton.value);
        calculatorDisplay.innerHTML=char;

    }else if (e.keyCode==51){
        finalChar="";
        char=char+parseInt(threeButton.value);
        calculatorDisplay.innerHTML=char;
    }else if (e.keyCode==52){
        finalChar="";
        char=char+parseInt(fourButton.value);
        calculatorDisplay.innerHTML=char;

    }else if(e.keyCode==53){
        finalChar="";
        char=char+parseInt(fiveButton.value);
        calculatorDisplay.innerHTML=char;

    }else if(e.keyCode==54){
        finalChar="";
        char=char+parseInt(sixButton.value);
        calculatorDisplay.innerHTML=char;

    }else if(e.keyCode==55){
        finalChar="";
        char=char+parseInt(sevenButton.value);
        calculatorDisplay.innerHTML=char;

    }else if(e.keyCode==56){
        finalChar="";
        char=char+parseInt(eightButton.value);
        calculatorDisplay.innerHTML=char;

    }else if(e.keyCode==57){
        finalChar="";
        char=char+parseInt(nineButton.value);
        calculatorDisplay.innerHTML=char;

    }else if(e.keyCode==48){
        finalChar="";
        char=char+parseInt(zeroButton.value);
        calculatorDisplay.innerHTML=char;

    }else if(e.keyCode==187){
        char=char+finalChar;
        char=char+plusButton.value;
        calculatorDisplay.innerHTML=char;

    }else if(e.keyCode==189){
        char=char+finalChar;
        char=char+minusButton.value;
        calculatorDisplay.innerHTML=char;

    }else if(e.keyCode==170){
        char=char+finalChar;
        char=char+multiplyButton.value;
        calculatorDisplay.innerHTML=char;

    }else if(e.keyCode==191){
        char=char+finalChar;
        char=char+divideButton.value;
        calculatorDisplay.innerHTML=char;

    }else if(e.keyCode==69){
        // var splicer=char.split("+");    
        calculatorDisplay.innerHTML=eval(char);
        finalChar=calculatorDisplay.innerText;
        char="";

    }else if(e.keyCode==67){
        char="";
        calculatorDisplay.innerHTML=0;
        finalChar="";

    }else if(e.keyCode==53){
        char=char+finalChar;
        char=char+percentageButton.value;
        calculatorDisplay.innerHTML=char;
    }
    

});

oneButton.onclick=function(){
    finalChar="";
    char=char+parseInt(oneButton.value);
    calculatorDisplay.innerHTML=char;
}

twoButton.onclick=function(){
    finalChar="";
    char=char+parseInt(twoButton.value);
    calculatorDisplay.innerHTML=char;
}

threeButton.onclick=function(){
    finalChar="";
    char=char+parseInt(threeButton.value);
    calculatorDisplay.innerHTML=char;
}

fourButton.onclick=function(){
    finalChar="";
    char=char+parseInt(fourButton.value);
    calculatorDisplay.innerHTML=char;
}

fiveButton.onclick=function(){
    finalChar="";
    char=char+parseInt(fiveButton.value);
    calculatorDisplay.innerHTML=char;
}

sixButton.onclick=function(){
    finalChar="";
    char=char+parseInt(sixButton.value);
    calculatorDisplay.innerHTML=char;
}

sevenButton.onclick=function(){
    finalChar="";
    char=char+parseInt(sevenButton.value);
    calculatorDisplay.innerHTML=char;
}

eightButton.onclick=function(){
    finalChar="";
    char=char+parseInt(eightButton.value);
    calculatorDisplay.innerHTML=char;
}

nineButton.onclick=function(){
    finalChar="";
    char=char+parseInt(nineButton.value);
    calculatorDisplay.innerHTML=char;
}

// oneButton.onclick=function(){
//     finalChar="";
//     char=char+parseInt(oneButton.value);
//     calculatorDisplay.innerHTML=char;
// }

zeroButton.onclick=function(){
    finalChar="";
    char=char+parseInt(zeroButton.value);
    calculatorDisplay.innerHTML=char;
}

plusButton.onclick=function(){
    char=char+finalChar;
    char=char+plusButton.value;
    calculatorDisplay.innerHTML=char;
}

minusButton.onclick=function(){
    char=char+finalChar;
    char=char+minusButton.value;
    calculatorDisplay.innerHTML=char;
}

multiplyButton.onclick=function(){
    char=char+finalChar;
    char=char+multiplyButton.value;
    calculatorDisplay.innerHTML=char;
}

divideButton.onclick=function(){
    char=char+finalChar;
    char=char+divideButton.value;
    calculatorDisplay.innerHTML=char;
}

equalButton.onclick=function(){
    // var splicer=char.split("+");
    // for(var i=0;i<splicer.length;i){
    //     var sum=0;
    //     sum=sum+splicer;
    // }
    // console.log(eval(char));

    calculatorDisplay.innerHTML=eval(char);
    finalChar=calculatorDisplay.innerText;
    char="";
    console.log(finalChar);

};

clearButton.onclick=function(){
    char="";
    calculatorDisplay.innerHTML=0;
    finalChar="";
};

decimalButton.onclick=function(){
    char=char+finalChar;
    char=char+decimalButton.value;
    calculatorDisplay.innerHTML=char;
}

percentageButton.onclick=function(){
    char=char+finalChar;
    char=char+percentageButton.value;
    calculatorDisplay.innerHTML=char;
}

backSpaceButton.onclick=function(){

    char=char.slice(0,-1);
    calculatorDisplay.innerHTML=char;



};

