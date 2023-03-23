function getCurrent(voltage: number, watts: number): number{
    return watts/voltage;
}

function getCurrent2(voltage: number, resistance: number): number{
    return voltage/resistance;
}

function maximumVoltage(resistanceOhms: number, powerMaximumWatts: number):number{
    //U*I=P
    //U/I=R
    //I=U/R
    //U*U/R=P
    //U*U=P*R
    //U=sqrt(P*R)
    return Math.sqrt(powerMaximumWatts*resistanceOhms);
}

let maxVoltage = maximumVoltage(110, 0.25)
let maxCurrent = getCurrent(maxVoltage, 0.25)
console.log(maxVoltage);
console.log(maxCurrent);
let maxPower = maxCurrent * maxVoltage
console.log(maxPower)

maxVoltage = maximumVoltage(4700, 1)
console.log(maxVoltage);

let testCurrent = getCurrent2(5, 220)
console.log(testCurrent)