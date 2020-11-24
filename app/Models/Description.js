'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Description extends Model {

    processes() {
        return this.hasMany('App/Models/Process')
    }
}

module.exports = Description
