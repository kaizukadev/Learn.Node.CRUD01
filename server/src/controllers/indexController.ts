import {Request, Response} from 'express';

class IndexController {
    public index (req: Request, res: Response) {
        res.send('Hello! This is a message from Sérgio!<br>Gatcho ama a Gatcha!');
    }
    
}

export const indexController = new IndexController();