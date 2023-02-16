'use strict';

/**
 * sysinfo service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::sysinfo.sysinfo');
