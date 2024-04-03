const config = {
  name: "findskin",
  description: "find skin in Garena account",
  usage: "<name skin> | <key>",
  cooldown: 10,
  permissions: [2],
  credits: "Tan Phatt",
};

const langData = {
  vi_VN: {
    missingInput:
      "Vui lòng nhập tên skin và key/nví dụ: /findskin {name skin} | {key}",
  },
};

async function onCall({ message, args, getLang }) {
  const input = args.join(" ");
  if (input.length == 0) return message.reply(getLang("missingInput"));

  const text1 = input.split("|")[0];
  const text2 = input.split("|")[1];
}
