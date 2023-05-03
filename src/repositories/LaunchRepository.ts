import { Repository as TypeOrmRepository } from "typeorm";
import { CreateLaunchDTO, LaunchDTO } from "../interfaces/launch";
import {
  ICrudRepository,
  IDeleteById,
  IFindByField,
  IUpdateById,
  makeDeleteById,
  makeFindByField,
  makeUpdateById
} from "./CrudRepository";

export class LaunchRepository
  implements ICrudRepository<LaunchDTO, CreateLaunchDTO>
{
  protected repository: TypeOrmRepository<LaunchDTO>;

  findByField: IFindByField<LaunchDTO>;
  updateById: IUpdateById<LaunchDTO, Partial<Omit<LaunchDTO, "id">>>;
  deleteById: IDeleteById;

  constructor(repository: TypeOrmRepository<LaunchDTO>) {
    this.repository = repository;
    this.findByField = makeFindByField<LaunchDTO>(repository);
    this.updateById = makeUpdateById<LaunchDTO>(repository);
    this.deleteById = makeDeleteById<LaunchDTO>(repository);
  }

  async create(payload: CreateLaunchDTO): Promise<LaunchDTO> {
    const { rocketId, crewId, ...rest } = payload;
    const launch = {
      ...rest,
      rocket: rocketId,
      crew: crewId,
    };
    
    const created = this.repository.create(launch);
    return this.repository.save(created);
  }
}
