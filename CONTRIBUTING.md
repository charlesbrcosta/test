# 🚀 Guia de Contribuição e Padrões do Projeto

Bem-vindo! Para manter a qualidade do código e a agilidade do time, seguimos este padrão de interação.

## 1. 🌿 Estratégia para criação de de Branches (apenas o conceito do GitHub Flow)
Utilizamos branches curtas para cada tarefa:
- **main**: Código em produção, sempre estável;
- **develop**: Código após a relase, sempre estável;
- **feature/**: Novas funcionalidades (ex: `feature/login-social`);
- **fix/**: Correção de bugs (ex: `fix/erro-calculo-frete`);
- **docs/**: Alterações apenas em documentação.

## 2. 📝 Padrão de Commits (Conventional Commits)
Os commits devem ser atômicos e seguir o padrão semântico:
- `feat`: Uma nova funcionalidade.
- `fix`: Correção de um erro.
- `docs`: Mudanças na documentação.
- `style`: Formatação (espaços, vírgulas) sem alterar a lógica.
- `refactor`: Mudança no código que não corrige erro nem adiciona função.

**Exemplo:** `feat: adiciona validação de esquema no formulário de cadastro`.

## 3. 🤖 Automação e Qualidade (CI/CD)
Antes de qualquer integração, o **GitHub Actions** validará seu código:
- **Lint**: O código deve estar formatado conforme as regras do projeto;
- **Build**: O projeto deve compilar sem erros;
- **Testes**: Se houver testes, eles precisam passar 100% .

## 4. 🔀 Processo de Pull Request (PR)
Para integrar seu código à `main`:
1. Abra o PR preenchendo o template oficial;
2. Certifique-se de que o **CI** (Actions) passou com sucesso;
3. Solicite o **Code Review** de pelo menos um colega;
4. Resolva todos os conflitos e comentários antes do merge.

## 5. 🛡️ Segurança e Histórico
- **Nunca** envie chaves de API ou segredos para o repositório.
- Mantenha o histórico limpo; se necessário, utilize `rebase` na sua branch local antes do push;
- Branches protegidas impedem o `force push` na `main` para evitar perda de dados.