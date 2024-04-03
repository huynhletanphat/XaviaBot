const config = {
  name: "create",
  description: "create Garena account",
  ussage: "",
  cooldown: 15,
  permissions: [2],
  credits: "Tphat",
};

const langData = {
  vi_VN: {
    missingInput: "Vui lòng nhập key\nví dụ: /create {your key}",
    notFound: "Key không tìm thấy",
    results: "user: {account}\npass: {password}\nskin: {skin}\ntime: {time}",
    error: "Có lỗi xảy ra, Tphat stupid",
  },
};

async function onCall({ message, args, getLang }) {
  try {
    const input = args.join("").toLowerCase();
    if (!input) return message.reply(getLang("missingInput"));
    const encodedInput = encodeURIComponent(input);
    const res = await global.GET(
      `https://p57pjr-2000.csb.app/create?key=${encodedInput}`,
    );
    const CreateData = res.data;
    if (!CreateData) return message.reply(getLang("notFound"));

    return message.reply(
      getLang("results", {
        password: CreateData.password,
        account: CreateData.account,
        skin: CreateData.skin,
        time: CreateData.time,
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
