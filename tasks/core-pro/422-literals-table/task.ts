import type { Order, Product, User } from './table-models.ts';

type ModelToEntity<T> = T extends User
  ? 'user'
  : T extends Product
    ? 'product'
    : T extends Order
      ? 'order'
      : never;

type Get<Model> = {
  [Prop in `get${Capitalize<ModelToEntity<Model>>}`]: (id: number) => Model;
};

type Update<Model> = {
  [Prop in `update${Capitalize<ModelToEntity<Model>>}`]: (
    id: number,
    update: Partial<Model>,
  ) => Model;
};

type Delete<Model> = {
  [Prop in `delete${Capitalize<ModelToEntity<Model>>}`]: (id: number) => Model;
};

export type Table<Model> = Get<Model> & Update<Model> & Delete<Model>;
