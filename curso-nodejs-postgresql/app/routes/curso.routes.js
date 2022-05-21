module.exports = app => {
    const cursos = require("../controllers/curso.controller.js");
    var router = require("express").Router();
    // Criar um novo curso
    router.post("/", cursos.create);
    // Recuperar todos os cursos
    router.get("/", cursos.findAll);
    // Recuperar um único curso com id
    router.get("/:id", cursos.findOne);
    // Atualizar um curso com id
    router.put("/:id", cursos.update);
    // Excluir um curso com id
    router.delete("/:id", cursos.delete);
    // Excluir todos os cursos
    router.delete("/", cursos.deleteAll);
    app.use('/api/cursos', router);
}