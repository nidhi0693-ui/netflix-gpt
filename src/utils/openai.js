import OpenAI from "openai";
import { OPENAI_KEY } from "./constants";

const openai = new OpenAI({
    apiKey: OPENAI_KEY,
    dangerouslyAllowBrowser: true  // for secret key
})

export default openai;