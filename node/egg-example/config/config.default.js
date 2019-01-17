'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1547624926060_4023';
  config.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.tpl': 'nunjucks'
    }
  } 

  config.sequelize = {
    dialect: 'mysql',
    host: '127.0.0.1',
    port: 33306,
    database: 'egg-sequelize-doc-default'
  };

  

  // add your config here
  config.middleware = [];

  return config;
};
