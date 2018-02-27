import LocalConfig from './connection.local';

const development = {
  database: LocalConfig.development.database || 'delivergames_api',
  username: LocalConfig.development.username || 'root',
  password: LocalConfig.development.password || '',
  host: LocalConfig.development.host || 'localhost',
  dialect: LocalConfig.development.dialect || 'mysql',
};

const testing = {
  database: LocalConfig.testing.database || 'databasename',
  username: LocalConfig.testing.username || 'username',
  password: LocalConfig.testing.password || 'password',
  host: LocalConfig.testing.host || 'localhost',
  dialect: LocalConfig.testing.dialect || 'mysql',
};

const production = {
  database: LocalConfig.production.database || process.env.DB_NAME,
  username: LocalConfig.production.username || process.env.DB_USER,
  password: LocalConfig.production.password || process.env.DB_PASS,
  host: LocalConfig.production.host || process.env.DB_HOST || 'localhost',
  dialect: LocalConfig.production.dialect || 'mysql',
};

module.exports = {
  development,
  testing,
  production,
};
