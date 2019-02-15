var box1 = document.querySelector("#box1"),     box2 = document.querySelector("#box2"),
    box3 = document.querySelector("#box3"),     box4 = document.querySelector("#box4"),     boxes = document.querySelectorAll(".boxes"),
    box5 = document.querySelector("#box5"),     box6 = document.querySelector("#box6"),     displaySigns = document.querySelectorAll('.displaySigns'),
    box7 = document.querySelector("#box7"),     box8 = document.querySelector("#box8"),     box9 = document.querySelector("#box9"),
    sign1 = document.querySelector("#sign1"),   sign2 = document.querySelector("#sign2"),   sign3 = document.querySelector("#sign3"),
    sign4 = document.querySelector("#sign4"),   sign5 = document.querySelector("#sign5"),   sign6 = document.querySelector("#sign6"),
    sign7 = document.querySelector("#sign7"),   sign8 = document.querySelector("#sign8"),   sign9 = document.querySelector("#sign9"),
    sign10 = document.querySelector("#sign10"), sign11 = document.querySelector("#sign11"), sign12 = document.querySelector("#sign12"),
    res1   = document.querySelector("#res1"),   res2   = document.querySelector("#res2"),   res3   = document.querySelector("#res3"),
    res4   = document.querySelector("#res4"),   res5   = document.querySelector("#res5"),   res6   = document.querySelector("#res6"),
    equals1   = document.querySelector("#equals1"),   equals2   = document.querySelector("#equals2"),   equals3   = document.querySelector("#equals3"),
    equals4   = document.querySelector("#equals4"),   equals5   = document.querySelector("#equals5"),   equals6   = document.querySelector("#equals6"),
//=====================================================================================================================================
    beginnerBtn = document.querySelector("#beginnerBtn"),   intermediateBtn = document.querySelector("#intermediateBtn"),   advanceBtn = document.querySelector("#advanceBtn"),
    bLevel1 = document.querySelector("#bLevel1"),   bLevel2 = document.querySelector("#bLevel2"),   iLevel1 = document.querySelector("#iLevel1"), iLevel2 = document.querySelector("#iLevel2"),
    aLevel1 = document.querySelector("#aLevel1"), aLevel2 = document.querySelector("#aLevel2"), record = document.querySelector("#record"),
    submitBtn = document.querySelector("#submitBtn"),   shuffleBtn = document.querySelector('#shuffleBtn'), message = document.querySelector("#message");

//Global Variable declarations
var     number = 4, numberOfSigns=4, uBIndex=0, maxNumber = 9, maxNumberOfSigns = 12, numberOfResFields = 4, maxNumberOfResFields = 6, getRecord = 0;
const   signs = ['+', '-', '*'];
var     getSign1,   getSign2,   getSign3,   getSign4,   getSign5,   getSign6,   getSign7,   getSign8,   getSign9,   getSign10,      getSign11,     getSign12;
var     num1,       num2,       num3,       num4,       num5,       num6,       num7,       num8,       num9;
var alert = false;
record.textContent = ""+ getRecord;

//Initial Function===================================
const init = () => {
    hideLevelBtns();
    bLevel1.style.display = "inline-block";
    bLevel2.style.display = "inline-block";
    colorStyles(bLevel1, bLevel2);
    levelColorStyles(beginnerBtn, intermediateBtn, advanceBtn);
    handleAll();   
}//==================================================

//Calls all functions needed at the same time
const handleAll = () => {
    disableBoxes();
    generateSigns();
    generateNumbers();
    hideUnwantedSigns();
    randomEmptyBoxes();
    hideUnwantedBoxes();
    hideUnwantedRes();
    evaluate();
    record.textContent = ""+ getRecord;
    startAnimation();
}

const hideLevelBtns = () => {
    bLevel1.style.display  = "none";
    bLevel2.style.display  = "none";
    iLevel1.style.display  = "none";
    iLevel2.style.display  = "none";
    aLevel1.style.display  = "none";
    aLevel2.style.display  = "none";
}
//=========STYLES===================
const displayStyles = (s1, s2) => {
    s1.style.display = "inline-block";
    s2.style.display = "inline-block";
}

