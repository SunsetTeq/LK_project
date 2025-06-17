export interface IRelease {
  id: number;
  version: string;
  description: string;
  file_name: string;
  md5sum: string;
  date: string;
  app: number;
}

export interface IReleasesApiResponse {
  releases: IRelease[];
}
