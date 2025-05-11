# Daily Games 🎮

Daily Games é uma aplicação web desenvolvida com [Next.js](https://nextjs.org) que permite aos usuários buscar informações sobre jogos de forma rápida e intuitiva. O projeto utiliza renderização no lado do servidor (SSR) e componentes otimizados para garantir uma experiência de usuário fluida.

## Funcionalidades

- 🔍 **Busca de jogos**: Pesquise jogos pelo nome e obtenha informações detalhadas.
- 🌐 **Renderização SSR**: Aproveite o desempenho otimizado com renderização no lado do servidor.
- 🎨 **Design responsivo**: Interface amigável e adaptável para dispositivos móveis e desktops.
- ⚡ **Integração com APIs**: Conecte-se a serviços externos para obter dados atualizados sobre jogos.

## Tecnologias Utilizadas

- [Next.js](https://nextjs.org) - Framework React para renderização SSR e SSG.
- [React](https://reactjs.org) - Biblioteca para construção de interfaces de usuário.
- [Tailwind CSS](https://tailwindcss.com) - Framework CSS para estilização rápida e responsiva.
- [TypeScript](https://www.typescriptlang.org) - Superset do JavaScript para tipagem estática.
- [React Icons](https://react-icons.github.io/react-icons) - Biblioteca de ícones para React.

## Pré-requisitos

Certifique-se de ter as seguintes ferramentas instaladas em sua máquina:

- [Node.js](https://nodejs.org) (versão 16 ou superior)
- [npm](https://www.npmjs.com) ou [yarn](https://yarnpkg.com)

## Configuração do Ambiente

Antes de iniciar o projeto, crie um arquivo `.env` na raiz do projeto com as seguintes variáveis de ambiente:

```env
# API Base URL
NEXT_PUBLIC_API_BASE_URL=https://api.example.com

# Chave de API (se necessário)
NEXT_PUBLIC_API_KEY=your_api_key_here

# Porta do servidor (opcional)
PORT=3000
```

> **Nota**: Substitua os valores acima pelos dados reais do seu ambiente.

## Como Executar o Projeto

1. Clone o repositório:

   ```bash
   git clone https://github.com/seu-usuario/daily-games.git
   cd daily-games
   ```

2. Instale as dependências:

   ```bash
   npm install
   # ou
   yarn install
   ```

3. Inicie o servidor de desenvolvimento:

   ```bash
   npm run dev
   # ou
   yarn dev
   ```

4. Abra [http://localhost:3000](http://localhost:3000) no navegador para visualizar o projeto.

## Estrutura de Pastas

Abaixo está uma visão geral da estrutura de pastas do projeto:

```
daily-games/
├── public/               # Arquivos estáticos (imagens, fontes, etc.)
├── src/
│   ├── app/              # Páginas e rotas do Next.js
│   ├── components/       # Componentes reutilizáveis
│   ├── styles/           # Estilos globais e configurações do Tailwind CSS
│   ├── utils/            # Funções utilitárias
│   └── hooks/            # Hooks personalizados
├── .env                  # Variáveis de ambiente
├── .eslintrc.json        # Configuração do ESLint
├── .prettierrc           # Configuração do Prettier
├── package.json          # Dependências e scripts do projeto
└── README.md             # Documentação do projeto
```

## Scripts Disponíveis

- `npm run dev`: Inicia o servidor de desenvolvimento.
- `npm run build`: Cria a build de produção.
- `npm run start`: Inicia o servidor em modo de produção.
- `npm run lint`: Verifica o código com ESLint.

## Contribuição

Contribuições são bem-vindas! Siga os passos abaixo para contribuir:

1. Faça um fork do repositório.
2. Crie uma branch para sua feature ou correção de bug: `git checkout -b minha-feature`.
3. Faça commit das suas alterações: `git commit -m 'Adicionei minha feature'`.
4. Envie para o repositório remoto: `git push origin minha-feature`.
5. Abra um Pull Request.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).

---

Feito com ❤️ por [Seu Nome](https://github.com/seu-usuario).

.env

NEXT_API_URL=https://sujeitoprogramador.com

PROJECT_URL=http://localhost:3000