const colorStyles = (cs1, cs2) => {
    cs1.classList.add("levelActive");
    cs2.classList.remove("levelActive");
}
const levelColorStyles = (lcs1, lcs2, lcs3) => {
    lcs1.classList.add("active");
    lcs2.classList.remove("active");
    lcs3.classList.remove("active");
}

//===================================

//===================================================
//Adding Event Listeners to Buttons
beginnerBtn.onclick =  () => {
    uBIndex = 0;
    beginner();
    hideLevelBtns();
    displayStyles(bLevel1, bLevel2);
    colorStyles(bLevel1, bLevel2);
    levelColorStyles(beginnerBtn, intermediateBtn, advanceBtn);
};
bLevel1.onclick = () => {
    uBIndex = 0;
    beginner();
    colorStyles(bLevel1, bLevel2);
}
bLevel2.onclick = () => {
    uBIndex = 1;
    beginner();
    colorStyles(bLevel2, bLevel1);
}
const beginner = () => {
    getRecord = 0;
    number = 4;
    numberOfSigns = 4;
    numberOfResFields = 4;
    handleAll();
    removeMessageClass();
    
    
}
intermediateBtn.onclick = () => {
    uBIndex = 2;
    intermediate();
    hideLevelBtns();
    displayStyles(iLevel1, iLevel2);
    colorStyles(iLevel1, iLevel2);
    levelColorStyles(intermediateBtn, beginnerBtn, advanceBtn);
}
iLevel1.onclick = () => {
    uBIndex = 2;
    intermediate();
    colorStyles(iLevel1, iLevel2);
}
iLevel2.onclick = () => {
    uBIndex = 3;
    intermediate();
    colorStyles(iLevel2, iLevel1);
}
const intermediate = () => {
    getRecord = 0;
    number = 6;
    numberOfSigns = 7;
    numberOfResFields = 5;
    handleAll();
    removeMessageClass();
    
    
}
advanceBtn.onclick = () => {
    uBIndex = 4;
    advance();
    hideLevelBtns();
    displayStyles(aLevel1, aLevel2);
    colorStyles(aLevel1, aLevel2);
    levelColorStyles(advanceBtn, beginnerBtn, intermediateBtn);

};
aLevel1.onclick = () => {
    uBIndex = 4;
    advance();
    colorStyles(aLevel1, aLevel2);
}
aLevel2.onclick = () => {
    uBIndex = 5;
    advance();
    colorStyles(aLevel2, aLevel1);
}
const advance = () => {
    getRecord = 0;
    number = maxNumber;
    numberOfSigns = 12;
    numberOfResFields = 6;
    handleAll();
    removeMessageClass();
    
    
}
//===================================================

//Initially disable all Boxes
const disableBoxes = () => {
    for(var i =1; i <= number;  i++){
        var box = "box" + i;
        window[box].disabled = true;
        window[box].style.backgroundColor = "#CDDECD";
        window[box].style.color = "#202053";
    }
}

//Show all Signs initially 
const showAllSigns = () => {
    for(var x = 1; x <= maxNumberOfSigns; x++){
        var sign = "sign" + [x];
        if ( window[sign].textContent === "*"){
            window[sign].textContent = "x";
        }
        window[sign].style.display = 'block';
    }
}

//Show all Results Fields
const showAllRes = () => {
    for(var x = 1; x <= maxNumberOfResFields; x++){
        var res = "res" + [x];
        window[res].style.display = 'block';
        var equals = "equals" + [x];
        window[equals].style.display = 'block';
    }
}

//Display All Boxes Initially
const showAllBoxes = () => {
    boxes.forEach( (box) => {
        box.style.display = 'inline-block';
    });
}

//Hide unwanted signs at a specific moment
const hideUnwantedSigns = () => {
    showAllSigns();
    for(var x = numberOfSigns + 1; x <= maxNumberOfSigns; x++){
        var sign = "sign" + [x];
        window[sign].style.display = 'none';
    }
}

