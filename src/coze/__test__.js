import { getCozeReply } from './index.js'

// 测试 Coze api
async function test() {
  const message = await getCozeReply("你好!")
  console.log('🌸🌸🌸 / message: ', message)
}
test()