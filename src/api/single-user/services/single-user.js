'use strict';

/**
 * single-user service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::single-user.single-user');
