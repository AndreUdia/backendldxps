module.exports = {
    dialect: 'postgres', // ruby.db.elephantsql.com - nuvem
    host: 'localhost', // 
    username: 'postgres', // 'arivaqxt' - nuvem
    password: 'Postgres2018!', // '5D_VaKVptmJwojKem6Slo96BILm3jBKl' - nuvem
    database: 'sqlnode',
    //database: 'postgres://arivaqxt:5D_VaKVptmJwojKem6Slo96BILm3jBKl@ruby.db.elephantsql.com:5432/arivaqxt', // nuvem
    define: {
        timestamps: true, // creatAt, updated_at
        underscored: true, // Snake case
    },
};

