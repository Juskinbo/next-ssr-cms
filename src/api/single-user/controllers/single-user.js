'use strict';

/**
 * single-user controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::single-user.single-user');
