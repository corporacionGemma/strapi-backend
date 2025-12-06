'use strict';

/**
 * ghg-general service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::ghg-general.ghg-general');
