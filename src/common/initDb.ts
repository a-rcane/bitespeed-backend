import path from "path";
import fs from "fs";
import pool from "./dbConfig";

const sqlFilePath: string = path.join(__dirname, 'sql', 'table.sql');
const sql = fs.readFileSync(sqlFilePath, 'utf8');

export async function executeSql() {
    const client = await pool.connect();
    try {
        await client.query(sql);
        console.log('SQL file executed successfully');
    } catch (err) {
        console.error('Error executing SQL file', err);
    } finally {
        client.release();
    }
};
