const TATAR_DIFF_ABC = ["ә","җ","ң","ө","ү","һ"]

export type Langs = "ru"|"tat"

export const TRANSLATE_LANGS: Record<Langs, string> = {
    'ru': 'Русский',
    'tat': 'Татарский'
}

export const getLang = (str: string):Langs => {
    if (TATAR_DIFF_ABC.some(s => str.includes(s)))
        return 'tat'
    return 'ru'
}

export const getTranslateLang = (lang: Langs | null) => {
    if(!lang)
        return null
    if (lang === 'tat')
        return 'ru'
    return 'tat'
}