# PDF AI

An intelligent PDF chat application that allows you to upload PDF documents and chat with them using AI. Built with T3-stack (Next.js, tRPC, Tailwind CSS, TypeScript, Prisma) and Kindle for authentication.

<br/>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js"/>
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript"/>
  <img src="https://img.shields.io/badge/Kinde_Auth-000000?style=for-the-badge&logo=auth0&logoColor=white" alt="Kinde Auth"/>
  <img src="https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white" alt="Prisma"/>
  <img src="https://img.shields.io/badge/Pinecone-00D4AA?style=for-the-badge&logo=pinecone&logoColor=white" alt="Pinecone"/>
  <img src="https://img.shields.io/badge/OpenAI-412991?style=for-the-badge&logo=openai&logoColor=white" alt="OpenAI"/>
  <img src="https://img.shields.io/badge/LangChain-1C3C3C?style=for-the-badge&logo=langchain&logoColor=white" alt="LangChain"/>
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS"/>
</p>

---

## 🌟 Core Features

- **Secure Authentication**: Robust user sign-up, sign-in, and session management powered by **Kinde Auth**.
- **PDF Upload & Processing**: Upload PDF documents with drag-and-drop functionality using **UploadThing**.
- **AI-Powered Chat**: Chat with your PDFs using advanced language models from **OpenAI**.
- **Vector Search**: Intelligent document search and retrieval using **Pinecone** vector database.
- **Real-time Chat**: Interactive chat interface with message history and context awareness.
- **Document Management**: View and manage your uploaded PDFs in a clean dashboard interface.
- **PDF Viewer**: Built-in PDF viewer with zoom, navigation, and fullscreen capabilities.
- **Responsive Design**: Seamless experience across desktop, tablet, and mobile devices.

## 🛠 Technology Stack

| Area      | Technology                                                              |
| :-------- | :---------------------------------------------------------------------- |
| **Frontend**  | **Next.js 15** (React 19), **TypeScript**, **Tailwind CSS**, **shadcn/ui** |
| **Backend**   | **tRPC**, **Next.js API Routes**                                        |
| **Database**  | **Prisma** with **Neon** (PostgreSQL)                                  |
| **Auth**      | **Kinde Auth** (User management and authentication)                     |
| **AI/ML**     | **OpenAI** (GPT models), **LangChain**, **Pinecone** (Vector DB)      |
| **File Upload** | **UploadThing** (File uploads and storage)                            |
| **Data Fetching** | **TanStack Query** (React Query) with **tRPC**                        |

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or newer)
- npm, yarn, or pnpm
- A database (PostgreSQL recommended)
- API keys for required services

### Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd pdf-ai
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables:**
   Create a `.env.local` file in the root directory and add the required environment variables:
   ```env
   # Database
   DATABASE_URL="your-database-url"

   # Kinde Auth
   KINDE_CLIENT_ID="your-kinde-client-id"
   KINDE_CLIENT_SECRET="your-kinde-client-secret"
   KINDE_ISSUER_URL="your-kinde-issuer-url"
   KINDE_SITE_URL="http://localhost:3000"
   KINDE_POST_LOGOUT_REDIRECT_URL="http://localhost:3000"
   KINDE_POST_LOGIN_REDIRECT_URL="http://localhost:3000/dashboard"

   # OpenAI
   OPENAI_API_KEY="your-openai-api-key"

   # Pinecone
   PINECONE_API_KEY="your-pinecone-api-key"
   PINECONE_ENVIRONMENT="your-pinecone-environment"

   # UploadThing
   UPLOADTHING_SECRET="your-uploadthing-secret"
   UPLOADTHING_APP_ID="your-uploadthing-app-id"
   ```

4. **Set up the database:**
   ```bash
   npx prisma migrate dev
   npx prisma generate
   ```

5. **Run the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

6. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 📱 How It Works

1. **Sign Up/Sign In**: Create an account or sign in using Kinde Auth
2. **Upload PDF**: Use the dashboard to upload your PDF documents
3. **Processing**: The system processes your PDF, extracts text, and creates vector embeddings
4. **Chat**: Start chatting with your document using natural language
5. **AI Responses**: Get intelligent responses based on the content of your PDF

## 🔮 Future Enhancements

- **Multiple File Format Support**: Support for Word documents, PowerPoint, and more
- **Advanced Search**: Full-text search across all uploaded documents
- **Collaboration**: Share documents and chat sessions with team members
- **API Access**: RESTful API for integrating with other applications
- **Analytics**: Usage analytics and insights dashboard

---

*This project was built for tRPC learning purpose. Restructured from https://github.com/joschan21/quill and Big shout out to @joshtriedcoding's tutorial❤️*