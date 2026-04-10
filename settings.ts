export default {
    language: {
        type: "string",
        default: "en",
        description: "Language to translate messages into"
    },

    enabledUsers: {
        type: "array",
        default: [],
        description: "Users whose messages will be auto translated"
    }
};