//Hide unwanted Boxes at a specific moment
const hideUnwantedBoxes = () => {
    showAllBoxes();
    if (numberOfSigns < maxNumberOfSigns){
        for(var i = number + 1; i <= maxNumber;  i++){
            var box = "box" + i;
            window[box].style.display = 'none';
        }
    }
}

//Hide unwanted Results at a specific moment
const hideUnwantedRes = () => {
    showAllRes();
    if (numberOfResFields < maxNumberOfResFields){
        for(var i = numberOfResFields + 1; i <= maxNumberOfResFields;  i++){
            var res = "res" + i;
            window[res].style.display = 'none';
            var equals = "equals" + i;
            window[equals].style.display = 'none';
        }
    }
}

//Genrating Signs
const generateSigns = () => {
    for(var i =1; i <= numberOfSigns; i++){
        var getSign = "getSign" + [i];
        window[getSign] = signs[Math.floor(Math.random()*signs.length)];
        var sign = "sign" + [i];
        window[sign].textContent = window[getSign];
    }
}
//Generating Numbers and storing it in their respective variables
const generateNumbers = () => {
    for(var i =1; i <= number; i++){
        var num = "num" + [i];
        var box = "box" + [i];
        window[num] = Math.floor(Math.random()*number);
        window[box].value = window[num];
    }
}

//Creating object of arrays for dynamic empty boxes
const uniqueBoxes = [
    [ [1,2], [1,3],[1,4],[2,3], [2,4], [3,4] ],
    [ [1,2,3], [1,2,4],[1,4,3],[2,3,4] ],

    [ [1,4,6], [2,3,5], [6,1,5], [1,6,3], [1,3,5], [4,6,2],[4,2,1], [1,3,5], [2,4,1] ],
    [ [1,2,3,4], [1,3,4,5], [1,4,5,6], [2,3,4,5], [2,4,5,6], [1,2,5,6],[1,3,4,6], [3,4,5,6], [2,3,5,6], [1,2,4,5] ],
    
    [
        [1,4,3,6], [2,3,7,5], [7,6,1,5], [3,6,9,2],[1,5,7,9], [3,5,7,8], [4,6,2,9], 
        [4,5,7,8], [4,2,8,6], [1,3,5,9], [2,4,7,9], [1,2,4,5]
    ],

    [   [1,2,3,4,5], [1,2,3,4,6], [1,2,3,4,7], [1,2,3,4,8], [1,2,3,4,9], [2,3,4,5,6], [2,4,5,6,7], 
        [2,4,5,6,8], [2,4,5,6,9], [3,4,5,6,7], [3,4,5,6,8], [3,4,5,6,9],
        [4,5,6,7,8], [4,5,6,7,9], [1,3,4,5,6], [1,3,4,5,7], [1,3,4,5,8],
        [1,4,5,6,7], [1,4,5,6,8], [1,4,5,6,9], [1,5,6,7,8], [1,5,6,7,9]
    ]
]

//Generating a Random Box Index from Unique Boxes Objects to be set empty
const randomEmptyBoxes = () => {
    var randomIndexOfUniqueBoxes = Math.floor(Math.random() * uniqueBoxes[uBIndex].length);

    //Looping through Selected Boxes and setting value to none for Fields
    for(var i =0; i < uniqueBoxes[uBIndex][randomIndexOfUniqueBoxes].length; i++){
        var box = "box" + uniqueBoxes[uBIndex][randomIndexOfUniqueBoxes][i];
        window[box].value = "";
        window[box].disabled = false;
        window[box].style.backgroundColor = "#FFF";
        window[box].style.color = "#474751";
    }
}//===============================================================

