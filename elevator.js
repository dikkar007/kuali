const Service = require('./service')
module.exports = class Elevator {

  constructor (parent, index, startFloor) {
    this.index = index
    this.onFloor = startFloor
    this.isMoving = false
    this.trip = 0
    this.inService = false
  }

  move (from, to) {
    this.isMoving = true

    console.log('Req #2 On floor ' + this.onFloor)

    if (this.onFloor == from) {
      console.log('Req #3 Door open / closes on floor ' + this.onFloor)
      if (to - from > 0) {
        this.moveToDestUp(to)
      } else {
        this.moveToDestDown(to)
      }
      return
    } else {
      if (this.onFloor < from) {
        ++this.onFloor
      } else {
        --this.onFloor
      }
      this.move(from, to)
    }
  }

  moveToDestUp (to) {
    console.log('Req #2 On floor ' + this.onFloor)
    if (this.onFloor == to) {
      this.onDestFloor()
    } else {
      ++this.onFloor
      this.moveToDestUp(to)
    }
  }

  moveToDestDown (to) {
    console.log('Req #2 On floor ' + this.onFloor)
    if (this.onFloor == to) {
      this.onDestFloor()
    } else {
      --this.onFloor
      this.moveToDestDown(to)
    }
  }

  onDestFloor () {
    this.trip++
    if (this.trip == 100) {
      this.inService = true
      new Service(this)  
    }
    this.isMoving = false
    console.log('Reached on destination floor ' + this.onFloor)
    console.log('Req #3 Door open / closes on floor ' + this.onFloor)
  }
}
