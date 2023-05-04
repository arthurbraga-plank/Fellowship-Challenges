import { In, Repository as TypeOrmRepository } from "typeorm";

type Options = {
  relations?: string[];
};

export type IFindAll<T> = (options?: Options) => Promise<T[]>;
export type IFindByField<T, U = T> = (
  fields: Partial<U>,
  options?: Options
) => Promise<T[]>;
export type ICreate<T, U = T> = (payload: U) => Promise<T>;
export type IUpdateById<T, U = T> = (id: number, data: U) => Promise<T>;
export type IDeleteById = (id: number) => Promise<boolean>;
export type IFindByIds<T> = (ids: number[]) => Promise<T[]>;
export interface ICrudRepository<BaseEntity, CreateDTO = BaseEntity> {
  findAll: IFindAll<BaseEntity>;
  findByField: IFindByField<BaseEntity>;
  create: ICreate<BaseEntity, CreateDTO>;
  updateById: IUpdateById<BaseEntity, Partial<Omit<BaseEntity, "id">>>;
  deleteById: IDeleteById;
  findByIds: IFindByIds<BaseEntity>;
}

export function makeCrudRepository<BaseEntity>(
  repository: TypeOrmRepository<BaseEntity>
): ICrudRepository<BaseEntity> {
  return {
    findByField: (fields, config) => {
      const { relations } = config ?? {};
      return repository.find({ ...fields, relations });
    },

    create: (payload) => {
      const created = repository.create(payload);
      return repository.save(created);
    },

    updateById: async (id, entity) => {
      //TODO:
      const data = await repository.findOneBy({
        id,
      } as any);
      if (!data) throw new Error("Entity not found");

      const updated = repository.merge(data, entity as any);
      return repository.save(updated);
    },

    deleteById: async (id) => {
      //TODO:
      const entity = await repository.findOneBy({ id } as any);
      if (!entity) return false;
      await repository.delete({ id } as any);
      return true;
    },

    findAll: (options) => {
      const { relations } = options ?? {};
      return repository.find({ relations });
    },
    
    findByIds: (ids) => {
      return repository.findBy({ id: In(ids) } as any);
    },
  };
}
