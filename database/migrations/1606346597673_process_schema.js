'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProcessSchema extends Schema {
  up () {
    this.create('processes', (table) => {
      table.increments()
      table.integer('recipyId').unsigned().references('id').inTable('recipies')
      table.integer('ingredientId').unsigned().references('id').inTable('ingredients')
      table.integer('descriptionId').unsigned().references('id').inTable('descriptions')
      table.string('ingredientQuality', 255).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('processes')
  }
}

module.exports = ProcessSchema
