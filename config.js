const ElevatorController = require('./elevatorController')
class Config {

  constructor () {

    console.log('----- Start : Kuali Elevator -----')

    var ec = new ElevatorController(4, 9) // number of elevators, number of floors
    ec.elevatorRequest(3, 8) // request from to
    ec.elevatorRequest(2, 7)
    ec.elevatorRequest(7, 2)
    ec.elevatorRequest(1, 7)
    ec.elevatorRequest(2, 6)

    ec.elevatorRequest(3, 8) // request from to
    ec.elevatorRequest(2, 7)
    ec.elevatorRequest(7, 2)
    ec.elevatorRequest(1, 7)
    ec.elevatorRequest(2, 6)


  //  ec.elevatorRequest(8, 3) // request from to
    ec.elevatorRequest(8, 11) // request from to
    ec.elevatorRequest(8, -1) // request from to
    ec.elevatorRequest(4, 4) // request from to

    console.log('----- End : Kuali Elevator -----')
  }
 }
new Config()
