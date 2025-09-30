import { Router, Application, Request, Response, NextFunction } from 'express';
import { DataController } from '../controllers/data.controller';

const router = Router();
const dataController = new DataController();

const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error('Global error:', err);
    res.status(500).json({
        success: false,
        message: 'Internal server error'
    });
};

export function setRoutes(app: Application): void {
    try {
        app.use('/api/data', router);
        
        router.get('/', dataController.getData.bind(dataController));
        router.post('/', dataController.postData.bind(dataController));

        app.use(errorHandler);
    } catch (error) {
        console.error('Error setting up routes:', error);
        throw error;
    }
}

