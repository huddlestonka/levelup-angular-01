export interface BaseEntity {
  id: string | null;
  title?: string | null;
}

export interface User extends BaseEntity {
  title: string;
  role: string;
  description: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  profilePic: string;
}
