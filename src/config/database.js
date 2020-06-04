module.exports = {
    dialect: 'postgres', // ruby.db.elephantsql.com - nuvem
    host: 'localhost', // 
    username: 'postgres', // 'arivaqxt' - nuvem
    password: '12345', // '5D_VaKVptmJwojKem6Slo96BILm3jBKl' - nuvem
    database: 'postgres',
    //database: 'postgres://arivaqxt:5D_VaKVptmJwojKem6Slo96BILm3jBKl@ruby.db.elephantsql.com:5432/arivaqxt', // nuvem
    define: {
        timestamps: true, // creatAt, updated_at
        underscored: true, // Snake case
    },
};

