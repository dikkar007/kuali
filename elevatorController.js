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

  elevatorRequest (from, to) {
    if (this.validateRange(from, to)) {
      return
    }

    console.log('#6 Req > Move from floor: ' + from + ' To : ' + to)
  }

  validateRange (from, to) {
    if (to > this.floorsCount || from > this.floorsCount) {
      console.log('#4 Req : An elevator cannot proceed above the top floor.')
      return true
    }

    if (to < this.minFloor || from < this.minFloor) {
      console.log('#5 Req :An elevator cannot proceed below the ground floor (assume 1 as the min)')
      return true
    }

    if (to == from) {
      console.log('To == From')
      return true
    }

    return false
  }
}
