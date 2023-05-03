import { Repository as TypeOrmRepository } from "typeorm";

export type IFindByField<T, U = T> = (
  fields?: Partial<U>,
  config?: { relations?: string[] }
) => Promise<T[]>;
export type ICreate<T, U = T> = (payload: U) => Promise<T>;
export type IUpdateById<T, U = T> = (id: string, data: U) => Promise<T>;
export type IDeleteById = (id: string) => Promise<boolean>;

export function makeCreate<Entity>(
  repository: TypeOrmRepository<Entity>
): ICreate<Entity> {
  return async function create(payload) {
    let k = 10;
    const created = repository.create(payload as any);
    return repository.save(created) as Entity;
  };
}

export function makeUpdateById<BaseEntity>(
  repository: TypeOrmRepository<BaseEntity>
): IUpdateById<BaseEntity> {
  return async function updateById(id, entity) {
    const data = await repository.findOneBy({
      id,
    } as any);
    if (!data) throw new Error("Entity not found");
    const updated = repository.merge(data, entity as any);
    return repository.save(updated) as BaseEntity;
  };
}

export function makeDeleteById<BaseEntity>(
  repository: TypeOrmRepository<BaseEntity>
): IDeleteById {
  return async function deleteById(id: string) {
    const entity = await repository.findOneBy({ id } as any);
    if (!entity) return false;
  };
}

export const makeFindByField =
  <BaseEntity>(
    repository: TypeOrmRepository<BaseEntity>
  ): IFindByField<BaseEntity> =>
  async (fields, config) => {
    const { relations } = config ?? {};
    return repository.findBy({ ...fields, relations } as any);
  };

export interface ICrudRepository<BaseEntity, CreateDTO = BaseEntity> {
  findByField: IFindByField<BaseEntity>;
  create: ICreate<BaseEntity, CreateDTO>;
  updateById: IUpdateById<BaseEntity, Partial<Omit<BaseEntity, "id">>>;
  deleteById: IDeleteById;
}

export class CrudRepository<BaseEntity> implements ICrudRepository<BaseEntity> {
  protected repository: TypeOrmRepository<BaseEntity>;

  findByField: IFindByField<BaseEntity>;
  create: ICreate<BaseEntity>;
  updateById: IUpdateById<BaseEntity, Partial<Omit<BaseEntity, "id">>>;
  deleteById: IDeleteById;

  constructor(repository: TypeOrmRepository<BaseEntity>) {
    this.repository = repository;
    this.findByField = makeFindByField(repository);
    this.create = makeCreate(repository);
    this.updateById = makeUpdateById(repository);
    this.deleteById = makeDeleteById(repository);
  }
}
