export class errorHandler extends Error{
    statusCode: number;
    
    constructor(public message:string,statusCode: number){
         super(message);
        this.statusCode = statusCode;
        
    }
}