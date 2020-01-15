import * as express from 'express';
import HelloWorldController from '../../controllers/hello-world.controller';

const router = express.Router();
const helloWorldController = new HelloWorldController();

router.get('/', (req, res) => helloWorldController.getHelloWorld(req, res));

export default router;