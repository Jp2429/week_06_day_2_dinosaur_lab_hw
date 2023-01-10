const Dinosaur = require("./dinosaur")

const Park  = function (name, ticketPrice, dinosaurs) {
    this.name = name
    this.ticketPrice = ticketPrice
    this.dinosaurs = dinosaurs
}

Park.prototype.numberOfDinosaurs = function () {
    let dinosaurCount = this.dinosaurs.length
    return dinosaurCount
}

Park.prototype.addDinosaur = function (dinosaur) {
    this.dinosaurs.push(dinosaur)
}

Park.prototype.removeDinosaur = function (species) {
    for (let i = 0; i < this.dinosaurs.length; i++) {
        if (this.dinosaurs[i].species === species) {
            this.dinosaurs.splice(i, 1)
        }
    }
}

Park.prototype.mostVisitors = function () {
    let amountVisited = []
    for (let i = 0; i < this.dinosaurs.length; i++) {
        amountVisited.push(this.dinosaurs[i].guestsAttractedPerDay)
    }
    let maxVisited = Math.max.apply(Math, amountVisited)
    return maxVisited
}

Park.prototype.findSpecies = function (species) {
    let dinosaur = []
    for (let i = 0; i < this.dinosaurs.length; i++) {
        if (this.dinosaurs[i].species === species)
        dinosaur.push(this.dinosaurs[i])
    }
    let dinosaurCount = dinosaur.length
    return dinosaurCount
}

Park.prototype.totalVisitors = function () {
    let visitorCount = 0
    for (let i = 0; i < this.dinosaurs.length; i++) {
        visitorCount += this.dinosaurs[i].guestsAttractedPerDay
    }
    return visitorCount
}


module.exports = Park