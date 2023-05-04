export interface CrewDTO {
  id: number;
  name: string;
}

export interface CreateCrewDTO extends Omit<CrewDTO, "id"> {
  crewManIds: number[];
}