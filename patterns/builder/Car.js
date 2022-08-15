class Car {
    constructor(builder) {
        this.title = builder.title;
        this.model = builder.model;
        this.price = builder.price;
        this.engine = builder.engine;
        this.bodyType = builder.bodyType;
        this.color = builder.color || 'Black';
        this.transmission = builder.transmission || 'manual';
        this.additions = builder.additions || [];
        this.isBusinessClass = builder.isBusinessClass || false;
    }

    toString() {
        JSON.stringify(this);
    }
}

module.exports = Car;