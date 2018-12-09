'use strict';

const Usuario = require("../models/UsuarioModel.js");

exports.list_all = function(req, res) {
    Usuario.all((err, data) => {
        res.render('UsuarioView', {title:"Usuários", usuarios:data});
    });
};

exports.create = function(req, res) {
    Usuario.insere(req.body.usuario, (err, data) => {
        res.render('UsuarioView', {title:"Usuários", usuarios:data});
    });
};

exports.read = function(req, res) {
    res.json({res:`read ${req.params.usuarioId}`});
};

exports.update = function(req, res) {
    res.json({res:"update"});
};

exports.delete = function(req, res) {
    res.json({res:"remove"});
    // Usuario.remove(req.body.id, (err, data) => {
    //     res.render('UsuarioView', {title:"Usuários", usuarios:data});
    // });
};

