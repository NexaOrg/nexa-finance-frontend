# 🌿 Nexa Finance Frontend

Frontend do **Nexa App**, uma aplicação moderna de **gestão financeira pessoal** desenvolvida em **React**, com foco em controle de gastos, metas financeiras e visualização de dados de forma intuitiva e elegante.

---

## 📘 Descrição do Projeto

O **Nexa App** permite que usuários gerenciem suas finanças de maneira simples e eficiente.  
A interface é pensada para proporcionar **clareza, motivação e praticidade**, ajudando o usuário a entender seus hábitos financeiros e alcançar seus objetivos.

> 💡 **Objetivo**: transformar o controle financeiro em algo natural e agradável, com insights visuais e acompanhamento diário.

---

## 🧠 Principais Funcionalidades

- 💵 **Cadastro e login de usuários**
- 📊 **Visualização de gastos e ganhos**
- 🗓️ **Controle por período (semanal, mensal, anual)**
- 🎯 **Criação de metas financeiras**
- 🔐 **Criptografia de senha antes do envio ao backend**
- 🌈 **Interface responsiva e intuitiva**
- ☁️ **Integração com o backend Nexa (API REST)**

---

## ⚙️ Tecnologias Utilizadas

| Categoria | Tecnologias |
|------------|--------------|
| **Framework** | React 18 + Vite |
| **Linguagem** | TypeScript |
| **Estilização** | Tailwind CSS |
| **Gerenciamento de Estado** | Context API |
| **Autenticação** | JWT / HTTPS |
| **Comunicação com API** | Axios |
| **Gráficos e Visualização** | Recharts |
| **Formulários** | React Hook Form |
| **Build & Deploy** | Vite + Netlify / Vercel |

---

## 🧩 Estrutura de Pastas
nexa_frontend/
├── src/
│ ├── assets/ # Imagens e ícones
│ ├── components/ # Componentes reutilizáveis
│ ├── contexts/ # Contextos globais (ex: auth, theme)
│ ├── hooks/ # Custom hooks
│ ├── pages/ # Páginas principais (Login, Dashboard, etc.)
│ ├── services/ # Comunicação com API
│ ├── utils/ # Funções auxiliares
│ ├── App.tsx # Componente raiz
│ └── main.tsx # Ponto de entrada da aplicação
├── .env.example # Exemplo de variáveis de ambiente
├── package.json
└── README.md

---

🚀 Como Executar o Projeto
1️⃣ Clonar o repositório

git clone https://github.com/seu-usuario/nexa-frontend.git
cd nexa-frontend

2️⃣ Instalar as dependências

npm install

3️⃣ Rodar o servidor de desenvolvimento

npm run dev

4️⃣ Acessar o app

Abra no navegador:
👉 http://localhost:5173
🧱 Integração com o Backend

O Nexa Frontend consome a API do Nexa Backend, responsável por autenticação, registro e análise de dados financeiros.

    Repositório do backend: nexa-backend

Fluxo de autenticação:

    O frontend requisita a chave pública RSA do backend.

    Criptografa a senha localmente.

    Envia os dados criptografados para o endpoint de login.

    Recebe o JWT e armazena de forma segura.

📸 Exemplos de Interface

    Adicione aqui imagens da aplicação em funcionamento (por exemplo):

<div align="center">

🖼️ Tela de Login

🖼️ Dashboard Financeira
</div>
📝 Documentação Técnica

    📄 Acesse o Documento Técnico no Google Docs

(Insira aqui o link com permissão de visualização ou edição conforme desejado.)
🤝 Contribuição

Contribuições são sempre bem-vindas!
Para contribuir:

    Faça um fork do projeto.

    Crie uma branch com sua feature:

git checkout -b feature/nome-da-feature

Faça o commit das alterações:

git commit -m "Adiciona nova feature"

Envie sua branch:

    git push origin feature/nome-da-feature

    Abra um Pull Request.

🧾 Licença

Este projeto é distribuído sob a licença MIT.
Consulte o arquivo LICENSE para mais informações.
👨‍💻 Autor

Pedro Henrique
💼 Desenvolvedor Full Stack | React + Go
🌐 GitHub

📧 Contato: pedrohenrique@email.com

    "Transformando números em propósito e clareza financeira."
    — Nexa App
