const cache = new Map();

export function getCached(text: string, lang: string) {
    return cache.get(text + lang);
}

export function setCache(text: string, lang: string, value: string) {
    cache.set(text + lang, value);
}
