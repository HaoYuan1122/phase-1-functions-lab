// Code your solution in this file!
function distanceFromHqInBlocks(a){
    return Math.abs(a-42)
}

function distanceFromHqInFeet(a){
    return distanceFromHqInBlocks(a)*264
}

function distanceTravelledInFeet(a,b){
    return Math.abs(a-b)*264
}

function calculatesFarePrice(a,b){
    const c=distanceTravelledInFeet(a,b)
    if(c<=400){
        return 0
    }else if(c>400 && c<=2000){
        return (c-400)*0.02
    }else if(c>2000 && c<=2500){
        return 25
    }else{
        return "cannot travel that far"
    }
}