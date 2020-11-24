'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Recipy extends Model {

    static boot() {
        this.addHook('beforeSave', 'Recipy.createSlugs')
    }

    processes() {
        return this.hasMany('App/Models/Process')
    }
}

module.exports = Recipy
