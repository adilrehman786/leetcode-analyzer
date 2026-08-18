#  LeetCode Analyzer

> **Analyze your LeetCode journey with detailed statistics, beautiful visualizations, and actionable performance insights.**

LeetCode Analyzer is a web application that turns your **LeetCode profile into meaningful data**. Enter a LeetCode username and get a clean overview of your problem-solving progress, submission activity, and coding performance.

## ✨ Features

### 👤 Profile Analytics

* Fetches your LeetCode profile using the **LeetCode GraphQL API**
* Displays your profile information and coding statistics
* Shows overall problem-solving progress
* Tracks solved problems across different difficulties

### 📊 Problem Statistics

* 🟢 Easy problems solved
* 🟡 Medium problems solved
* 🔴 Hard problems solved
* Total problems solved
* Problem-solving distribution

### 📈 Visual Analytics

Transform raw LeetCode data into easy-to-understand visualizations.

* Difficulty distribution
* Solving trends
* Submission statistics
* Progress insights
* Performance breakdown

### 🔥 Activity Heatmap

Visualize your LeetCode activity throughout the year with a GitHub-style contribution heatmap.

The heatmap helps answer:

* How consistently do I practice?
* Which days am I most active?
* How many problems did I solve over time?
* What does my coding streak look like?

### 🧠 Performance Insights

Instead of simply displaying numbers, the goal is to provide useful insights into your problem-solving habits.

Examples:

> **Consistency:** Your activity is strongest during weekdays.

> **Strength:** You have solved significantly more Medium problems than Hard problems.

> **Trend:** Your problem-solving activity has increased over the last few weeks.

---

## 🖥️ Tech Stack

### Frontend

* React
* JavaScript
* HTML
* CSS
* Data visualization libraries
* Deployed on **Vercel**

### Backend

* Node.js
* Express.js
* GraphQL
* LeetCode GraphQL API
* Deployed on **Render**

### Architecture

```text
┌─────────────────────┐
│      LeetCode       │
│    GraphQL API      │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│      Backend        │
│   Node.js/Express   │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│      Frontend       │
│   React + JS + CSS  │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│     Analytics UI    │
│ Charts • Stats • 🔥 │
│      Heatmap        │
└─────────────────────┘
```

---

## 🎯 Why I Built This

LeetCode provides a lot of information about a user's coding activity, but raw statistics don't always tell the full story.

I wanted to build a platform that answers:

**"What does my LeetCode activity actually say about my problem-solving journey?"**

The project focuses on converting profile data into **visual, understandable, and useful insights**.

---

## 🛣️ Roadmap

* [x] LeetCode profile fetching
* [x] GraphQL integration
* [x] Basic profile statistics
* [x] Difficulty breakdown
* [ ] Activity heatmap
* [ ] Submission streak tracking
* [ ] Contest rating analytics
* [ ] Contest performance graphs
* [ ] Topic-wise problem analysis
* [ ] Most practiced topics
* [ ] Weak topic detection
* [ ] Monthly / yearly progress reports
* [ ] Personal coding goals
* [ ] Compare two LeetCode profiles
* [ ] AI-powered performance insights
* [ ] Shareable analytics profile
* [ ] Downloadable performance report

---

## 📸 Screenshots

Add screenshots of your dashboard here:

```text
Coming soon...
```

---

## ⚙️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
cd YOUR_REPOSITORY
```

### 2. Install dependencies

For the frontend:

```bash
cd frontend
npm install
```

For the backend:

```bash
cd backend
npm install
```

### 3. Configure environment variables

Create a `.env` file in the backend directory and add the required configuration.

```env
PORT=5000
```

Add any additional environment variables required by your implementation.

### 4. Run the backend

```bash
npm run dev
```

### 5. Run the frontend

```bash
npm run dev
```

The application should now be available locally.

---

## 🌐 Deployment

The project currently follows a separate frontend/backend deployment architecture:

**Frontend → Vercel**

**Backend → Render**

```text
User
  │
  ▼
Vercel
React Frontend
  │
  │ API Request
  ▼
Render
Node.js Backend
  │
  ▼
LeetCode GraphQL
```

---

## 🤝 Contributing

Contributions, ideas, and feature suggestions are welcome!

1. Fork the repository
2. Create a new branch

```bash
git checkout -b feature/amazing-feature
```

3. Make your changes
4. Commit your changes

```bash
git commit -m "Add amazing feature"
```

5. Push the branch

```bash
git push origin feature/amazing-feature
```

6. Open a Pull Request

---

## ⭐ Future Vision

The goal isn't to make another LeetCode statistics page.

The goal is to build a **personal coding analytics platform** that helps developers understand their habits, identify weaknesses, track improvement, and make better decisions about what to practice next.

> **Code more. Understand your progress. Get better. 🚀**

---

## 📄 License

This project is open source. Add your preferred license here.
