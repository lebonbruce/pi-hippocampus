<div align="center">

# 🧠 pi-hippocampus

**Give your AI a hippocampus. Cure its amnesia.**

[![Pi Agent Extension](https://img.shields.io/badge/Pi%20Agent-Extension-blueviolet)](https://github.com/badlogic/pi-mono/tree/main/packages/coding-agent)
[![Version](https://img.shields.io/badge/version-5.7.1-blue)](https://github.com/lebonbruce/pi-hippocampus/releases)
[![License](https://img.shields.io/badge/license-MIT-green)](LICENSE)

[**English**](README.md) | [**简体中文**](README_ZH.md) | [**日本語**](README_JA.md)

</div>

---

## What's New in V5.7.1

### 🚀 Zero-Friction Performance
- **Non-Blocking Startup**: The UI loads instantly. Memory summarization happens quietly in the background after your first interaction.
- **Auto-Metabolism**: Memory consolidation now runs silently in the background. No more manual cleanup tasks.

### 🧠 Smarter Retrieval (Local LLM)
- **Rerank**: Vector search retrieves 100 candidates, then Local LLM selects the top 10 most relevant ones based on true intent.
- **Query Enhancement**: Automatically expands short queries like "how to use?" into full context-aware searches.
- **Morning Briefing**: Generates a concise summary of your core memories and recent work when you start a session.

---

## ✨ Core Features

- **Invisible**: Just chat. It remembers rules, facts, and events automatically.
- **Brain-Like**: Uses importance, decay, and associative links.
- **Local Privacy**: All data (DB + Embeddings + LLM analysis) stays on your machine.
- **Cross-Project**: Learns from Project A and applies it to Project B.

---

## ⚡️ Quick Install

### 🍎 Mac / Linux

```bash
mkdir -p ~/.pi/agent/extensions && \
cd ~/.pi/agent/extensions && \
rm -rf pi-hippocampus && \
git clone https://github.com/lebonbruce/pi-hippocampus.git && \
cd pi-hippocampus && \
npm install && \
echo "✅ Done! Restart pi to activate."
```

### 🪟 Windows (PowerShell)

```powershell
$p="$env:USERPROFILE\.pi\agent\extensions"
New-Item -ItemType Directory -Force -Path $p
cd $p
Remove-Item pi-hippocampus -Recurse -Force -ErrorAction SilentlyContinue
git clone https://github.com/lebonbruce/pi-hippocampus.git
cd pi-hippocampus
npm install
Write-Host "✅ Done! Restart pi to activate."
```

---

## 🤖 Local LLM Setup (Recommended)

1. Install [Ollama](https://ollama.com).
2. `ollama pull qwen3:8b` (or deepseek, llama3).
3. `ollama serve`.
4. Restart Pi. It will auto-detect and enable smart features.

---

## 📜 License

MIT
