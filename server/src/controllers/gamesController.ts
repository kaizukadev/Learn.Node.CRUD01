import {Request, Response} from 'express';
import pool from '../database';

class GamesController {

    public async list (req: Request, res: Response) {
        const games = await pool.query('SELECT * FROM games');
        res.json(games);
    }

    public async getById (req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const games = await pool.query('SELECT * FROM games WHERE id = ?', [id]);
        if (games.length > 0 ) {
            return res.json(games[0]);
        }
        res.status(404).json({text: 'Jogo com código [' + id + '] não existe!'});
     }

    public async create (req: Request, res: Response): Promise<void> {
        await pool.query('INSERT INTO games SET ?', [req.body]);
        res.json({message: 'Jogo adicionado!'});
    }
    
    public update1 (req: Request, res: Response) {
        res.json({text: 'Atualizando o jogo [' + req.params.id + '] ...'});
    }

    public async update (req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('UPDATE games SET ? WHERE id = ?', [req.body, id]);
        res.json({message: 'O jogo com código [' + id + '] foi atualizado!'});
    }

    public async delete (req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM games WHERE id = ?', [id]);
        res.json({message: 'O jogo com código [' + id + '] foi excluído!'});
    }

}

const gamesController = new GamesController();
export default gamesController;
