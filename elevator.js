
module.exports = class Elevator {

  constructor (parent, index, startFloor) {
    this.index = index
    this.onFloor = startFloor
    this.isMoving = false

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

  }

  moveToDestDown (to) {

  }

  onDestFloor () {
  }
}
