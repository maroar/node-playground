"use strict"

var DateHelper = require("../../api/helpers/DateHelper.js");

class LeilaoModel {
    constructor(nome, valorInicial, isUsado, usuario, dataAbertura, dataFinalizacao) {
        this._validaDadosDoLeilao(nome, valorInicial, isUsado, usuario, dataAbertura, dataFinalizacao)
        this._nome = nome;
        this._valorInicial = valorInicial;
        this._isUsado = isUsado;
        this._usuario = usuario;
        this._dataAbertura = dataAbertura;
        this._dataFinalizacao = dataFinalizacao;
    }

    _validaDadosDoLeilao(nome, valorInicial, isUsado, usuario, dataAbertura, dataFinalizacao)
    {
        if (!nome)
            throw new Error("É necessário informar um nome para o leilão.");
        if (!valorInicial)
            throw new Error("É necessário informar um valor inicial para o leilão.");
        if (isUsado == null)
            throw new Error("É necessário informar se o item do leilão é usado.");
        if (!usuario)
            throw new Error("É necessário informar um usuário responsável pelo leilão.");
        if (!dataAbertura)
            throw new Error("É necessário informar uma data de abertura para o leilão.");
        if (!dataFinalizacao)
            throw new Error("É necessário informar uma data de finalização para o leilão.");
        if (!this._verificaSeDataAberturaMenorQueDataFinalizacao(dataAbertura, dataFinalizacao))
            throw new Error(`Data de abertura do leilão (${DateHelper.dataParaTexto(dataAbertura)}) deve ser menor que a data de finalização (${DateHelper.dataParaTexto(dataFinalizacao)}).`);
    }
    
    _verificaSeDataAberturaMenorQueDataFinalizacao(dataAbertura, dataFinalizacao) {
        return dataAbertura < dataFinalizacao;
    }

    get nome() {
        return this._nome;
    }

    get valorInicial() {
        return this._valorInicial;
    }

    get isUsado() {
        return this._isUsado;
    }

    get usuario() {
        return this._usuario;
    }

    get dataAbertura() {
        return this._dataAbertura;
    }

    get dataFinalizacao() {
        return this._dataFinalizacao;
    }
}

module.exports = LeilaoModel;
