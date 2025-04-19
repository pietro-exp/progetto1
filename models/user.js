// /models/user.js
const db = require('../db'); // File per gestire la connessione al DB

module.exports = {
    async findByUsername(username) {
        const query = `SELECT * FROM users WHERE username = ?`;
        const result = await db.get(query, [username]);
        return result;
    },

    async findById(id) {
        const query = `SELECT * FROM users WHERE id = ?`;
        const result = await db.get(query, [id]);
        return result;
    },

    async createUser(username, password, role = 'user') {
        const hash = await bcrypt.hash(password, 10);  // Cifrare la password
        const query = `INSERT INTO users (username, password, role) VALUES (?, ?, ?)`;
        await db.run(query, [username, hash, role]);
    }
};
