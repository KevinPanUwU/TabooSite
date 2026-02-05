# Quick Start Guide

## For Development

Double-click **`RUN_DEV.bat`** — this opens the app in development mode with hot reload.

Or manually:
```bash
npm run dev          # Just the web app
npm run electron:dev # App + Electron window
```

## For Non-Technical Users (Distribution)

### Option 1: Portable EXE (Easiest!)

1. **Double-click `BUILD_APP.bat`**
2. Wait ~30 seconds (builds and packages)
3. Find `MyApp.exe` in the `release` folder
4. Give this file to anyone — they just double-click to run!

### Option 2: Quick Test (No Packaging)

Double-click **`QUICK_BUILD_TEST.bat`** — builds and runs the app immediately without creating the distribution package.

---

## What Each File Does

| File | Purpose |
|------|---------|
| `RUN_DEV.bat` | Run in development mode with live reload |
| `QUICK_BUILD_TEST.bat` | Build and test locally (fast) |
| `BUILD_APP.bat` | Create final portable .exe for distribution |

---

## Troubleshooting

**Build takes too long?**
- First build downloads Electron (~30 sec), subsequent builds are faster

**App shows white screen?**
- Make sure build completed without errors
- Try `QUICK_BUILD_TEST.bat` first to verify

**Want to customize the app name/icon?**
- Edit `package.json` → `"productName"` and `"build"` sections
