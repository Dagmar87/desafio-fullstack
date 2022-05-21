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
            field: 'horarioInicio'
        },
        horarioFim: {
            type: Sequelize.TIME,
            defaultValue: '00:00',
            field: 'horarioFim'
        },
    });
    return Curso;
}