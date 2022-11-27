// Code your solution in this file!
function distanceFromHqInBlocks(numberOfBlocks) {
  if (numberOfBlocks > 42) return numberOfBlocks - 42;
  else numberOfBlocks < 42;
  return 42 - numberOfBlocks;
}
function distanceFromHqInFeet(numberOfBlocks) {
  return distanceFromHqInBlocks(numberOfBlocks) * 264;
}
function distanceTravelledInFeet(a, b) {
  if (b > a) return (b - a) * 264;
  else return (a - b) * 264;
}
function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination);
  const dist = distance - 400
  if (distance <= 400) {
    return 0;
  } 
  else if (distance>400 && distance<2000){
    return dist*0.02
  }
 else if (distance>2000 && distance<2500){
    return 25;
 }
 else {
    return 'cannot travel that far'
 }
}
