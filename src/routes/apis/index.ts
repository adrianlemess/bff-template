import * as express from 'express';
import helloWorldRouter from './hello-world';

const router = express.Router();

router.use('/hello-world', helloWorldRouter);

export default router;