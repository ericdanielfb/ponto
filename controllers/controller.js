let Smartphone = require('../models/model');

exports.test = function (req, res) {
    res.send('Teste ao CONTROLLER');
}

exports.create = function (req, res) {
    let smartphone = new Smartphone({
        nome: req.body.nome,
        marca: req.body.marca
    });
    smartphone.save(err => {
        if (err) {
            // console.log(err);
            return;
        }
        res.send('Registro de smartphone criado com sucesso');
    })
};

exports.details = function (req, res) {
    Smartphone.findById(req.params.id, (err, smartphone) => {
        if (err) {
            console.log(err);
            return;
        }
        res.send(smartphone);
    })
};

exports.update = function (req, res) {
    Smartphone.findOneAndUpdate(req.params.id, { $set: req.body }, (err, smartphone) => {
        if (err) console.log(err);
        res.send('Smartphone atualizado');
    });
};

exports.delete = function (req, res){
    Smartphone.findOneAndDelete(req.params.id, (err) => {
        if (err) console.log(err);
        res.send("Smartphone deletado");
    });
};

