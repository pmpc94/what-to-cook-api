'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Process extends Model {

    recipy() {
        return this.belongsTo('App/Models/Recipy')
    }

    descriptions() {
        return this.belongsTo('App/Models/Description')
    }

    ingredients() {
        return this.belongsTo('App/Models/Ingredient')
    }
}

module.exports = Process
