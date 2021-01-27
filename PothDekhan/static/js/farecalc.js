// calculate fare
function calculate(distance, base, perUnit, waitCharge){
    var distanceKM = distance/1000;
    return (base + (distanceKM*perUnit) + (distanceKM*waitCharge*3));
}

// Pathao Moto Rate
function pathaoMoto(distance){
    var baseFare = 25;
    var perKM = 12;
    var waitingCharge = 0.5;

    return calculate(distance,baseFare,perKM,waitingCharge);
}

// Pathao Car Plus Rate
function pathaoCarPlus(distance){
    var baseFare = 50;
    var perKM = 20;
    var waitingCharge = 2.5;

    return calculate(distance,baseFare,perKM,waitingCharge);
}

// Pathao Car Lite Rate
function pathaoCarLite(distance){
    var baseFare = 40;
    var perKM = 15;
    var waitingCharge = 2;

    return calculate(distance,baseFare,perKM,waitingCharge);
}



// place the value in card
function fareCalculate(distanceInMeter){

    var moto = pathaoMoto(distanceInMeter);
    var carP = pathaoCarPlus(distanceInMeter);
    var carL = pathaoCarLite(distanceInMeter);

    var motoFareText = document.querySelector('#motoFare');
    var carPlusText = document.querySelector('#carPlusFare');
    var carLiteText = document.querySelector('#carLiteFare');
    

    motoFareText.textContent = moto.toFixed(2) + " Taka";
    carPlusText.textContent = carP.toFixed(2) + " Taka";
    carLiteText.textContent = carL.toFixed(2) + " Taka";


    var distanceObj = document.querySelector('#distance');
    var distanceInkilometer = distanceInMeter/1000;
    distanceObj.textContent = distanceInkilometer.toFixed(2) + " Kilometer";

    // change font style to normal
    var spanTexts = document.querySelectorAll('.text-normalize');
    for (let index = 0; index < spanTexts.length; index++) {
        spanTexts[index].style.fontStyle = "normal"        
    }
}