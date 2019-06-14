"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class IndexController {
    index(req, res) {
        res.send('Hello! This is a message from Sérgio!<br>Gatcho ama a Gatcha!');
    }
}
exports.indexController = new IndexController();
