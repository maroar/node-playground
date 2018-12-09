"use strict"

class LanceModel {
    constructor(leilao, usuario, valor) {
        this._validaDadosDoLance(leilao, usuario, valor)
        this._leilao = leilao;
        this._usuario = usuario;
        this._valor = valor;
    }

    _validaDadosDoLance(leilao, usuario, valor)
    {
        if (!leilao)
            throw new Error("É necessário associar o lance à um leilão.");
        if (!usuario)
            throw new Error("É necessário associar o lance à um usuário.");
        if (!this._validaValor(valor))
            throw new Error("Valor inválido.");
    }
    
    _validaValor(valor) {
        return valor > 0;
    }

    get leilao() {
        return this._leilao;
    }

    get usuario() {
        return this._usuario;
    }

    get valor() {
        return this._valor;
    }
}

module.exports = LanceModel;
