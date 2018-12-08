"use strict"

class UsuarioModel {
    constructor(nome, email, usuario, senha, cpf, isAdmin, ativo) {
        this._validaDadosDoUsuario(nome, email, usuario, senha, cpf)
        this._nome = nome;
        this._email = email;
        this._usuario = usuario;
        this._senha = senha;
        this._cpf = cpf;
        this._isAdmin = isAdmin;
        this._ativo = ativo;
    }

    _validaDadosDoUsuario(nome, email, usuario, senha, cpf)
    {
        if (!nome)
            throw new Error("É necessário informar um nome para o usuário");
        if (!email)
            throw new Error("É necessário informar um email para o usuário");
        if (!usuario)
            throw new Error("É necessário informar um nome de usuário");
        if (!senha)
            throw new Error("É necessário informar uma senha para o usuário");
        if (!cpf)
            throw new Error("É necessário informar um cpf para o usuário");
        if (!this._validaCPF(cpf))
            throw new Error("CPF inválido.");
    }
    
    _validaCPF(cpf) {
        let Soma = 0;
        let Resto;

        if (cpf == "00000000000") return false;
        
        for (let i=1; i<=9; i++) 
            Soma = Soma + parseInt(cpf.substring(i-1, i)) * (11 - i);
        Resto = (Soma * 10) % 11;
    
        if ((Resto == 10) || (Resto == 11))  Resto = 0;
        if (Resto != parseInt(cpf.substring(9, 10)) ) return false;
    
        Soma = 0;
        for (let i = 1; i <= 10; i++) 
            Soma = Soma + parseInt(cpf.substring(i-1, i)) * (12 - i);
        Resto = (Soma * 10) % 11;
    
        if ((Resto == 10) || (Resto == 11))  Resto = 0;
        if (Resto != parseInt(cpf.substring(10, 11) ) ) return false;

        return true;
    }

    desativar() {
        this._ativo = false;
        // TODO: persistir no banco de dados
    }

    get nome() {
        return this._nome;
    }

    get email() {
        return this._email;
    }

    get usuario() {
        return this._usuario;
    }

    get senha() {
        return this._senha;
    }

    get cpf() {
        return this._cpf;
    }

    get isAdmin() {
        return this._isAdmin;
    }

    get ativo() {
        return this._ativo;
    }

    set ativo(value) {
        throw new Error("Essa propriedade não pode ser alterada");
    }
}

module.exports = UsuarioModel;
