<div align="center">

# 🧠 pi-hippocampus

**给 AI 装个海马体，治好它的健忘症。**

[![Pi Agent Extension](https://img.shields.io/badge/Pi%20Agent-Extension-blueviolet)](https://github.com/badlogic/pi-mono/tree/main/packages/coding-agent)
[![Version](https://img.shields.io/badge/version-5.7.1-blue)](https://github.com/lebonbruce/pi-hippocampus/releases)
[![License](https://img.shields.io/badge/license-MIT-green)](LICENSE)

[**English**](README.md) | [**简体中文**](README_ZH.md) | [**日本語**](README_JA.md)

</div>

---

## V5.7.1 新特性

### 🚀 零摩擦体验
- **秒级启动**：UI 界面瞬间加载，绝不阻塞。记忆摘要任务在您第一次输入后悄悄在后台进行。
- **自动代谢**：彻底移除了手动整理任务。系统会在后台静默合并碎片记忆，保持大脑清晰。

### 🧠 更聪明的本地检索
- **智能重排 (Rerank)**：先用向量检索 Top 100，再用本地 LLM 挑选出真正相关的 Top 10，准确率大幅提升。
- **意图理解**：即使只问一句“怎么用？”，系统也能结合上下文补全为完整的技术问题。
- **记忆晨报**：每次会话开始时，自动为您生成一份简报，回顾核心规则和昨天的进度。

---

## ✨ 核心功能

- **隐形感知**：无需特殊命令，自然对话中自动记忆重要信息。
- **类脑机制**：基于重要性、衰减曲线和联想链接工作。
- **绝对隐私**：所有数据（DB、Embedding、LLM 分析）全部留在本地。
- **跨项目直觉**：在 A 项目学到的坑，在 B 项目也能提醒你。

---

## ⚡️ 快速安装

### 🍎 Mac / Linux

```bash
mkdir -p ~/.pi/agent/extensions && \
cd ~/.pi/agent/extensions && \
rm -rf pi-hippocampus && \
git clone https://github.com/lebonbruce/pi-hippocampus.git && \
cd pi-hippocampus && \
npm install && \
echo "✅ 搞定！重启 pi 试试吧。"
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
Write-Host "✅ 搞定！重启 pi 试试吧。"
```

---

## 🤖 开启本地大脑（推荐）

1. 安装 [Ollama](https://ollama.com)。
2. `ollama pull qwen3:8b` (或者 deepseek, llama3)。
3. `ollama serve`。
4. 重启 Pi，它会自动检测并启用增强功能。

---

## 📜 License

MIT
