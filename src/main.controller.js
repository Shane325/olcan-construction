'use strict'

/**
 * Module dependencies
 *
 */
let config = require('./config/config')
let commonConfig = require('./config/common')
let homeConfig = require('./config/home')
let aboutConfig = require('./config/about')
let servicesConfig = require('./config/services')
let projectsConfig = require('./config/projects')
// let projectConfig = require('./config/project')
let contactConfig = require('./config/contact')
// let HttpStatus = require('http-status-codes')
// let MAILGUN_API_KEY = config.mailgun.api_key
// let MAILGUN_DOMAIN = config.mailgun.domain
// let MAILGUN_EMAIL = config.mailgun.email
// let mailgun = require('mailgun-js')({
//   apiKey: MAILGUN_API_KEY,
//   domain: MAILGUN_DOMAIN
// })

/**
 * Return home page
 *
 * @returns - renders home page
 */
module.exports.getHome = (req, res) => {
  res.render('../views/pages/index', {
    css: config.lib.css,
    js: config.lib.js,
    common: commonConfig,
    title: homeConfig.title,
    state: homeConfig.state
  })
}

/**
 * Return about page
 *
 * @returns - renders about page
 */
module.exports.getAbout = (req, res) => {
  res.render('../views/pages/about', {
    css: config.lib.css,
    js: config.lib.js,
    common: commonConfig,
    title: aboutConfig.title,
    state: aboutConfig.state,
    description: aboutConfig.description
  })
}

/**
 * Return services page
 *
 * @returns - renders services page
 */
module.exports.getServices = (req, res) => {
  res.render('../views/pages/services', {
    css: config.lib.css,
    js: config.lib.js,
    common: commonConfig,
    title: servicesConfig.title,
    state: servicesConfig.state,
    description: servicesConfig.description
  })
}

/**
 * Return projects page
 *
 * @returns - renders projects page
 */
module.exports.getProjects = (req, res) => {
  res.render('../views/pages/projects', {
    css: config.lib.css,
    js: config.lib.js,
    common: commonConfig,
    title: projectsConfig.title,
    state: projectsConfig.state,
    description: projectsConfig.description,
    projects: projectsConfig.projects
  })
}

/**
 * Return project page
 *
 * @returns - renders project page
 */
module.exports.getProject = (req, res) => {
  res.render('../views/pages/project', {
    css: config.lib.css,
    js: config.lib.js,
    common: commonConfig
  })
}

/**
 * Returns contact page
 *
 * @returns - renders contact page
 */
module.exports.getContact = (req, res) => {
  res.render('../views/pages/contact', {
    css: config.lib.css,
    js: config.lib.js,
    common: commonConfig,
    title: contactConfig.title,
    state: contactConfig.state,
    description: contactConfig.description
  })
}

/**
 * Send contact email
 *
 */
// module.exports.sendContactEmail = (req, res, next) => {
//   var data = {
//     from: req.body.email,
//     to: MAILGUN_EMAIL,
//     subject: req.body.name + ' sent a message from www.kearneyplumbinginc.com',
//     text: req.body.message
//   }

//   mailgun.messages().send(data, (error, body) => {
//     if (error) {
//       return next(error)
//     }

//     res.status(HttpStatus.OK)
//     res.send('ok')
//   })
// }
