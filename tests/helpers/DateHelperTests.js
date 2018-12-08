var assert = require("assert");

var DateHelper = require("../../api/helpers/DateHelper.js");

describe("Para garantir que sejam criadas instâncias do DateHelper", () => {
    it("deve garantir que seu construtor não pode ser chamado com new", () => {
        assert.throws(() => new DateHelper(), Error);
    });
});

describe("Para poder trabalhar com datas no formato de texto", () => {
    it("a classe deve ser capaz de criar objetos Date quando uma string for passada no padrão esperado", () => {
        let date = DateHelper.textoParaData("1993-07-07");
        assert.equal(DateHelper.dataParaTexto(date), "7/7/1993");
    });

    it("a classe deve lançar uma exceção se uma string não for passada no padrão esperado", () => {
        assert.throws(() => DateHelper.dataParaTexto("07/07/1993"), Error);
    });
});

describe("Para que as datas possam ser exibidas aos usuários finais", () => {
    it("o DateHelper deve permitir imprimir uma data no formato texto", () => {
        let date = new Date(1991, 5, 5);
        assert.equal(DateHelper.dataParaTexto(date), "5/6/1991");
    });
});

