import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(t => ({
    form: {
        display: 'flex',
        border: "1px solid",
        borderColor: t.palette.primary.main,
        justifyContent: 'space-between',
        alignItems: 'center',
        '& > div': {
            flex: 1
        }
    },
    response_form: {
        padding: t.spacing(0,1),
        marginTop: t.spacing(2)
    },
    input: {
        flex: 1,
        display: 'flex',
        alignItems: 'center'
    },
    slider: {
        width: 125
    }
}))