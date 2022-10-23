import getHardnessCoefficient from 'main/util/crystalBalls'

test('two crystal balls', () => {
  // floor: 1 - 128 with floor index 0 - 127
  const highestFloor = 128
  // floor 99(floor index 98): won't break; floor 99 + 1 will break
  const hardeningCoefficient = 99
  // set up crystalBallAllFloorDroppingTestResult
  const crystalBallAllFloorDroppingTestResult: ('break' | 'not break')[] =
    new Array(highestFloor).fill('not break')
  for (
    let floorIndex = hardeningCoefficient - 1;
    floorIndex <= highestFloor;
    floorIndex += 1
  ) {
    crystalBallAllFloorDroppingTestResult[floorIndex] = 'break'
  }

  expect(getHardnessCoefficient(crystalBallAllFloorDroppingTestResult, 2)).toBe(
    hardeningCoefficient,
  )
  expect(getHardnessCoefficient(new Array(256).fill('not break'))).toBe(-1)
})
