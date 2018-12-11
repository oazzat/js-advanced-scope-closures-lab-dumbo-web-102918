
function produceDrivingRange(max){
  return function(first,second){
    first = parseInt(first)
    second = parseInt(second)
    let dist = second - first
    if (dist>max){
      return `${dist-max} blocks out of range`
    }
    else if(dist<max){
      return `within range by ${max-dist}`
    }
  }
}

function produceTipCalculator(tip){
  return function(fare){
    return fare * tip
  }
}

function createDriver(){
  let id = 0
  return class Driver{
    constructor (name){
      this.name = name
      this.id = id++
    }
  }
}
