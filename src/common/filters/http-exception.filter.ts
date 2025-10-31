//异常过滤器

import { Catch, ExceptionFilter, HttpException } from '@nestjs/common';
import { ArgumentsHost } from '@nestjs/common/interfaces/features/arguments-host.interface';
import { Request, Response } from 'express';

@Catch(HttpException)
//声明HttpExceptionFilter是ExceptionFilter的一个实例，异常过滤器
export class HttpExceptionFilter implements ExceptionFilter {
  //HttpException类型捕获异常，ArgumentsHost是一个上下文对象，可以用来获取请求和响应对象
  catch(exception: HttpException, host: ArgumentsHost) {
    //将ArgumentsHost转换为HTTP上下文（ArgumentHost不进行转换可以表示HTTP、WebSocket、RPC）
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    //获取异常的HTTP状态码，code
    const status = exception.getStatus();

    response.status(status).json({
      statusCode: status,
      timestamp: new Date().toISOString(),
      path: request.url,
    });
  }
}
