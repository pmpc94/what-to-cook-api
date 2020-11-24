'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Ingredient extends Model {

    processes() {
        return this.hasMany('App/Models/Process')
    }

    images() {
        return this.hasMany('App/Models/IngredientImage')
    }
}

module.exports = Ingredient
