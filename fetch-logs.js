
import { Client } from "ssh2";
import fs from "fs";
import path from "path";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

const config = {
    host: process.env.VPS_HOST || "161.97.77.9",
    port: 22,
    username: process.env.VPS_USER || "root",
    password: process.env.VPS_PASSWORD || "6l35QkMy8",
};

const conn = new Client();

conn.on("ready", () => {
    console.log("Client :: ready");
    // Fetch logs
    conn.exec("pm2 logs digital-marketing --lines 100 --nostream", (err, stream) => {
        if (err) throw err;
        stream.on("close", (code, signal) => {
            console.log("Stream :: close :: code: " + code + ", signal: " + signal);
            conn.end();
        }).on("data", (data) => {
            console.log("STDOUT: " + data);
        }).stderr.on("data", (data) => {
            console.log("STDERR: " + data);
        });
    });
}).connect(config);
