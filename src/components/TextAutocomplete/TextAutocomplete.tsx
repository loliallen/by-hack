import { Button, IconButton, Select, TextField, Tooltip, Typography } from '@material-ui/core'
import { ImportExport } from '@material-ui/icons'
import React, { useEffect, useState } from 'react'
import { MainContainer } from '../../containers/MainContainer'
import { Langs, getLang, getTranslateLang, TRANSLATE_LANGS, transalte, summary } from './helpers'
import { useStyles } from './styles'

export const TextAutocomplete = () => {
    const classes = useStyles()
    const [lang, setLang] = useState<Langs | null>(null)
    const [text, setText] = useState<string>("")
    const [translatedText, setTranslatedText] = useState<string>("")
    const handleChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value)
        setLang(getLang(e.target.value))
    }

    const switchLangs = () => {
        setLang(p => getTranslateLang(p))
        setText(translatedText)
    }
    const translatedLang = getTranslateLang(lang)

    const handleSummary = async () => {
        if (lang && text) {
            try {
                let res = await summary(lang, text)
                if (!res)
                    return
                setTranslatedText(res.translation_text)
            } catch (e) {
                console.error(e)
            }
        }
    }

    const handleTranslate = async ({ lang, text }: { lang: Langs, text: string }) => {
        try {
            let res = await transalte(lang, text)
            if (!res)
                return
            setTranslatedText(res.translation_text)
        } catch (e) {
            console.error(e)
        }
    }

    useEffect(() => {
        if (lang && text)
            handleTranslate({ lang, text })
    }, [lang, text])


    return (
        <MainContainer>

            <Tooltip title="Switch">
                <IconButton className={classes.switch_icon} onClick={switchLangs}>
                    <ImportExport style={{ transform: 'rotate(90deg)' }} fontSize="medium" />
                </IconButton>
            </Tooltip>
            <Button onClick={handleSummary}>Создать описание</Button>
            <div className={classes.container}>
                <div className={classes.input}>
                    <Typography>
                        {lang && TRANSLATE_LANGS[lang]}
                    </Typography>
                    <TextField label="Введите текст / Текстны языгыз" variant="outlined" multiline value={text} onChange={handleChangeText} fullWidth />
                </div>
                <div className={classes.output}>
                    <Typography>
                        {translatedLang && TRANSLATE_LANGS[translatedLang]}
                    </Typography>
                    <TextField label="Перевод / Тәрҗемә" variant="outlined" multiline value={translatedText} fullWidth />
                </div>
            </div>
        </MainContainer>
    )
}
