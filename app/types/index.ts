export enum Role {
    ADMIN = "ADMIN",
    MANAGER = "MANAGER",
    USER = "USER",
    GUEST = "GUEST",
}

export interface User {
    id: string;
    name: string;
    email: string;
    role: Role;
    teamId?: string; // could be user not assign to anything
    team?: Team;
    createdAt: Date;
    updatedAt: Date;
}

export interface Team {
    id: string;
    name: string;
    desciption?: string | null;
    code: string;
    members: User[];
    createdAt: Date;
    updatedAt: Date;
}