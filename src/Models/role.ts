import { User } from './user';

export type Role = {
  id: number;
  roleName: string;
  users: User[];
};
