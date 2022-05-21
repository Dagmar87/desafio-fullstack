const db = require("../models");
const Curso = db.cursos;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  if (!req.body.nome) {
    res.status(400).send({
      message: "O conteúdo não pode ficar vazio!",
    });
    return;
  }
  const curso = {
    nome: req.body.nome,
    professor: req.body.professor,
    sala: req.body.sala,
    horarioInicio: req.body.horarioInicio,
    horarioFim: req.body.horarioFim,
  };
  Curso.create(curso)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Ocorreu algum erro ao criar o Curso.",
      });
    });
};

exports.findAll = (req, res) => {
  const nome = req.query.nome;
  var condition = nome ? { nome: { [Op.iLike]: `%${nome}%` } } : null;
  Curso.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Ocorreu algum erro ao recuperar os cursos.",
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;
  Curso.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Não é possível encontrar o Curso com id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Erro ao recuperar o Curso com id=" + id,
      });
    });
};

exports.update = (req, res) => {
  const id = req.params.id;
  Curso.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "O Curso foi atualizado com sucesso.",
        });
      } else {
        res.send({
          message: `Não é possível atualizar o Curso com id=${id}. Talvez Curso não foi encontrado ou req.body está vazio!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Erro ao atualizar o Curso com id=" + id,
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;
  Curso.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "O Curso foi excluído com sucesso!",
        });
      } else {
        res.send({
          message: `Não é possível excluir o Curso com id=${id}. Talvez o Curso não tenha sido encontrado!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Não foi possível excluir o Curso com id=" + id,
      });
    });
};

exports.deleteAll = (req, res) => {
  Curso.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} Cursos foram excluídos com sucesso!` });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Ocorreu algum erro ao remover todos os Cursos.",
      });
    });
};

