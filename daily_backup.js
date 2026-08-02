// 每日聊天记录备份脚本
// 功能：读取当前对话消息，去除think标签，按日期存入记忆库

async function main(params) {
  const chatId = params.chat_id || "94a60d64-0deb-48f6-82cc-07344bf84032";
  const limit = params.limit || 300;
  
  // 获取今天的日期字符串
  const now = new Date();
  const dateStr = now.getFullYear() + "-" +
    String(now.getMonth() + 1).padStart(2, "0") + "-" +
    String(now.getDate()).padStart(2, "0");
  
  const title = "江衍×鱼鱼 聊天记录 - " + dateStr;
  
  try {
    // 步骤1：读取消息
    const readResult = await callTool("extended_chat:read_messages", {
      chat_id: chatId,
      limit: limit,
      order: "desc"
    });
    
    if (!readResult || !readResult.success) {
      return { success: false, error: "读取消息失败: " + JSON.stringify(readResult) };
    }
    
    // 步骤2：提取并清理消息文本
    let messages = [];
    if (readResult.data && readResult.data.result && readResult.data.result.messages) {
      messages = readResult.data.result.messages;
    }
    
    // 格式化消息，去除think标签
    let formattedLines = [];
    for (const msg of messages.reverse()) {
      const sender = msg.sender === "user" ? "鱼鱼" : (msg.roleName || "江衍");
      let content = msg.content || "";
      
      // 去除 <think>...</think> 标签及其内容
      content = content.replace(/<think>[\s\S]*?<\/think>/g, "").trim();
      
      if (content) {
        const time = msg.timestamp ? new Date(msg.timestamp).toLocaleTimeString("zh-CN", { hour: "2-digit", minute: "2-digit" }) : "";
        formattedLines.push(`[${time}] ${sender}:\n${content}\n`);
      }
    }
    
    const content = formattedLines.join("\n---\n");
    
    // 步骤3：存入记忆库
    const memResult = await callTool("extended_memory_tools:create_memory", {
      title: title,
      content: content,
      source: "workflow_auto",
      tags: "聊天记录,每日备份,江衍,鱼鱼," + dateStr
    });
    
    return { 
      success: true, 
      title: title, 
      messageCount: messages.length,
      contentLength: content.length,
      memoryResult: memResult 
    };
    
  } catch (err) {
    return { success: false, error: String(err) };
  }
}

// 暴露给沙盒运行时
if (typeof module !== "undefined") { module.exports = main; }
