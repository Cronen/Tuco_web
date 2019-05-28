'use strict';

/**
 * Reviews.js controller
 *
 * @description: A set of functions called "actions" for managing `Reviews`.
 */

module.exports = {

  /**
   * Retrieve reviews records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.reviews.search(ctx.query);
    } else {
      return strapi.services.reviews.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a reviews record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.reviews.fetch(ctx.params);
  },

  /**
   * Count reviews records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.reviews.count(ctx.query);
  },

  /**
   * Create a/an reviews record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.reviews.add(ctx.request.body);
  },

  /**
   * Update a/an reviews record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.reviews.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an reviews record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.reviews.remove(ctx.params);
  }
};
