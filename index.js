const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

const totalBatteries = batteryBatches.reduce((totalBatteries, currentValue) => totalBatteries + currentValue, 0)

// const totalBatteries = batteryBatches.reduce(function (totalBatteries, currentValue) {
//     return totalBatteries + currentValue
// }, 0)