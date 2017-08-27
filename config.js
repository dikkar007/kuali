const ElevatorController = require('./elevatorController')

class Config {
  constructor () {
    var ec = new ElevatorController(4, 9) // number of elevators, number of floors
  }
}
