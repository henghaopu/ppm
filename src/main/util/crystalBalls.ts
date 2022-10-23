/* eslint-disable @typescript-eslint/no-unused-vars */

// MIT - Puzzle 4: Please Do Break the Crystal
// www.youtube.com/watch?v=Fp7usgx_CvM

// let k: fixed floor interval to move to and drop the ball
// 0, k, 2k, 3k, ... (n - k), n
// worst case:
//  - first crystal ball breaks at n floor -> tried n/k times
//  - second crystal ball moves from [(n - k) + 1, n - 1] -> tried k - 1 times
//  - tatal: n/k + k - 1 times
//  use differential to find min(k + n/k - 1) -> k = √n, min = 2√n - 1

function getHardnessCoefficient(
  crystalBallAllFloorDroppingTestResult: ('break' | 'not break')[],
  numOfBalls = 2,
): number {
  let firstBallBreakFloorIndex = -1
  const highestFloor = crystalBallAllFloorDroppingTestResult.length
  const floorInterval = Math.floor(Math.sqrt(highestFloor))
  for (
    let firstBallFloorIndex = floorInterval;
    firstBallFloorIndex <= highestFloor - 1;
    firstBallFloorIndex += floorInterval
  ) {
    if (
      crystalBallAllFloorDroppingTestResult[firstBallFloorIndex] === 'break'
    ) {
      firstBallBreakFloorIndex = firstBallFloorIndex
      break
    }
  }
  // if the first ball breaks
  if (firstBallBreakFloorIndex > 0) {
    for (
      let secondBallFloorIndex = firstBallBreakFloorIndex - floorInterval + 1;
      secondBallFloorIndex <= firstBallBreakFloorIndex;
      secondBallFloorIndex += 1
    ) {
      if (
        crystalBallAllFloorDroppingTestResult[secondBallFloorIndex] === 'break'
      ) {
        return secondBallFloorIndex + 1
      }
    }
  }

  return -1
}

export default getHardnessCoefficient
