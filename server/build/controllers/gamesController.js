"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GamesController {
    list(req, res) {
        //        pool.query('DESCRIBE games');
        res.json({ text: 'Listando os  jogos ...' });
    }
    getById(req, res) {
        res.json({ text: 'Obtendo o jogo [' + req.params.id + '] ...' });
    }
    create(req, res) {
        res.json({ text: 'Criando um jogo ...' });
    }
    update(req, res) {
        res.json({ text: 'Atualizando o jogo [' + req.params.id + '] ...' });
    }
    delete(req, res) {
        res.json({ text: 'Excluindo o jogo [' + req.params.id + '] ...' });
    }
}
const gamesController = new GamesController();
exports.default = gamesController;
