export interface DataRequest {
    id: string;
    value: any;
}

export interface DataResponse {
    success: boolean;
    message: string;
    data?: any;
}