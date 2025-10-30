import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

console.log(process.env.PG_PASSWORD);
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('知识库API文档')
    .setDescription('知识库项目后端API文档')
    .setVersion('1.0')
    .addTag('cats')
    .build();
  // 创建swagger文档
  const doc = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('doc', app, doc);
  // 监听端口
  const backend_port = process.env.BACKEND_PORT ?? 3000;
  await app.listen(backend_port);

  Logger.log(`后端服务端口：0.0.0.0:${backend_port}`);
  Logger.log(`swagger文档：http://localhost:${backend_port}/doc`);
}
bootstrap();
