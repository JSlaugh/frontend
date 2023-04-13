import { Role } from './role';

export type User = {
  id: number;
  firstName: string;
  email: string;
  password: string;
  roleId: number;
  role: Role;
};
