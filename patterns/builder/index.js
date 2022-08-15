const CarBuilder = require('./CarBuilder');

const vw = new CarBuilder('Volkswagen').setColor('gray').setModel('Golf').setEngine(2.0).setTransmission('manual').setPrice('22.000$');
const audi = new CarBuilder('Audi').setColor('white').setModel('A8').setBusinessClass().setPrice('80.000$');

console.log('CARS: \n', vw, audi);