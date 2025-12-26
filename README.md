# Student-Assesment-Report
## Student Speaking Assessment Report

### Tech Stack
- React (Frontend)
- Node.js + Express (Backend)
- JSON as data source

### How to Run

1. Start Backend
```
cd backend
npm install
node server.js
```
2. Start Frontend
```
cd frontend
npm install
npm run dev
```
### Data Storage
Scores are stored in backend/data.json

### Feedback Logic
Feedback is generated based on overall score:
- ≥ 8 : Excellent
- 6–7 : Good
- < 6 : Needs improvement