const evaluate = () => {
    if(number == 4){
        res1.value = eval(num1 + getSign1 + num2);  res2.value = eval(num3 + getSign4 + num4);
        res3.value = eval(num1 + getSign2 + num3);  res4.value = eval(num2 + getSign3 + num4);

        submitBtn.onclick = () => {
            displayMessage.gen();
            if(box1.value == num1 && box2.value == num2 && box3.value == num3 && box4.value == num4){
                displayMessage.success1();
                getRecord += 1;
                handleAll();
            }else{
                displayMessage.failure();
            }
        }
    }else if(number == 6){
        res1.value = eval(num1 + getSign1 + num2 + getSign5 + num5);
        res2.value = eval(num3 + getSign4 + num4 + getSign7 + num6);
        res3.value = eval(num1 + getSign2 + num3);
        res4.value = eval(num2 + getSign3 + num4);
        res5.value = eval(num5 + getSign6 + num6);

        submitBtn.onclick = () => {
            displayMessage.gen();
            if(box1.value == num1 && box2.value == num2 && box3.value == num3 && box4.value == num4 && box5.value == num5 && box6.value == num6){displayMessage.success1();
                displayMessage.success2();
                getRecord += 1;
                handleAll();
            }else{
                displayMessage.failure();
            }
        }
    }else if(number == 9){
        res1.value = eval(num1 + getSign1 + num2 + getSign5 + num5);
        res2.value = eval(num3 + getSign4 + num4 + getSign7 + num6);
        res3.value = eval(num1 + getSign2 + num3 + getSign8 + num7);
        res4.value = eval(num2 + getSign3 + num4 + getSign9 + num8);
        res5.value = eval(num5 + getSign6 + num6 + getSign10 + num9);
        res6.value = eval(num7 + getSign11 + num8 + getSign12 + num9);

        submitBtn.onclick = () => {
            displayMessage.gen();
            if(box1.value == num1 && box2.value == num2 && box3.value == num3 && box4.value == num4 && box5.value == num5 && box6.value == num6 && box7.value == num7 && box8.value == num8 && box9.value == num9){
                displayMessage.success3();
                getRecord += 1;
                handleAll();
            }else{
                displayMessage.failure();
            }
        }
    }
}
const displayMessage = {
    gen: () => {
        removeMessageClass();
        message.classList.add("alert", "py-1", "m-3", "text-center");
    },
    success1: () => {
        message.classList.add("alert-success");
        message.textContent = "Correct! Well done";
    },
    success2: () => {
        message.classList.add("alert-success");
        message.textContent = "Good job!! You are a critical Thinker";
    },
    success3:  () => {
        message.classList.add("alert-success");
        message.textContent = "Excellent!! You are a Genius";
    },
    failure: () => {
        message.classList.add("alert-danger");
        message.textContent = "Sorry! Try agian";
    }  
}

const removeMessageClass = () => {
    message.textContent = "";
    message.removeAttribute('class');
}

shuffleBtn.onclick = () => {
    removeMessageClass();
    handleAll();
}
const startAnimation = () => {
    //Array to storeall animations
    const animation = [
        "bounce",	    "flash",	        "pulse",	        "rubberBand",
        "shake",	    "headShake",	    "swing",	        "tada",
        "wobble",	    "jello",	        "slideInDown",      "heartBeat",
        "fadeIn",	    "fadeInDown",	    "fadeInDownBig",    "fadeInLeft",
        "fadeInLeftBig","fadeInRight",	    "fadeInRightBig",   "fadeInUp",
        "fadeInUpBig",	"zoomInLeft",	    "zoomInRight",	    "zoomInUp",
        "rollIn",	    "flipInX",	        "flipInY"
    ];

    var changeAnimation1 = animation[Math.floor(Math.random()*animation.length)], changeAnimation2 = animation[Math.floor(Math.random()*animation.length)],
        changeAnimation3 = animation[Math.floor(Math.random()*animation.length)], changeAnimation4 = animation[Math.floor(Math.random()*animation.length)];   

    //Adding Animations to Fields
    a = "animated";
    box1.classList.add(a, changeAnimation1);box2.classList.add(a, changeAnimation2);box3.classList.add(a, changeAnimation3);
    box4.classList.add(a, changeAnimation4);box5.classList.add(a, changeAnimation1);box6.classList.add(a, changeAnimation2);
    box7.classList.add(a, changeAnimation3);box8.classList.add(a, changeAnimation4);box9.classList.add(a, changeAnimation4);
    res1.classList.add(a, changeAnimation1);res2.classList.add(a, changeAnimation2);res3.classList.add(a, changeAnimation3);
    res4.classList.add(a, changeAnimation4);res5.classList.add(a, changeAnimation4);res6.classList.add(a, changeAnimation4);
}
init();