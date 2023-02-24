'use strict';
const { removeTime, solveNestedLabels } = require('../../../utils')
/**
 * artinfo controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::artinfo.artinfo', ({ strapi }) => ({
  async find(ctx) {
    ctx.query = {
      ...ctx.query,
      populate: "deep",
    };
    const { data } = await super.find(ctx);
    return solveNestedLabels(removeTime(data));
  }
}));
