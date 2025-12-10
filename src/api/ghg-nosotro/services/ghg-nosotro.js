'use strict';

/**
 * ghg-nosotro service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::ghg-nosotro.ghg-nosotro');
