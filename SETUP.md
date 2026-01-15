# 🛠️ CafeMind Setup Guide

Complete step-by-step guide to get CafeMind running locally.

## Prerequisites

Before you begin, ensure you have:
- **Node.js** 18+ ([Download](https://nodejs.org/))
- **Python** 3.10+ ([Download](https://www.python.org/downloads/))
- **npm** or **pnpm** (comes with Node.js)
- **Git** ([Download](https://git-scm.com/))

## Step 1: Clone the Repository

```bash
git clone https://github.com/chidwipak/CafeMind_Project.git
cd CafeMind_Project
```

## Step 2: Backend Setup

### 2.1 Navigate to Python Directory
```bash
cd python_code
```

### 2.2 Create Virtual Environment (Recommended)
```bash
python -m venv venv

# Activate on Linux/Mac:
source venv/bin/activate

# Activate on Windows:
venv\Scripts\activate
```

### 2.3 Install Dependencies
```bash
pip install -r requirements.txt
```

### 2.4 Configure Backend Environment Variables

Create `python_code/api/.env` file:

```bash
cd api
touch .env
```

Add the following to `.env`:

```env
# Google Gemini API
GOOGLE_API_KEY=your_gemini_api_key_here

# Pinecone Vector Database
PINECONE_API_KEY=your_pinecone_api_key_here
PINECONE_ENVIRONMENT=your_pinecone_environment
PINECONE_INDEX_NAME=cafemind-knowledge

# Optional: Firebase Admin (if using backend Firebase)
FIREBASE_ADMIN_SDK_PATH=path/to/serviceAccountKey.json
```

**Get API Keys:**
- **Gemini API**: [Google AI Studio](https://aistudio.google.com/app/apikey)
- **Pinecone**: [Pinecone Console](https://app.pinecone.io)

## Step 3: Frontend Setup

### 3.1 Navigate to Frontend Directory
```bash
cd ../../frontend
```

### 3.2 Install Dependencies
```bash
npm install
# or
pnpm install
```

### 3.3 Configure Frontend Environment Variables

Copy the example environment file:

```bash
cp ../.env.example .env.local
```

Edit `.env.local` with your Firebase credentials:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
NEXT_PUBLIC_FIREBASE_DATABASE_URL=https://your_project.firebaseio.com
```

**Get Firebase Config:**
1. Go to [Firebase Console](https://console.firebase.google.com)
2. Create a new project or select existing
3. Go to Project Settings → General → Your apps → Web app
4. Copy the configuration values

## Step 4: Initialize Vector Database (Optional)

If you want to use the RAG (Details Agent) feature:

```bash
cd ../python_code
jupyter notebook build_vector_database.ipynb
```

Run all cells to populate the Pinecone vector database with product knowledge.

## Step 5: Train Recommendation Engine (Optional)

To generate fresh recommendation rules:

```bash
jupyter notebook recommendation_engine_training.ipynb
```

This will create/update `rules_basket.pkl` with Apriori association rules.

## Step 6: Upload Products to Firebase (Optional)

```bash
jupyter notebook firebase_uploader.ipynb
```

Run to populate Firebase Realtime Database with product catalog.

## Step 7: Run the Application

### 7.1 Start Backend (Optional - for full AI features)

```bash
cd python_code/api
python main.py
```

Backend will run on `http://localhost:8000`

### 7.2 Start Frontend

In a new terminal:

```bash
cd frontend
npm run dev
```

Frontend will run on `http://localhost:3000`

## Step 8: Access the Application

Open your browser and navigate to:
```
http://localhost:3000
```

You should see the CafeMind coffee shop interface with the AI chatbot!

## Troubleshooting

### Issue: "Module not found" errors
**Solution:** Ensure you're in the correct directory and dependencies are installed:
```bash
cd frontend && npm install
cd ../python_code && pip install -r requirements.txt
```

### Issue: Firebase connection errors
**Solution:** Double-check your `.env.local` file has correct Firebase credentials

### Issue: Gemini API errors
**Solution:** Verify your `GOOGLE_API_KEY` in `python_code/api/.env` is valid

### Issue: Port already in use
**Solution:** Kill the process or use a different port:
```bash
# Frontend
npm run dev -- -p 3001

# Backend
python main.py --port 8001
```

## Next Steps

- Explore the chatbot by asking questions like "What coffee do you recommend?"
- Try ordering items through the chat interface
- Browse the menu and add items to cart
- Check out the multi-agent system in `python_code/api/agents/`

## Need Help?

If you encounter issues, please:
1. Check the troubleshooting section above
2. Review the main [README.md](README.md)
3. Open an issue on GitHub

Happy coding! ☕
