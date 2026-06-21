# 🚀 Novus IDE

The Cloud IDE in Your Pocket.

Novus IDE is a mobile-first cloud development platform that enables developers to code, build, and manage projects directly from their smartphones.

## ✨ Features

- 🤖 AI Coding Assistant
- 💻 Advanced Code Editor
- ☁️ Cloud Development Environment
- 📦 APK Build Support
- 🔗 GitHub Integration
- 🤝 Multi-Agent AI Support
- 📱 Mobile-First Experience

## 🎯 Vision

Our mission is to democratize software engineering by making professional-grade development environments accessible to anyone with a smartphone.

## 📥 Download

🌐 Website: https://nexusbot.in

Download the latest Public Beta from the Releases section.

## 🆕 Latest Updates (Changelog)

### Version 1.1.0 Beta
**🚀 New Features:**
- **Termux-Style Terminal Shortcut Bar:** Added a sticky keyboard shortcut bar right below the terminal (ESC, CTRL, ALT, Arrow keys, etc.) for easier CLI navigation on mobile.
- **Dynamic Port Detection for Web Previews:** The IDE terminal automatically detects local server URLs (e.g., http://127.0.0.1:5000) and instantly converts them into clickable, public Cloud Preview Links.
- **Advanced Architecture & Secrets Agent:** Upgraded the Architecture Agent to strictly enforce modern app design patterns (MVVM, Repository Pattern) and automatically generate a .env file for secrets mapping when scaffolding new projects.
- **Comprehensive User Profile & Live Stats:** Added a dedicated profile screen matching the app's dynamic theme, displaying live tracking for AI queries, files created, and a 7-day coding streak. Users can now edit their display name, set a custom profile photo locally, and manage all AI & Editor settings directly from the profile.
- **Smart AI Voice Mode — Plan & Question:** Full-screen voice AI mode powered by Gemini 2.5 Flash Native Audio. The voice model plans, questions, and hands off to the text agent for code generation.
- **New AI Models Expanded:** Integrated several new models into the Universal API Gateway including Groq's LLaMA 3.3 70B & Qwen 2.5 series, Nvidia's MiniMax & Moonshot Kimi, Google's Gemini 3.1 Flash Lite, and Anthropic's Claude 4.6 Sonnet & Opus (Thinking). These models are now automatically synced and available for free to all IDE users.

**🐛 Bug Fixes:**
- **Universal API Gateway Model Routing Fix:** Fixed a critical issue where certain Gemini 3.1 Pro models were returning 404 errors due to incorrect internal mapping. The gateway now perfectly routes these requests to the correct backend endpoints.
- **Model Roster Cleanup:** Removed deprecated or non-functional models from the live API response so users only see and select verified, fully working models in the IDE.
- **Server File Sync Reliability (HTTP 500 Fix):** Fixed major terminal crashing issues when syncing workspaces to the cloud execution container. Directories and binary files are now correctly filtered out.
- **Terminal Layout Collapse Bug:** Fixed a bug where the terminal output area would collapse to 0 height inside the scrolling container, making logs invisible. It now maintains a fixed layout while scrolling gracefully.
- **Build System: kapt → KSP Migration:** Migrated Room's annotation processing from kapt to KSP, fixing incompatibility with AGP 9.2.1 + Gradle 9.4.1.
- **DPDP Act 2023 Compliance:** Added mandatory Privacy Policy & Parental Consent checkboxes and Account Deletion workflow.

## 🌍 Community

💬 Discord Server: https://discord.gg/HG9j5A9UdJ

Join the Novus IDE community to:

- Report bugs
- Suggest features
- Get beta updates
- Connect with other developers

## ⚠️ Public Beta

Novus IDE is currently in Public Beta.

Features may change, bugs may occur, and user feedback will directly influence future development.

## 👨‍💻 Founder

**Sunny**

Founder of Novus IDE, building a mobile-first development ecosystem that empowers anyone to code, build, and deploy software directly from a smartphone.

## 📄 License

All Rights Reserved © Novus IDE
