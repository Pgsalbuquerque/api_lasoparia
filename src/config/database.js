module.exports = {
    dialect: 'mysql',
    host: 'us-cdbr-east-02.cleardb.com',
    username: 'bf21245529b332',
    password: 'fea765e8',
    database: 'heroku_d243cd783b0fe6e',
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