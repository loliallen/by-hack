import React from 'react'
import { useStyles } from './style'
import clsx from "clsx"

type Props = {
    className?: string
}

export const MainContainer: React.FC<Props> = ({ children, className }) => {
    const classes = useStyles()
    return (
        <div className={className ? clsx(classes.component, className) : classes.component}>
            {children}
        </div>
    )
}
