import OpenAI from 'openai';

const openAI = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser:true
});

export default openAI