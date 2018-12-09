var assert = require("assert");

var Leilao = require("../../api/models/LeilaoModel.js");
var Usuario = require("../../api/models/UsuarioModel.js");
var DateHelper = require("../../api/helpers/DateHelper.js");

var dataAbertura = DateHelper.textoParaData("1981-09-24");
var dataFinalizacao = DateHelper.textoParaData("1991-09-24");
var cpfValido = "81627934022";

describe("Para testar os acessos básicos aos atributos de um leilao", () => {
    var leilao;
    var usuario;

    beforeEach("", () => {
        usuario = new Usuario("marcus", "marcus@contagem.bh", "usuario", "senha", cpfValido, true, true);
        leilao = new Leilao("leilao 1", 1000.00, true, usuario, dataAbertura, dataFinalizacao);
    });
    
    it("deve verificar o acesso ao nome do leilão", () => {
        assert.equal(leilao.nome, "leilao 1");
    });

    it("deve verificar o valor inicial", () => {
        assert.equal(leilao.valorInicial, 1000);
    });

    it("deve verificar o acesso ao usuario associado a ele", () => {
        assert.equal(leilao.usuario.nome, "marcus");
    });

    it("deve verificar o acesso a data de abertura", () => {
        assert.equal(leilao.dataAbertura, dataAbertura);
    });

    it("deve verificar o acesso a data de finalizacao", () => {
        assert.equal(leilao.dataFinalizacao, dataFinalizacao);
    });
});

describe("Para garantir que não existem inconsistencias nos dados cadastrados", () => {
    var leilao;
    var usuario;

    beforeEach("", () => {
        usuario = new Usuario("marcus", "marcus@contagem.bh", "usuario", "senha", cpfValido, true, true);
        leilao = new Leilao("leilao 1", 1000.00, true, usuario, dataAbertura, dataFinalizacao);
    });
    
    describe("é necessário garantir a obrigatoriedade de algus campos", () => {
        it("deve garantir que um nome seja fornecido para o leilão", () => {
            assert.throws(() => new new Leilao("", 1000.00, true, usuario, dataAbertura, dataFinalizacao), Error);
        });
    
        it("deve garantir que um valor inicial seja fornecido", () => {
            assert.throws(() => new new Leilao("leilao 1", null, true, usuario, dataAbertura, dataFinalizacao), Error);
        });
    
        it("deve garantir que seja informado se o item é usado", () => {
            assert.throws(() => new new Leilao("leilao 1", 1000.00, null, usuario, dataAbertura, dataFinalizacao), Error);
        });
    
        it("deve garantir que um usuário seja associado ao leilão", () => {
            assert.throws(() => new new Leilao("leilao 1", 1000.00, true, null, dataAbertura, dataFinalizacao), Error);
        });
    
        it("deve garantir que uma data de abertura para o leilão seja fornecida", () => {
            assert.throws(() => new new Leilao("leilao 1", 1000.00, true, usuario, null, dataFinalizacao), Error);
        });

        it("deve garantir que uma data de finalizacao para o leilão seja fornecida", () => {
            assert.throws(() => new new Leilao("leilao 1", 1000.00, true, usuario, dataAbertura, null), Error);
        });
    });

    it("é necessário garantir que as datas de abertura e finalização sejam consistentes", () => {
        assert.throws(() => new new Leilao("", 1000.00, true, usuario, dataFinalizacao, dataAbertura), Error);
    });
});

