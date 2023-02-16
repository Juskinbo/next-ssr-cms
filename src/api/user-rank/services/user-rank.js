'use strict';

/**
 * user-rank service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::user-rank.user-rank');
