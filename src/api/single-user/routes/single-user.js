'use strict';

/**
 * single-user router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::single-user.single-user');
