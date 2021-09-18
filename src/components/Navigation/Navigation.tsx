import { Button } from '@material-ui/core'
import { FindInPageOutlined, MicOutlined, TranslateOutlined } from '@material-ui/icons'
import React from 'react'
import { useHistory } from 'react-router'
import { useStyles } from './styles'


export const Navigation = () => {
    const history = useHistory()
    const classes = useStyles()
    const handleClick = (linkTo: string) => () => {
        history.push(linkTo)
    }
    return (
        <nav className={classes.nav}>
            <Button
                variant="contained"

                startIcon={<TranslateOutlined />}
                onClick={handleClick('/')}
            >
                Текстовой перевод
            </Button>
            <Button
                variant="contained"

                startIcon={<MicOutlined />}
                onClick={handleClick('/audio')}
            >
                Аудио перевод
            </Button>
            <Button
                variant="contained"

                startIcon={<FindInPageOutlined />}
                onClick={handleClick('/doc')}
            >
                Перевод документов
            </Button>
        </nav>
    )
}
