'use strict';

/**
 * ghg-home service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::ghg-home.ghg-home');
