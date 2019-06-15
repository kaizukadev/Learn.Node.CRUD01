import {Request, Response} from 'express';
import pool from '../database';

class GamesController {

    public list (req: Request, res: Response) {
//        pool.query('DESCRIBE games');
    res.json({text: 'Listando os  jogos ...'});
    }

    public getById (req: Request, res: Response) {
        res.json({text: 'Obtendo o jogo [' + req.params.id + '] ...'});
    }

    public create (req: Request, res: Response) {
        res.json({text: 'Criando um jogo ...'});
    }
    
    public update (req: Request, res: Response) {
        res.json({text: 'Atualizando o jogo [' + req.params.id + '] ...'});
    }

    public delete (req: Request, res: Response) {
        res.json({text: 'Excluindo o jogo [' + req.params.id + '] ...'});
    }
    
}

const gamesController = new GamesController();
export default gamesController;
