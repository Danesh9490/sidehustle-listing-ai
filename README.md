# ✨ SideHustle Listing AI

**Turn product details into better listings with AI.**

SideHustle Listing AI is a web application designed to help independent sellers and small businesses create clear, compelling product listings without spending hours writing copy.

## 🚀 Features

- Generate product titles and descriptions
- Create concise product selling points
- Suggest search keywords
- Choose a writing style to suit your brand
- Tailor content for different selling platforms
- Copy generated content for use in your store
- Responsive interface for desktop and mobile
- Secure server-side AI API integration

## 🎯 Who Is It For?

- Small business owners
- Independent online sellers
- Handmade product creators
- People starting their first online store

## 🛠️ Technology Stack

- React
- Vite
- Node.js and Express
- Groq API
- Open-weight language model: GPT-OSS

## ⚙️ Run Locally

1. Install Node.js.
2. Clone this repository.
3. Install dependencies:

   ```bash
   npm install
   ```

4. Create a `.env` file in the project root:

   ```env
   GROQ_API_KEY=your_groq_api_key
   GROQ_MODEL=openai/gpt-oss-20b
   PORT=3000
   ```

5. Start the backend:

   ```bash
   npm run server
   ```

6. In a second terminal, start the frontend:

   ```bash
   npm run dev
   ```

7. Open the local URL shown by Vite.

For local development, set `VITE_API_BASE_URL` in a frontend `.env` file to the backend address, such as `http://localhost:3000`.

**Security:** Never commit your real API key to GitHub. Use environment variables in your deployment platform.

## 🌱 Why Open Innovation Matters

Small sellers often lack the time and resources to hire professional copywriters. AI tools can make useful writing assistance more accessible, helping independent businesses compete online.

This project explores how an open-weight language model can support practical, everyday business tasks.

## 🗺️ Project Status

This project is under active development. Deployment, API configuration, and end-to-end testing are still in progress.

## 📄 License

A license will be added after the initial implementation.
