'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class IngredientImage extends Model {

    ingredients() {
        return this.belongsTo('App/Models/Ingredient')
    }
}

module.exports = IngredientImage
