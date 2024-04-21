const config = {
  name: "couple",
  aliases: ["avtcouple", "acp"],
  description: "get avatar couple",
  usage: "",
  version: "1.0.0",
  credits: "Tan Phat",
  cooldown: 5,
};

async function onCall({ message }) {
  try {
    const response = await global.GET(`https://deku-rest-api.replit.app/cdp`);
    const result = response.data.result;

    // Lấy đường dẫn ảnh one và two từ result
    const imgStream1 = await global.getStream(result.one);
    const imgStream2 = await global.getStream(result.two);

    // Gửi ảnh one dưới dạng phản hồi cho message
    message.reply({
      Stream: imgStream1,
    });
  } catch (error) {
    // Xử lý lỗi nếu có
    console.error(error);
    message.reply("Error!");
  }
}

export default {
  config,
  onCall,
};
