$ErrorActionPreference = "Stop"
$Server = "root@161.97.77.9"
$RemotePath = "/root/digital-marketing"

Write-Host "1. Packing files..." -ForegroundColor Cyan
# Using tar to bundle files
tar -czf deploy.tar.gz dist package.json package-lock.json drizzle.config.ts

Write-Host "2. Uploading files..." -ForegroundColor Cyan
Write-Host "Please enter the VPS password if prompted ($Server)" -ForegroundColor Yellow
scp deploy.tar.gz "${Server}:/root/deploy.tar.gz"

Write-Host "3. Installing and Restarting on Server..." -ForegroundColor Cyan
Write-Host "Please enter the VPS password again if prompted" -ForegroundColor Yellow
$Commands = "
    mkdir -p $RemotePath
    tar -xzf /root/deploy.tar.gz -C $RemotePath
    cd $RemotePath
    npm install --production
    # Run migrations if possible, or skip
    # npm run db:push 
    pm2 reload digital-marketing || pm2 start dist/index.js --name digital-marketing --env production
    echo 'Deployment Successfully Completed!'
"
ssh -t $Server $Commands

Write-Host "Done!" -ForegroundColor Green
