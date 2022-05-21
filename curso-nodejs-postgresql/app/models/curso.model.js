module.exports = (sequelize, Sequelize) => {
    const Curso = sequelize.define("curso", {
        nome: {
            type: Sequelize.STRING
        },
        professor: {
            type: Sequelize.STRING
        },
        sala: {
            type: Sequelize.INTEGER
        },
        horarioInicio: {
            type: Sequelize.TIME,
            defaultValue: '00:00',
            field: 'hour'
        },
        horarioFim: {
            type: Sequelize.TIME,
            defaultValue: '00:00',
            field: 'hour'
        },
    });
    return Curso;
}