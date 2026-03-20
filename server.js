const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;
const DATA_DIR = path.join(__dirname, 'data');

// Ensure data directory exists
if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR);

app.use(express.json());
app.use(express.static(path.join(__dirname)));

// GET list of existing users
app.get('/api/users', (req, res) => {
  try {
    const files = fs.readdirSync(DATA_DIR).filter(f => f.endsWith('.json'));
    const users = files.map(f => f.replace('.json', ''));
    res.json(users);
  } catch {
    res.json([]);
  }
});

// GET progress for a user
app.get('/api/progress/:user', (req, res) => {
  const file = path.join(DATA_DIR, `${sanitize(req.params.user)}.json`);
  if (!fs.existsSync(file)) return res.json({});
  try {
    res.json(JSON.parse(fs.readFileSync(file, 'utf8')));
  } catch {
    res.json({});
  }
});

// POST (save) progress for a user
app.post('/api/progress/:user', (req, res) => {
  const file = path.join(DATA_DIR, `${sanitize(req.params.user)}.json`);
  fs.writeFileSync(file, JSON.stringify(req.body, null, 2));
  res.json({ ok: true });
});

function sanitize(name) {
  return name.replace(/[^a-zA-Z0-9_-]/g, '').substring(0, 30) || 'default';
}

const server = app.listen(PORT, () => {
  console.log(`Sailinglish running on port ${PORT}`);
});

// Graceful shutdown for Railway SIGTERM
process.on('SIGTERM', () => {
  console.log('SIGTERM received, shutting down gracefully...');
  server.close(() => {
    console.log('Server closed');
    process.exit(0);
  });
});
