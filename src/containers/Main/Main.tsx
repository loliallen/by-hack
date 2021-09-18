import React from 'react'
import { useStyles } from './style'

export const Main: React.FC = ({
    children
}) => {
    const classes = useStyles()
    return (
        <main className={classes.main}>
            {children}
        </main>
    )
}
