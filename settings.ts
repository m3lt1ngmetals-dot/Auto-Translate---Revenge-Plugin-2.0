export default {
    targetLanguage: {
        type: "string",
        default: "en",
        description: "Language to translate messages to"
    },

    showOriginal: {
        type: "boolean",
        default: true,
        description: "Show original message under translation"
    },

    enabledUsers: {
        type: "array",
        default: []
    }
};
