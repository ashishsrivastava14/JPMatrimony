# Windows Setup Guide

If you encounter PowerShell script execution issues, follow these steps:

## Option 1: Use CMD Instead
1. Open Command Prompt (cmd.exe)
2. Navigate to the project directory:
   ```
   cd d:\Projects\InHouseWebsites\JPMatrimony
   ```
3. Run npm commands:
   ```
   npm install
   npm run dev
   ```

## Option 2: Enable PowerShell Scripts (Admin Required)
1. Open PowerShell as Administrator
2. Run:
   ```
   Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
   ```
3. Confirm with 'Y'
4. Then run:
   ```
   npm install
   npm run dev
   ```

## Option 3: Bypass for Single Command
Run in PowerShell:
```
powershell -ExecutionPolicy Bypass -Command "npm install"
powershell -ExecutionPolicy Bypass -Command "npm run dev"
```

## Quick Start (CMD)
```
cd d:\Projects\InHouseWebsites\JPMatrimony
npm install
npm run dev
```

Then open http://localhost:3000 in your browser.

## Verify Installation
After `npm install` completes:
- Check that `node_modules/` directory exists
- Verify package-lock.json is created
- Run `npm run dev` to start development server

## Default Credentials
Use these credentials to test the application:

### User Login
- Email: user@example.com
- Password: password123

### Admin Login
- Navigate to: http://localhost:3000/admin/login
- Email: admin@example.com
- Password: admin123

## Development Tips
- Changes to .jsx, .css files trigger hot reload
- Use browser DevTools to inspect API calls
- Check console for any errors
- Mock data is used when backend API is not available
