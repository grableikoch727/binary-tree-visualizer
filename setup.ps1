# Binary Tree Visualizer Setup Script
Write-Host "Setting up Binary Tree Visualizer..." -ForegroundColor Green

# Check if Node.js is installed
try {
    $nodeVersion = node --version
    Write-Host "Node.js version: $nodeVersion" -ForegroundColor Green
} catch {
    Write-Host "Node.js is not installed. Please install Node.js first." -ForegroundColor Red
    Write-Host "Download from: https://nodejs.org/" -ForegroundColor Yellow
    exit 1
}

# Check if npm is available
try {
    $npmVersion = npm --version
    Write-Host "npm version: $npmVersion" -ForegroundColor Green
} catch {
    Write-Host "npm is not available. Please check your Node.js installation." -ForegroundColor Red
    exit 1
}

# Install dependencies
Write-Host "Installing dependencies..." -ForegroundColor Yellow
npm install

if ($LASTEXITCODE -eq 0) {
    Write-Host "Installation completed successfully!" -ForegroundColor Green
    Write-Host ""
    Write-Host "To start the app:" -ForegroundColor Cyan
    Write-Host "1. Run: npm start" -ForegroundColor White
    Write-Host "2. For Android: Install Expo Go app and scan QR code" -ForegroundColor White
    Write-Host "3. For Web: Press 'w' when Metro bundler starts" -ForegroundColor White
} else {
    Write-Host "Installation failed. Please check the error messages above." -ForegroundColor Red
}

Write-Host ""
Write-Host "Press any key to continue..."
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown") 