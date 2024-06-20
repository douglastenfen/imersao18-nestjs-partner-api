import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpStatus,
} from '@nestjs/common';
import { Response } from 'express';

@Catch()
export class ReservationExceptionFilter implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    console.log(exception);

    if (exception.message.includes('Spots not exists')) {
      response.status(HttpStatus.NOT_FOUND).json({
        message: exception.message,
      });
    } else if (exception.message.includes('is not available for reservation')) {
      response.status(HttpStatus.BAD_REQUEST).json({
        message: exception.message,
      });
    } else if (exception.message.includes('Unprocessable Entity')) {
      response.status(HttpStatus.UNPROCESSABLE_ENTITY).json({
        message: exception.response.message.map((error) => error).join(', '),
      });
    } else {
      response.status(HttpStatus.BAD_REQUEST).json({
        message: exception.message,
      });
    }
  }
}
