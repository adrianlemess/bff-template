import { Request, Response } from 'express';
import config from '../config/config';
config

class HelloWorldController {
    getHelloWorld(req: Request, res: Response) {
        console.log('teste');
        return res.send({ message: 'Hello World' })

    }
}

export default HelloWorldController;