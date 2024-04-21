const config = {
  name: "gpt",
  description: "a simple model chat gpt 3.5",
  usage: "<text>",
  version: "1.0.0",
  credits: "Tan Phatt",
  cooldown: 10,
};

const langData = {
  vi_VN: {
    result: "{gpt4}",
    error: "da co loi xay ra, tphat stupid!",
    missingInput: "vui long nhap text",
    notFound: "khong tim thay ket qua, vui long thu lai bang text khac",
  },
};

async function onCall({ message, getLang, args }) {
  try {
    const input = args.join(" ");
    if (!input) return message.reply(getLang("missingInput"));
    const encodedInput = encodeURIComponent(input);
    const res = await global.GET(
      `https://deku-rest-api.replit.app/gpt4?prompt=${encodedInput}&uid=tphatthankyou`,
    );

    const GPTdata = res.data;

    if (!GPTdata) return message.reply(getLang("notFound"));

    return message.reply(
      getLang("result", {
        gpt4: GPTdata.gpt4,
      }),
    );
  } catch (e) {
    console.error(e);
    message.reply(getLang("error"));
  }
}

export default {
  config,
  langData,
  onCall,
};
