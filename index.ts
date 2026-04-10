import { translate } from "./translator";
import settings from "./settings";

export default {
    name: "AutoTranslate",

    async onMessage(message: any) {
        const userId = message.author.id;

        if (!settings.enabledUsers.includes(userId)) return;

        const translated = await translate(
            message.content,
            settings.language
        );

        message.content = translated;
    }
};
