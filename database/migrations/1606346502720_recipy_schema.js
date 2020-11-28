'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class RecipySchema extends Schema {
  up () {
    this.create('recipies', (table) => {
      table.increments()
      table.string('name', 100).notNullable().unique()
      table.string('slug', 255).notNullable()
      table.string('description', 255)
      table.enum('type', ['meat', 'fish', 'vegan', 'vegetarian'])
      table.enum('subType', ['pork', 'cow', 'sardine', 'salmon', 'eggs'])
      table.string('country', 100).notNullable()
      table.integer('user_id').unsigned().references('users.id')
      table.timestamps()
    })
  }

  down () {
    this.drop('recipies')
  }
}

module.exports = RecipySchema
