var assert = require("assert");

var Usuario = require("../../api/models/UsuarioModel.js");
var cpfValido = "81627934022";

beforeEach("Setting up the userList", () => {
    
});

describe("Para testar os acessos básicos ao objeto usuário", () => {
    var usuario;

    beforeEach("Configura um usuário para ser testado", () => {
        usuario = new Usuario("marcus", "marcus@contagem.bh", "usuario", "senha", cpfValido, true, true);
    });
    
    it("deve verificar o acesso ao nome dele", () => {
        assert.equal(usuario.nome, "marcus");
    });

    it("deve verificar o acesso ao email dele", () => {
        assert.equal(usuario.email, "marcus@contagem.bh");
    });

    it("deve verificar o acesso ao nomde de usuario dele", () => {
        assert.equal(usuario.usuario, "usuario");
    });

    it("deve verificar o acesso a senha dele", () => {
        assert.equal(usuario.senha, "senha");
    });

    it("deve verificar o acesso ao cpf dele", () => {
        assert.equal(usuario.cpf, cpfValido);
    });

    it("deve validar que o usuário é um administrador", () => {
        assert.equal(usuario.isAdmin, true);
    });

    it("deve validar que esse usuário não é um administrador", () => {
        let usuarioNaoAdmin = usuario = new Usuario("marcus", "marcus@contagem.bh", "usuario", "senha", "11111111111", false, true);
        assert.equal(usuario.isAdmin, false);
    });

    it("deve validar que o usuário está ativo", () => {
        assert.equal(usuario.ativo, true);
    });

    it("deve validar que esse usuário não está ativo", () => {
        let usuarioNaoAtivo = usuario = new Usuario("marcus", "marcus@contagem.bh", "usuario", "senha", "11111111111", true, false);
        assert.equal(usuario.ativo, false);
    });

    it("deve garantir que a propriedade 'ativo' não pode ser alterada se ela estiver falsa", () => {
        assert.throws(() => usuario.ativo = false, Error);
    });
});

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




