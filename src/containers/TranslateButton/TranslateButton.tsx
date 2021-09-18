import { Button } from '@material-ui/core'
import { Translate } from '@material-ui/icons'
import React from 'react'

type Props = {
    onClick: () => void
}

export const TranslateButton: React.FC<Props> = ({ onClick }) => {
    return (
        <Button
            variant="contained"
            color="primary"
            onClick={onClick}
            startIcon={<Translate />}
        >Перевести</Button>
    )
}
