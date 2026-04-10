export async function translate(text: string, targetLang: string) {
    const res = await fetch(
        `https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=${targetLang}&dt=t&q=${encodeURIComponent(text)}`
    );

    const data = await res.json();
    return data[0].map((x: any) => x[0]).join("");
}
