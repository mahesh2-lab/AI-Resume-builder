'use strict';

/**
 * airusume service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::airusume.airusume');
