module.exports = class Service {

  constructor (parent, index, startFloor) {
    this.parent = parent
    setTimeout(function () {
      this.parent.inService = false
    }, 120000)
  }
}
