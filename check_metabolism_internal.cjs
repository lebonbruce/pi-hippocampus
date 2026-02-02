const Database = require('better-sqlite3');
const path = require('path');
const os = require('os');

const DB_PATH = path.join(os.homedir(), ".pi-hippocampus", "hippocampus.db");

try {
  const db = new Database(DB_PATH);

  console.log("=== 🧠 记忆代谢 (Metabolism) 检查报告 ===\n");

  // 1. 检查是否有由整理生成的记忆 (source = 'consolidation_v5.7')
  const consolidatedCount = db.prepare(`
    SELECT count(*) as count FROM memories WHERE source LIKE 'consolidation%'
  `).get();
  console.log(`1. 代谢生成的主记忆数量: ${consolidatedCount.count} 条`);

  // 2. 查看最近生成的 3 条代谢记忆
  const recentConsolidated = db.prepare(`
    SELECT id, content, created_at, importance FROM memories 
    WHERE source LIKE 'consolidation%' 
    ORDER BY created_at DESC LIMIT 3
  `).all();

  if (recentConsolidated.length > 0) {
    console.log("   [最近生成的代谢记忆]:");
    recentConsolidated.forEach(m => {
      console.log(`   - [${new Date(m.created_at).toLocaleString()}] (Imp:${m.importance}) ${m.content.substring(0, 60)}...`);
    });
  } else {
    console.log("   (暂无最近生成的代谢记忆)");
  }
  console.log("");

  // 3. 检查是否有被代谢掉（归档）的碎片
  const archivedCount = db.prepare(`
    SELECT count(*) as count FROM memories 
    WHERE status = 'archived' AND change_reason LIKE 'Consolidated%'
  `).get();
  console.log(`2. 被吞噬(归档)的碎片数量: ${archivedCount.count} 条`);

  // 4. 查看最近被吞噬的 3 条碎片
  const recentArchived = db.prepare(`
    SELECT id, content, updated_at, change_reason FROM memories 
    WHERE status = 'archived' AND change_reason LIKE 'Consolidated%'
    ORDER BY updated_at DESC LIMIT 3
  `).all();

  if (recentArchived.length > 0) {
    console.log("   [最近被代谢的碎片]:");
    recentArchived.forEach(m => {
      console.log(`   - [${new Date(m.updated_at).toLocaleString()}] ${m.content.substring(0, 50)}... -> ${m.change_reason}`);
    });
  }
  console.log("");

  // 5. 检查代谢产生的突触连接
  const linkCount = db.prepare(`
    SELECT count(*) as count FROM memory_links WHERE type = 'consolidation'
  `).get();
  console.log(`3. 代谢建立的神经连接: ${linkCount.count} 条`);

  // 6. 检查自动晋升（Promoted）的记忆
  // 我们无法直接区分哪次是自动晋升的，但可以查看高频访问且重要性高的事件
  const promotedCandidates = db.prepare(`
    SELECT count(*) as count FROM memories 
    WHERE type = 'event' AND importance >= 5 AND access_count > 5
  `).get();
  console.log(`4. 可能已晋升的高频事件: ${promotedCandidates.count} 条`);
  
  // 7. 检查数据库文件大小
  const fs = require('fs');
  const stats = fs.statSync(DB_PATH);
  console.log(`\n5. 数据库文件大小: ${(stats.size / 1024 / 1024).toFixed(2)} MB`);

} catch (error) {
  console.error("数据库检查失败:", error);
}
