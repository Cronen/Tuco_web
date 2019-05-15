'use strict';

/**
 * Promovideo.js controller
 *
 * @description: A set of functions called "actions" for managing `Promovideo`.
 */

module.exports = {

  /**
   * Retrieve promovideo records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.promovideo.search(ctx.query);
    } else {
      return strapi.services.promovideo.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a promovideo record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.promovideo.fetch(ctx.params);
  },

  /**
   * Count promovideo records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.promovideo.count(ctx.query);
  },

  /**
   * Create a/an promovideo record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.promovideo.add(ctx.request.body);
  },

  /**
   * Update a/an promovideo record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.promovideo.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an promovideo record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.promovideo.remove(ctx.params);
  }
};
