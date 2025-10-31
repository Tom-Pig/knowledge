import { Injectable } from '@nestjs/common';
import {
  PipeTransform,
  ArgumentMetadata,
} from '@nestjs/common/interfaces/features/pipe-transform.interface';

@Injectable()
//声明一个PipeTransform的实例，名叫ReturnValue的自定义管道
export class ReturnValue implements PipeTransform {
  //value：被处理的值，不论value设置成何种类型，value都会得到数据，只不过传入数据类型不为value的类型时，ts会报错
  // metadata：元数据（包含类型、数据类型等信息）
  transform(value: any, metadata: ArgumentMetadata) {
    //metadata.type指定参数类型，可以是body、query、param、custom等
    //metadata.metatype指定参数的数据类型
    //metadata.data指定参数的名称
    return `${value} | type: ${metadata.type} | metatype: ${metadata.metatype?.name} | data: ${metadata.data}`;
  }
}
