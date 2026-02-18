# 🚀 Guia de Contribuição e Padrões do Projeto

Bem-vindo! Para manter a qualidade do código e a agilidade do time, seguimos este padrão de interação.
.

### 1) Clone localmente
Abra o seu Git Bash e digite o comando `git clone` seguido da URL do seu fork para clonar o seu repositório localmente. Por exemplo:
```bash
git clone https://github.com/PROINT-II/frontend.git
```
ou 
```bash
git clone https://github.com/PROINT-II/backend.git
```
Pressione enter, e uma cópia do seu fork no GitHub será criada localmente.

> [!NOTE]
> Caso não saiba como criar uma solicitação de pull, acesse a documentação do GitHub: [Como criar uma solicitação de pull
](https://docs.github.com/pt/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request)

### 2) Criação da **branch** 
Utilize o comando `git checkout -b` para criar e alternar para a nova branch e nomeie-a como `feature/new-functionality`
> Exemplo: `git checkout -b feature/new-functionality`

## Padronização de branches
Utilizamos branches curtas para cada tarefa:
- **main**: Código em produção;
- **develop**: Código após a release;
- **feature/**: Novas funcionalidades (ex: `feature/login-social`);
- **fix/**: Correção de bugs (ex: `fix/erro-calculo-frete`);
- **docs/**: Alterações apenas em documentação.

## Convenção de Commits 

| Tipo de Commit |Descrição                                                            | Exemplo
| ---------------|----------------------------------------------------------------------|-----------
| `feat`         | Adiciona uma nova funcionalidade ao projeto.                         | `feat: add USENAME.md profile`
| `fix`          | Corrige um bug ou problema no projeto.                               | `fix: fixed issue fix#IssueNumber`
| `docs`         | Altera a documentação do projeto.| `docs: update README.md`
| `style`        | Realiza mudanças na aparência, sem alterar a funcionalidade.         | `style: add EFFECTNAME to COMPONENT`
| `refactor`     | Realiza mudanças no código que não alteram a funcionalidade.         | `refactor: refactor at CLASSNAME`
| `test`         | Adiciona ou modifica testes no projeto.                              | `test: add unit test for UserService`

**Exemplo:** `feat: adiciona validação de esquema no formulário de cadastro`.

## Automação e Qualidade (CI/CD)
Antes de qualquer integração, o **GitHub Actions** validará seu código:
- **Lint**: O código deve estar formatado conforme as regras do projeto;
- **Build**: O projeto deve compilar sem erros;
- **Testes**: Se houver testes, eles precisam passar 100% .

## Processo de Pull Request (PR)
Para integrar seu código à `main`:
1. Abra o PR preenchendo o template oficial;
2. Certifique-se de que o **CI** (Actions) passou com sucesso;
3. Solicite o **Code Review** de pelo menos um colega;
4. Resolva todos os conflitos e comentários antes do merge.

## 5. Histórico
- Mantenha o histórico limpo; se necessário.