var assert = require("assert");

var Lance = require("../../api/models/LanceModel.js");
var Leilao = require("../../api/models/LeilaoModel.js");
var Usuario = require("../../api/models/UsuarioModel.js");
var DateHelper = require("../../api/helpers/DateHelper.js");

var dataAbertura = DateHelper.textoParaData("1981-09-24");
var dataFinalizacao = DateHelper.textoParaData("1991-09-24");
var cpfValido = "81627934022";

describe("Para testar os atributos básicos do objeto Lance", () => {
    var leilao;
    var usuario;
    var lance;

    beforeEach("configura setup inicial", () => {
        usuario = new Usuario("marcus", "marcus@contagem.bh", "usuario", "senha", cpfValido, true, true);
        leilao = new Leilao("leilao 1", 1000.00, true, usuario, dataAbertura, dataFinalizacao);
        lance = new Lance(leilao, usuario, 1000.00);
    });
    
    it("deve verificar o acesso ao leilão associado a ele", () => {
        assert.equal(lance.leilao.nome, "leilao 1");
    });

    it("deve verificar o acesso ao usuário que fez o lance", () => {
        assert.equal(lance.usuario.nome, "marcus");
    });

    it("deve verificar o acesso ao valor lance", () => {
        assert.equal(lance.valor, 1000);
    });
});
/*
describe("Para garantir que os usuários cadastrados no sistema terão CPFs válidos", () => {
    it("o sistema deve garantir que esse usuário pode ser criado porque seu CPF é válido", () => {
        let usuario = new Usuario("marcus", "marcus@contagem.bh", "usuario", "senha", cpfValido, true, true);
        assert.equal(usuario.cpf, cpfValido);
    });

    it("o sistema não deve deixar esse usuário ser criado porque o CPF dele não é válido", () => {
        assert.throws(() => new Usuario("marcus", "marcus@contagem.bh", "usuario", "senha", "00000000000", true, true), Error);
    });
});

describe("Para validar que os dados cadastrais dos usuários são obrigatórios", () => {
    it("deve garantir que um nome seja fornecido", () => {
        assert.throws(() => new Usuario("", "marcus@contagem.bh", "usuario", "senha", cpfValido, true, true), Error);
    });

    it("deve garantir que um email seja fornecido", () => {
        assert.throws(() => new Usuario("marcus", "", "usuario", "senha", cpfValido, true, true), Error);
    });

    it("deve garantir que um nome de usuário seja fornecido", () => {
        assert.throws(() => new Usuario("marcus", "marcus@contagem.bh", "", "senha", cpfValido, true, true), Error);
    });

    it("deve garantir que uma senha seja fornecido", () => {
        assert.throws(() => new Usuario("marcus", "marcus@contagem.bh", "usuario", "", cpfValido, true, true), Error);
    });

    it("deve garantir que um cpf seja fornecido", () => {
        assert.throws(() => new Usuario("marcus", "marcus@contagem.bh", "usuario", "senha", null, true, true), Error);
    });
});

describe("Quando um usuário for excluído", () => {
    it("o status de ativo dele deve ficar falso", () => {
        usuario = new Usuario("marcus", "marcus@contagem.bh", "usuario", "senha", cpfValido, true, true);
        assert.equal(usuario.ativo, true);
        usuario.desativar();
        assert.equal(usuario.ativo, false);
    });
});

*/


