module.exports = {
    dialect: 'mysql',
    host: 'localhost',
    username: 'root',
    password: '9932',
    database: 'bd_lasoparia',
    define: {
        timestamps: true,
        underscored: true,
        underscoredAll: true,
    },
    dialectOptions: {
        useUTC: false,
        dateStrings: true,
        typeCast: true,
        timezone: "-03:00"
      },
    timezone: "-03:00"
};