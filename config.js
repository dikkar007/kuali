const ElevatorController = require('./elevatorController')

class Config {
  constructor () {
    var ec = new ElevatorController(4, 9) // number of elevators, number of floors
    ec.elevatorRequest(3, 8) // request from to


    ec.elevatorRequest(8, 11) // request from to
    ec.elevatorRequest(8, -1) // request from to
    ec.elevatorRequest(4, 4) // request from to
  }
}

new Config()
