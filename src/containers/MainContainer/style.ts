import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(t => ({
    component: {
        position: 'relative',
        marginTop: t.spacing(2),
        backgroundColor: t.palette.grey[200],
        padding: t.spacing(1,2),
    }
}))