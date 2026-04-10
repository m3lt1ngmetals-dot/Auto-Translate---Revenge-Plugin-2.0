export async function translate(text: string, target: string) {

    const url =
        "https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=" +
        target +
        "&dt=t&q=" +
        encodeURIComponent(text);

    const res = await fetch(url);
    const data = await res.json();

    return {
        translated: data[0].map((t: any) => t[0]).join(""),
        detected: data[2]
    };
}
