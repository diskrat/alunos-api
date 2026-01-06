require('dotenv').config();

module.exports = {
  dialect: 'mariadb',
  database: process.env.DB,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  dialectOptions: {
    timezone: 'America/Sao_Paulo',
  },
  timezone: 'America/Sao_Paulo',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
