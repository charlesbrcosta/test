export interface User {
    id: string;
    name: string;
    email: string;
    role: 'admin' | 'user' | 'support';
    status: 'active' | 'inactive';
}

// Exemplo de utility type para criação de usuário sem ID
export type CreateUserDTO = Omit<User, 'id'>;

// Tipo Guard para validar se é admin
export const isAdmin = (user: User): user is User & {role: 'admin'} => {
    return user.role === 'admin';
}
