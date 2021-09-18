import { IconButton, Select, TextField, Tooltip, Typography } from '@material-ui/core'
import { ImportExport } from '@material-ui/icons'
import React, { useState } from 'react'
import { MainContainer } from '../../containers/MainContainer'
import { Langs, getLang, getTranslateLang, TRANSLATE_LANGS } from './helpers'
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
    return (
        <MainContainer>

            <Tooltip title="Switch">
                <IconButton className={classes.switch_icon} onClick={switchLangs}>
                    <ImportExport style={{ transform: 'rotate(90deg)' }} fontSize="medium" />
                </IconButton>
            </Tooltip>
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
