import { Request, Response } from 'express';

export class DataController {
    private handleError(res: Response, error: any) {
        console.error('Error:', error);
        res.status(500).json({
            success: false,
            message: "Internal server error",
            error: error.message
        });
    }

    public async getData(req: Request, res: Response): Promise<void> {
        try {
            if (!req.query) {
                res.status(400).json({
                    success: false,
                    message: "Invalid request parameters"
                });
                return;
            }
            // Logic to retrieve data
            res.status(200).json({
                success: true,
                message: "Data retrieved successfully",
                data: null
            });
        } catch (error) {
            this.handleError(res, error);
        }
    }

    public async postData(req: Request, res: Response): Promise<void> {
        try {
            if (!req.body) {
                res.status(400).json({
                    success: false,
                    message: "Request body is required"
                });
                return;
            }
            // Logic to submit data
            res.status(201).json({
                success: true,
                message: "Data submitted successfully",
                data: req.body
            });
        } catch (error) {
            this.handleError(res, error);
        }
    }
}