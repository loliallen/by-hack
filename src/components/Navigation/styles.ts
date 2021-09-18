import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(t => ({
    nav: {
        marginTop: t.spacing(4),
        display: 'flex',
        gap: t.spacing(4)
    },
}))