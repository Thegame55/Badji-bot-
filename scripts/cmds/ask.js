const axios = require('axios');

const Prefixes = [
  '/ai',
  'games',
  'Hervé',
  '+ai',
  'momy',
  'ai',
  'ask',
];

module.exports = {
  config: {
    name: "ask",
    version: 1.0,
    author: "OtinXSandip",
    longDescription: "AI",
    category: "ai",
    guide: {
      en: "{p} questions",
    },
  },
  onStart: async function () {},
  onChat: async function ({ api, event, args, message }) {
    try {
      
      const prefix = Prefixes.find((p) => event.body && event.body.toLowerCase().startsWith(p));
      if (!prefix) {
        return; // Invalid prefix, ignore the command
      }
      const prompt = event.body.substring(prefix.length).trim();
   if (!prompt) {
        await message.reply("🌊ЅℂᎯℛℒℰ𝒯🌊 \n\n𝗬𝗢𝗨𝗥 𝗤𝗨𝗘𝗦𝗧𝗜𝗢𝗡 𝗕𝗔𝗕𝗬........?");
        return;
      }


      const response = await axios.get(`https://sandipbaruwal.onrender.com/gpt?prompt=${encodeURIComponent(prompt)}`);
      const answer = response.data.answer;

 
    await message.reply({ body: ` 🌊ЅℂᎯℛℒℰ𝒯🌊 
______________________________  
${answer}
🍫𝗦𝗖𝗔𝗥𝗟𝗘𝗧🍫`,
});

   } catch (error) {
      console.error("Error:", error.message);
    }
  }
};
