import { Typography } from "@material-ui/core"
import { useStyles } from './style'

export const Header = () => {
    const classess = useStyles()
    return (
        <header className={classess.header}>
            <Typography style={{ color: 'white' }} variant="h5" color="textSecondary">Brick/тәрҗемәче</Typography>
        </header>
    )
}
