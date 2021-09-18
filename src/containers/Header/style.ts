import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(t => ({
    header: {
        height: 80,
        backgroundColor: t.palette.primary.main,
        display: 'flex',
        alignItems: 'center',
        paddingLeft: t.spacing(3)
    }
}))