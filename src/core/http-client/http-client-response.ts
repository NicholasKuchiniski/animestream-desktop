import { plainToClass } from "class-transformer";
import get from "lodash/get";

import { ClassType } from "#/core/http-client/class-type";

export class HttpClientResponse {
  public constructor(private readonly data: unknown) {}

  public getCollection<TResponse, TCollectionResponse>(
    DataType: ClassType<TResponse>,
    CollectionDataType: ClassType<TCollectionResponse>,
    path?: string,
  ): TCollectionResponse {
    const data = this.getArrayData(DataType, path);

    return new CollectionDataType(...data);
  }

  public getData<TResponse>(DataType: ClassType<TResponse>, path?: string): TResponse {
    const data = path ? get(this.data, path, this.data) : this.data;
    return plainToClass(DataType, data);
  }

  public getArrayData<TResponse>(DataType: ClassType<TResponse>, path?: string): TResponse[] {
    const data = path ? get(this.data, path, this.data) : this.data;
    return plainToClass(DataType, data as unknown[]);
  }

  public getRawData<T = any>(): T {
    return this.data as T;
  }
}
