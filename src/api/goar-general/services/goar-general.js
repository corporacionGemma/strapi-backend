'use strict';

/**
 * goar-general service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::goar-general.goar-general');
