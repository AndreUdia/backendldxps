module.exports = {
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'Postgres2018!',
    database: 'sqlnode',
    //database: 'postgres://arivaqxt:5D_VaKVptmJwojKem6Slo96BILm3jBKl@ruby.db.elephantsql.com:5432/arivaqxt', // nuvem
    define: {
        timestamps: true, // creatAt, updated_at
        underscored: true, // Snake case
    },
};

