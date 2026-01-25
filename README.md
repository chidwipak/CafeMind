# ☕ CafeMind: Multi-Agent AI Coffee Shop Assistant

> *An intelligent, multi-agent AI system for coffee shop operations combining LLM, RAG, and ML-based recommendations*

**Author:** Chidwipak Kuppani

> [!NOTE]
> **Development Context**
> This project was developed in **April 2025**,The project is being pushed to GitHub now (January 2026) rather than during the original development period.
>
> **Why Now?**
> As I'm applying for internships and research positions, I'm consolidating my work from various remote systems into a public portfolio on GitHub. This project represents authentic work completed during my academic research, now being shared for professional opportunities.

---

## 🚀 Project Overview

CafeMind is a sophisticated AI-powered coffee shop assistant that leverages a **multi-agent architecture** to provide personalized, context-aware customer interactions. The system combines:

- 🤖 **Large Language Models (Gemini)** for natural language understanding
- 🔍 **RAG (Retrieval-Augmented Generation)** with vector embeddings for knowledge retrieval
- 📊 **Apriori Algorithm** for ML-based product recommendations
- 🛡️ **Guard Agent** for query security and domain filtering

---

## 🏗️ System Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                        User Query                                │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                    🛡️ Guard Agent                                │
│         (Security filtering & domain validation)                 │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                 🔄 Classification Agent                          │
│              (Intent detection & routing)                        │
└─────────────────────────────────────────────────────────────────┘
                              │
           ┌──────────────────┼──────────────────┐
           ▼                  ▼                  ▼
┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐
│  📚 Details     │  │  🛒 Order       │  │  🎯 Recommend   │
│     Agent       │  │   Taking Agent  │  │     Agent       │
│  (RAG + Vector  │  │  (Stateful      │  │  (Apriori +     │
│   Search)       │  │   Ordering)     │  │   Popularity)   │
└─────────────────┘  └─────────────────┘  └─────────────────┘
```

---

## 🛠️ Tech Stack

### Frontend
| Technology | Purpose |
|------------|---------|
| Next.js 15 | React framework with App Router |
| React 19 | UI library |
| TypeScript | Type safety |
| TailwindCSS | Styling |
| Radix UI | Accessible components |
| Firebase | Realtime database for products |

### Backend
| Technology | Purpose |
|------------|---------|
| Python 3.10+ | Backend language |
| FastAPI | API framework |
| Google Gemini | LLM for natural language processing |
| LangChain | LLM orchestration |
| Pinecone | Vector database for semantic search |

### AI/ML Components
| Component | Algorithm/Technology |
|-----------|---------------------|
| Guard Agent | LLM-based query classification |
| Classification Agent | Intent detection with Gemini |
| Details Agent | RAG with vector embeddings |
| Recommendation Agent | Apriori algorithm + popularity-based |

---

## 📁 Project Structure

```
CaféMind/
├── frontend/                    # Next.js frontend application
│   ├── app/                     # App router pages
│   ├── components/              # React components
│   │   ├── ui/                  # Shadcn/UI components
│   │   └── floating-chatbot.tsx # AI chat interface
│   ├── lib/                     # Utilities & Firebase config
│   └── hooks/                   # Custom React hooks
│
├── python_code/
│   ├── api/                     # FastAPI backend
│   │   ├── agents/              # Multi-agent system
│   │   │   ├── guard_agent.py   # Security filtering
│   │   │   ├── classification_agent.py
│   │   │   ├── details_agent.py # RAG implementation
│   │   │   ├── order_taking_agent.py
│   │   │   └── recommendation_agent.py
│   │   ├── agent_controller.py  # Orchestration layer
│   │   └── recommendation_objects/
│   ├── dataset/                 # Training data
│   └── *.ipynb                  # Training notebooks
│
└── .env.example                 # Environment template
```

---

## 🔧 Local Setup

### Prerequisites
- Node.js 18+
- Python 3.10+
- npm or pnpm

### 1. Clone & Install Frontend

```bash
cd frontend
npm install
```

### 2. Install Python Dependencies

```bash
cd python_code
pip install -r requirements.txt
```

### 3. Configure Environment Variables

Copy `.env.example` to `.env.local` (frontend) and `python_code/api/.env` (backend):

```bash
cp .env.example .env.local
```

Required API keys:
- **Firebase**: Get from [Firebase Console](https://console.firebase.google.com)
- **Google Gemini**: Get from [AI Studio](https://aistudio.google.com/app/apikey)
- **Pinecone**: Get from [Pinecone Console](https://app.pinecone.io)

### 4. Run the Application

**Frontend:**
```bash
cd frontend
npm run dev
```

**Backend (Optional - for full AI features):**
```bash
cd python_code/api
python main.py
```

---

## 🎯 Key Features

### 1. Multi-Agent Architecture
- **Guard Agent**: Filters irrelevant/harmful queries
- **Classification Agent**: Routes queries to appropriate specialists
- **Details Agent**: Answers questions using RAG
- **Order Taking Agent**: Manages stateful ordering flow
- **Recommendation Agent**: Personalized product suggestions

### 2. Recommendation Engine
- **Apriori Algorithm**: Finds frequently bought together items
- **Popularity-Based**: Recommends trending products
- **Category-Based**: Suggests within preferred categories

### 3. Vector Search (RAG)
- Semantic search using embeddings
- Context-aware response generation
- Pinecone vector database

---

## 📊 Machine Learning Components

### Apriori Association Rules
```python
# Example: Items frequently bought together
{
  "Latte": [
    {"product": "Chocolate Croissant", "confidence": 0.72},
    {"product": "Hazelnut Biscotti", "confidence": 0.65}
  ]
}
```

### Vector Embeddings
- Google's embedding model for semantic search
- Stored in Pinecone for fast retrieval
- Enables natural language queries

---

## 🔐 Security Features

- Query validation before processing
- Domain-specific filtering
- Graceful error handling
- Input sanitization

---

## 📝 API Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/chat` | POST | Process user message |
| `/products` | GET | List all products |
| `/health` | GET | Health check |

---

## 🎨 UI Features

- Modern glassmorphism design
- Responsive layout
- Real-time cart updates
- Floating AI chatbot
- Category filtering & search

---

## 📚 Technologies Demonstrated

This project showcases proficiency in:

1. **LLM Integration** - Gemini API, prompt engineering
2. **RAG Architecture** - Vector embeddings, semantic search
3. **Multi-Agent Systems** - Modular AI design patterns
4. **Machine Learning** - Apriori algorithm implementation
5. **Full-Stack Development** - Next.js + FastAPI
6. **Database Systems** - Firebase, Pinecone
7. **Modern UI/UX** - TailwindCSS, Radix UI

---

## 📄 License

MIT License - Chidwipak Kuppani

---

## 🙏 Acknowledgments

Built with modern AI/ML technologies and best practices in software engineering.
