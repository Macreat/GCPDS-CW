# generatedocs.ps1
# Automates Doxygen documentation generation and updates the /docs folder for Vercel deployment.

Write-Host "Starting Doxygen documentation generation..." -ForegroundColor Cyan

# Check if doxygen is installed
if (!(Get-Command doxygen -ErrorAction SilentlyContinue)) {
    Write-Error "Doxygen is not installed or not in PATH. Please install Doxygen to continue."
    exit 1
}

# 1. Run Doxygen from the agentCLI directory
Write-Host "Running Doxygen..."
Push-Location agentCLI
try {
    & doxygen coWorkEnv
} catch {
    Write-Error "An error occurred while running Doxygen: $_"
    exit 1
} finally {
    Pop-Location
}

# 2. Define paths
$SourcePath = Join-Path (Get-Location) "docs/doxygen/html"
$DestinationPath = Join-Path (Get-Location) "docs"

# 3. Check if source was generated
if (!(Test-Path $SourcePath)) {
    Write-Error "Doxygen output directory not found at $SourcePath. Check coWorkEnv configuration."
    exit 1
}

Write-Host "Copying generated files to /docs..." -ForegroundColor Green

# 4. Copy everything from source to destination
# We use -Force to overwrite existing files. 
# We copy contents of html folder into docs root.
Copy-Item -Path "$SourcePath\*" -Destination $DestinationPath -Recurse -Force

# 5. Cleanup the intermediate doxygen folder
Write-Host "Cleaning up temporary files..." -ForegroundColor Yellow
Remove-Item -Path (Join-Path (Get-Location) "docs/doxygen") -Recurse -Force

Write-Host "Documentation updated successfully in /docs." -ForegroundColor Green
Write-Host "You can now commit and push the changes to update your Vercel site." -ForegroundColor Cyan
