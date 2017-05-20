export interface IUser {
  id?: number;
  name?: string;
  email: string;
  password: string;
  connected?: boolean;
}

export class User implements IUser{
  constructor(
    public email: string,
    public password: string,
  ) {  }
}
