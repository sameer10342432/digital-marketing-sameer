
import { Client } from 'ssh2';
import * as fs from 'fs';

const config = {
    host: '161.97.77.9',
    port: 22,
    username: 'root',
    password: '6l35QkMy8'
};

const conn = new Client();

console.log('Connecting...');

conn.on('ready', () => {
    console.log('Client :: ready');

    // 1. Upload File
    console.log('Starting SFTP session...');
    conn.sftp((err, sftp) => {
        if (err) throw err;

        console.log('Uploading deploy.tar.gz...');
        const readStream = fs.createReadStream('deploy.tar.gz');
        const writeStream = sftp.createWriteStream('/root/deploy.tar.gz');

        writeStream.on('close', () => {
            console.log('Upload complete.');
            sftp.end();

            // 2. Execute Commands
            const cmd = `
                mkdir -p /root/digital-marketing &&
                echo "Killing ALL node processes..." &&
                (killall -9 node || true) &&
                echo "Wiping directory..." &&
                rm -rf /root/digital-marketing &&
                mkdir -p /root/digital-marketing &&
                tar -xzf /root/deploy.tar.gz -C /root/digital-marketing &&
                cd /root/digital-marketing &&
                echo "Reverting Nginx Config to Port 5000..." &&
                sed -i 's/localhost:5001/localhost:5000/g' /etc/nginx/sites-enabled/* &&
                nginx -t &&
                systemctl reload nginx &&
                echo "Installing ALL dependencies..." &&
                npm install &&
                echo "Pushing DB Schema..." &&
                npx drizzle-kit push &&
                echo "Seeding Admin User..." &&
                npx tsx server/seed-admin.ts &&
                (pm2 delete all || true) &&
                NODE_ENV=production SESSION_SECRET='super-secret-key-123' ALLOWED_ORIGINS='https://muhammadsameer.online,https://www.muhammadsameer.online' pm2 start dist/index.js --name digital-marketing --update-env &&
                sleep 5 &&
                echo "Checking Localhost 5000 Response:" &&
                (curl -I http://localhost:5000/assets/index-CQUKVole.js || echo "Curl failed") &&
                echo "Fetching PM2 Logs..." &&
                pm2 logs digital-marketing --lines 100 --nostream &&
                echo "DEPLOY_SUCCESS"

            `;

            console.log('Executing deployment commands...');
            conn.exec(cmd, (err, stream) => {
                if (err) throw err;

                stream.on('close', (code, signal) => {
                    console.log('Stream :: close :: code: ' + code + ', signal: ' + signal);
                    conn.end();
                }).on('data', (data) => {
                    console.log('STDOUT: ' + data);
                }).stderr.on('data', (data) => {
                    console.log('STDERR: ' + data);
                });
            });
        });

        readStream.pipe(writeStream);
    });
}).on('error', (err) => {
    console.error('Connection Error:', err);
}).connect(config);
