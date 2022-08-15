const Car = require('./Car');

class CarBuilder {
    constructor (title) {
        this.title = title;
    }

    setColor (color) {
        this.color = color;
        return this;
    }

    setEngine (engine) {
        this.engine = engine;
        this.isBusinessClass = engine >= 4.0;
        return this;
    }

    setModel (model) {
        this.model = model;
        return this;
    }

    setPrice (price) {
        this.price = price;
        return this;
    }

    setTransmission (transmission) {
        this.transmission = transmission;
        this.isBusinessClass = transmission === 'manual' ? false : true;
        return this;
    }

    setBusinessClass (engine = 4.0) {
        this.bodyType = 'Sedan';
        this.transmission = 'automatic';
        this.engine = engine;
        this.isBusinessClass = true;
        return this;
    }

    withAdditions (additions) {
        this.additions = additions;
        return this;
    }
}

module.exports = CarBuilder;