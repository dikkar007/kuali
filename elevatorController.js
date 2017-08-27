const Elevator = require('./elevator')

module.exports = class ElevatorController {
  constructor (elevators, floors) {
    var self = this

    this.elevators = elevators
    this.floorsCount = floors
    this.minFloor = 1

    console.log('#1 Req > Elevators : ' + this.elevators + ' Total Floors : ' + this.floorsCount + ' Min Floor :' + this.minFloor)

    // initialize  elevators:
    this.elevators = Array.apply(null, Array(elevators))
                          .map(function (value, index) {
                            return new Elevator(self, index, 1)
                          })
  }
}
