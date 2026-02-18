import { useState, useCallback } from 'react';
import { UserCard } from './features/user/components/UserCard';
import { isAdmin, type User } from './features/types';

// Mock inicial seguindo a interface User
const MOCK_USERS: User[] = [
  { id: '1', name: 'Alice', email: 'alice@dev.com', role: 'admin', status: 'active' },
  { id: '2', name: 'Bob', email: 'bob@dev.com', role: 'user', status: 'inactive' },
];

export default function App() {
  const [users, setUsers] = useState<User[]>(MOCK_USERS);

  // Handler para atualizar o status respeitando a Imutabilidade 
  const handleUpdateStatus = useCallback((id: string, newStatus: string) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === id ? { ...user, status: newStatus as 'active' | 'inactive' } : user
      )
    );
  }, []);

  return (
    <main className="container">
      <h1>Gerenciamento de Usuários</h1>
      
      <section className="user-grid">
        {/* Renderização em Lista com Performance Optimization [cite: 19, 63] */}
        {users.map((user) => (
          <UserCard
            key={user.id}
            user={user}
            onUpdateStatus={handleUpdateStatus}
            // Exemplo de lógica condicional para Props:
            variant={isAdmin(user) ? 'highlighted' : 'default'} 
          />
        ))}
      </section>

      {/* Exemplo de Renderização Condicional  */}
      {users.length === 0 && <p>Nenhum usuário encontrado.</p>}
    </main>
  );
}