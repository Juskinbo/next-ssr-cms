'use strict';
const { removeAttrsAndId, removeTime } = require('../../../utils/index.js')
/**
 * layout controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::layout.layout', ({ strapi }) => ({
  async find(ctx) {
    ctx.query = {
      ...ctx.query,
      populate: "deep",
    };
    const { data } = await super.find(ctx);
    return removeTime(data[0]);
  },
}));
