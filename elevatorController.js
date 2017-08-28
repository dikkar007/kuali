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
    console.log('#6 Req > Move from floor: ' + from + ' To : ' + to)
    if (this.validateRange(from, to)) {
      return
    }

    /* #7 Req When an elevator request is made, the unoccupied elevator closest to it will answer the
call, unless an occupied elevator is moving and will pass that floor on its way. The
exception is that if an unoccupied elevator is already stopped at that floor, then it will
always have the highest priority answering that call. */

    var result = this.elevators.filter(function (elevator) {
      return elevator.onFloor == from
    })

    if (!result.length) {
      result = this.elevators.filter(function (elevator) {
        return !elevator.isMoving
      })
    }

    //closest
    var elevator = result.sort(function (a, b) {
      return Math.abs(from - a.onFloor) - Math.abs(from - b.onFloor)
    })[0]

    console.log(elevator)

    elevator.move(from, to)
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
