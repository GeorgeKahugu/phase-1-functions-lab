// Code your solution in this file!
function distanceFromHqInBlocks(pickupLocation) {
  const hqLocation = 42;
  const distance = Math.abs(pickupLocation - hqLocation);
  return distance;
}

function distanceFromHqInFeet(pickupLocation) {
  const blocks = distanceFromHqInBlocks(pickupLocation);
  const feetPerBlock = 264;
  return blocks * feetPerBlock;
}
console.log(distanceFromHqInFeet(50));

function distanceTravelledInFeet(startBlock, destinationBlock) {
  const feetPerBlock = 264;
  const distanceInBlocks = Math.abs(destinationBlock - startBlock);
  return distanceInBlocks * feetPerBlock;
}
console.log(distanceTravelledInFeet(34, 38));

function calculatesFarePrice(start,destination){
  const distanceInFeet = distanceTravelledInFeet(start, destination);
      if (distanceInFeet <=400){

        return 0; 

      }else if (distanceInFeet >400 && distanceInFeet <=2000) {
              return (distanceInFeet -400) *0.02;

      } else if (distanceInFeet>2000 && distanceInFeet<=2500) {
               return 25;

      }else {
        return 'cannot travel that far'
      }
}


