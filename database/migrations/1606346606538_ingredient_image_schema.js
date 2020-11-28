'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class IngredientImageSchema extends Schema {
  up () {
    this.create('ingredient_images', (table) => {
      table.increments()
      table.integer('ingredientId').unsigned().references('id').inTable('ingredients')
      table.string('image').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('ingredient_images')
  }
}

module.exports = IngredientImageSchema
