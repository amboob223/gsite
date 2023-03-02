const { Pool } = require('pg');

const pool = new Pool({
    connectionString: 'postgresql://gsite_user:fEUGYADX1ubCrYP5dB2bXtBlyTDiTioD@dpg-cg05gat269vdqrfpj2g0-a:5432/gsite'
});

module.exports = pool;
