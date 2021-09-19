import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((t) => ({
  nav: {
    marginTop: t.spacing(4),
    display: "flex",
    gap: t.spacing(4),
    flexGap: t.spacing(4),
    [t.breakpoints.down("md")]: {
      gap: t.spacing(2),
      flexGap: t.spacing(2),
      flexDirection: "column",
    },
  },
}));
