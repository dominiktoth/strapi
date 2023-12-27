'use strict';

/**
 * fooldal service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::fooldal.fooldal');
