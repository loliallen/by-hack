import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(t => ({
    main: {
        padding: "0px 20%",
        minHeight: "100%",
        [t.breakpoints.down('md')]: {
            padding: "0px 5%",
        }
    }
}))