'use strict';
const { removeAttrsAndId, removeTime } = require('../../../utils/index.js')
/**
 * artlist controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::artlist.artlist', ({ strapi }) => ({
  async find(ctx) {
    ctx.query = {
      ...ctx.query,
      populate: "deep",
    };
    const { data } = await super.find(ctx);
    return removeAttrsAndId(removeTime(data[0]));
  },
}));
