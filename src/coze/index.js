
import axios from 'axios'
import dotenv from 'dotenv'

const env = dotenv.config().parsed // 环境参数

// 获取 Coze 的回复
export async function getCozeReply(content) {
  console.log('🚀🚀🚀 / content', content)
  
  // 调用 Coze 的接口
  try {
    const response = await axios.post('https://api.coze.com/open_api/v2/chat', {
      conversation_id: "123",
      bot_id: `${env.COZE_BOT_ID}`,
      user: "andy1000d",
      query: content,
      stream: false
    }, {
      headers: {
        'Authorization': `Bearer ${env.COZE_API_KEY}`,
        'Content-Type': 'application/json',
        'Accept': '*/*',
        'Host': 'api.coze.com',
        'Connection': 'keep-alive',
      }
    });
    
    // Coze 的回复
    const reply = response.data.messages[0].content.toString()
    console.log('🚀🚀🚀 / reply', reply)
    return reply
  } catch (error) {
    console.error(error);
  }
  
}
