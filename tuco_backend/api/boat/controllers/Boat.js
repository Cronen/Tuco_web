'use strict';

/**
 * Boat.js controller
 *
 * @description: A set of functions called "actions" for managing `Boat`.
 */

module.exports = {

  /**
   * Retrieve boat records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.boat.search(ctx.query);
    } else {
      return strapi.services.boat.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a boat record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.boat.fetch(ctx.params);
  },

  /**
   * Count boat records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.boat.count(ctx.query);
  },

  /**
   * Create a/an boat record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.boat.add(ctx.request.body);
  },

  /**
   * Update a/an boat record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.boat.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an boat record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.boat.remove(ctx.params);
  }
};
