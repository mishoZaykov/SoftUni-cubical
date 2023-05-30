const Accessory = require('../models/Acccessory');

exports.getAll = () => Accessory.find();

exports.create = (accessoryData) => Accessory.create(accessoryData);