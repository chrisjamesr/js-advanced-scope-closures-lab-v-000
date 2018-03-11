function produceDrivingRange(blockRange){
  const regex = new RegExp('\\d*');
  return function(start, end){
    const range = Math.abs( Number.parseInt(start.match(regex)[0]) - Number.parseInt(end.match(regex)[0] ))
    if( blockRange > range ){
      return `within range by ${blockRange - range}`
    }
    else 
      return `${ range - blockRange } blocks out of range`
  }
}

function produceTipCalculator(tipPercentage){
  return function(fare){
    return fare * tipPercentage
  }
}