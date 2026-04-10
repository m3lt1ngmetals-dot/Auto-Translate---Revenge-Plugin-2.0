import settings from "./settings";
import { translate } from "./translator";
import { getCached, setCache } from "./cache";

export default {
    name: "AutoTranslate",

    async onMessage(message: any) {

        const user = message.author.id;

        if (!settings.enabledUsers.includes(user)) return;

        const original = message.content;

        if (!original) return;

        const cached = getCached(original, settings.targetLanguage);

        if (cached) {
            message.content = cached;
            return;
        }

        const result = await translate(original, settings.targetLanguage);

        if (result.detected === settings.targetLanguage) return;

        let final = result.translated;

        if (settings.showOriginal) {
            final += `\n\n(Original: ${original})`;
        }

        setCache(original, settings.targetLanguage, final);

        message.content = final;
    }
};
