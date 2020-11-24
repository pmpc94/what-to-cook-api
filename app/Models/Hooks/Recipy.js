'use strict'

const Dashify = use('Dashify')

const Recipy = exports = module.exports = {}

Recipy.createSlugs = async (recipy) => {
  recipy.slug =   Dashify(recipy.name, { lower: true })
  } 