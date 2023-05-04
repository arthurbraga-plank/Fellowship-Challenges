export interface LaunchDTO {
  id: number;
  launchCode: string;
  date: string;
  success: boolean;
}

export interface CreateLaunchDTO extends Omit<LaunchDTO, "id"> {
  rocketId: number;
  crewId?: number;
}
