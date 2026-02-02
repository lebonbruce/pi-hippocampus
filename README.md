<div align="center">

# 🧠 pi-hippocampus

**The Biological Memory Implant for Artificial Intelligence**

[![Pi Agent Extension](https://img.shields.io/badge/Pi%20Agent-Extension-blueviolet)](https://github.com/badlogic/pi-mono/tree/main/packages/coding-agent)
[![Version](https://img.shields.io/badge/version-4.2.2-blue)](https://github.com/lebonbruce/pi-memory/releases)
[![License](https://img.shields.io/badge/license-MIT-green)](LICENSE)

[**English**](README.md) | [**简体中文**](README_ZH.md) | [**日本語**](README_JA.md)

</div>

---

> *"I got tired of repeating myself to AI. So I gave it a brain."*

Hi, I'm an indie developer who uses AI coding tools daily.
While tools like Cursor and Windsurf are amazing, they all share one fatal flaw: **Amnesia**.
Every time I switch projects or restart a session, I have to re-teach the AI my coding style, my API keys, and my architectural decisions. 

**I built `pi-hippocampus` to solve my own pain.**
It transforms `pi-agent` from a stateless tool into a **Partner** that remembers.

---

## ✨ The Experience: Why I Built This

### 🧘‍♂️ Zero Friction
I didn't want another tool to manage. I wanted something invisible.
Once installed, **it just works**. It listens to my conversations in the background and silently encodes wisdom. I don't have to "save" anything manually. It feels like the agent finally *started paying attention*.

### 🧠 The End of "Amnesia"
I hated saying *"I told you this yesterday!"*.
Now, my local database is my **Second Brain**.
- It remembers my coding preferences (e.g., "I hate semi-colons") forever.
- It recalls bug fixes from 3 months ago when I hit a similar issue today.
- It feels **personal**.

### 🔮 Intuition (My Favorite Feature)
I realized that knowledge shouldn't be siloed.
If I solved a hard bug in `Project A`, I want that knowledge available when I'm working on `Project B`.
I built a **"Permeable Recall"** system that allows high-importance memories to pierce through project boundaries. It feels like **Intuition**.

---

## ⚡️ Installation

### One-Liner Implant (Mac/Linux/WSL)

```bash
mkdir -p ~/.pi/agent/extensions && cd ~/.pi/agent/extensions && git clone https://github.com/lebonbruce/pi-memory.git pi-hippocampus && cd pi-hippocampus && npm install && echo "✅ Hippocampus Implanted!"
```

*Restart your agent after installation.*

---

## 🧩 How It Works

I designed a bio-mimetic algorithm that mimics the human brain's **Hippocampus**:

- **Facts vs Rules**: It knows the difference between a static fact and a behavior-shaping rule.
- **Natural Decay**: It implements the *Ebbinghaus Forgetting Curve*. Trivial details fade; core principles stick.
- **Privacy**: All data lives in `~/.pi-memory/memories.db` on your machine. **No cloud. No subscriptions.**

$$ Score = Similarity \times (1 + \log(Access)) \times Importance \times Decay \times ContextPenalty $$

---

## 🤝 Let's Connect

I'm exploring how to bring this memory architecture to other tools (like Cursor or VSCode). If you are interested in this "Memory-First" AI approach, let's chat!

> **📩 Reach out:** [GitHub Issues](https://github.com/lebonbruce/pi-memory/issues)

---

<div align="center">
  <sub>Built with ❤️ by an indie dev for the community.</sub>
</div>
