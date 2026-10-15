# ✨ SideHustle Listing AI

**Turn product details into compelling online listings with AI.**

SideHustle Listing AI helps independent sellers and small businesses generate product titles, descriptions, selling points, and search keywords using a hosted open-weight language model.

🚀 **Live Demo:** https://sidehustle-listing-ai-z81o.vercel.app/

## 🚀 Features

- Generate product titles and descriptions
- Create concise product selling points
- Suggest relevant search keywords
- Choose from multiple writing styles
- Tailor listings to different selling platforms
- Copy individual sections or the complete listing
- Responsive interface for desktop and mobile
- Secure server-side AI integration

## 🎯 Who Is It For?

- Small business owners
- Independent online sellers
- Handmade product creators
- First-time online store owners

## 🛠️ Technology Stack

- React
- Vite
- Node.js
- Express
- Groq API
- GPT-OSS open-weight language model

## ⚙️ Run Locally

### Prerequisites

- Node.js and npm
- A Groq API key

### 1. Clone the repository

```bash
git clone https://github.com/Danesh9490/sidehustle-listing-ai.git
cd sidehustle-listing-ai
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file in the project root:

```env
GROQ_API_KEY=your_groq_api_key
GROQ_MODEL=openai/gpt-oss-20b
PORT=3000
VITE_API_BASE_URL=http://localhost:3000
```

Replace `your_groq_api_key` with your own Groq API key. Keep this file private and never commit it to GitHub.

### 4. Start the backend

In your first terminal, run:

```bash
npm run start
```

### 5. Start the frontend

Open a second terminal in the project directory and run:

```bash
npm run dev
```

Open the local URL displayed by Vite in your browser.

## 🌐 Deployment

- **Frontend:** Vercel
- **Backend:** Render
- **AI inference:** Groq API

Configure `GROQ_API_KEY` as a private environment variable on the backend hosting service. Configure `VITE_API_BASE_URL` on Vercel to point to the deployed backend URL, then redeploy the frontend.

Never expose your Groq API key in frontend code or commit it to version control.

## 🛡️ Responsible Use

AI-generated content may contain inaccuracies. Review product descriptions, claims, benefits, and keywords before publishing. Ensure all product claims are accurate and comply with the relevant marketplace policies.

## 🌱 Why This Project?

Small sellers may not have the time or budget to hire professional copywriters. This project explores how AI can make product listing creation more accessible and help independent businesses communicate their products more effectively.

## 📌 Project Status

The application is deployed, and product listing generation and copy-to-clipboard functionality have been tested successfully. Further improvements and testing are welcome.

## 📄 License

This project is licensed under the [MIT License](LICENSE).
