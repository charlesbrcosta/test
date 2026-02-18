import React, { useMemo, useCallback } from 'react';
// Importação de Tipos (Seguindo padrão de pastas)
import type { User } from '../../types';
//teste 

// 1. Definição de Interface (PascalCase e Tipagem Estrita) 
interface UserCardProps {
  user: User;
  onUpdateStatus: (id: string, status: string) => void;
  variant?: 'default' | 'highlighted'; // Uso de Union Types
}

/**
 * Componente: UserCard
 * Responsabilidade: Exibir informações do usuário e gerenciar ações simples.
 */
export const UserCard: React.FC<UserCardProps> = ({ 
  user, 
  onUpdateStatus, 
  variant = 'default' 
}) => {
  
  // 2. Lógica Memoizada para Performance (useMemo) 
  const userSummary = useMemo(() => {
    return `${user.name} - ${user.role.toUpperCase()}`;
  }, [user.name, user.role]);

  // 3. Handler de eventos com prefixo 'handle'
  // Uso de useCallback para estabilidade de referência
  //Uso de handle para padronizar nomes de funções
  const handleStatusChange = useCallback(() => {
    const newStatus = user.status === 'active' ? 'inactive' : 'active';
    onUpdateStatus(user.id, newStatus);
  }, [user.id, user.status, onUpdateStatus]);

  // 4. Renderização Condicional Limpa
  if (!user.status) return null;

  return (
    <div className={`card card--${variant}`}>
      <h3>{userSummary}</h3>
      <p>Status: <strong>{user.status}</strong></p>
      
      {/* 5. Composição e Ações */}
      <button 
        type="button" 
        onClick={handleStatusChange}
        aria-label="Alterar status do usuário" // Acessibilidade (ARIA) 
      >
        Alternar Status
      </button>
    </div>
  );
};

// Exportação nomeada para facilitar refatoração e buscas no VS Code