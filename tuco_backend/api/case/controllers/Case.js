'use strict';

/**
 * Case.js controller
 *
 * @description: A set of functions called "actions" for managing `Case`.
 */

module.exports = {

  /**
   * Retrieve case records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.case.search(ctx.query);
    } else {
      return strapi.services.case.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a case record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.case.fetch(ctx.params);
  },

  /**
   * Count case records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.case.count(ctx.query);
  },

  /**
   * Create a/an case record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.case.add(ctx.request.body);
  },

  /**
   * Update a/an case record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.case.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an case record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.case.remove(ctx.params);
  }
};
