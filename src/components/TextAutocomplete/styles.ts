import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((t) => ({
  container: {
    display: "flex",
    gap: t.spacing(4),
    flexGap: t.spacing(4),
    [t.breakpoints.down("md")]: {
      gap: t.spacing(2),
      flexGap: t.spacing(2),
      flexDirection: "column",
    },
  },
  input: {
    padding: t.spacing(1),
    flex: 1,
    border: `1px solid ${t.palette.primary.main}`,
  },
  output: {
    padding: t.spacing(1),
    flex: 1,
    border: `1px solid ${t.palette.primary.main}`,
  },
  switch_icon: {
    borderRadius: 0,
    border: `1px solid ${t.palette.primary.main}`,
    backgroundColor: "#fff",
    position: "absolute",
    transform: "translateX(-50%)",
    top: t.spacing(3),
    left: "50%",
    zIndex: 1,
    padding: 0,
    "&:hover": {
      backgroundColor: "#fff",
    },
    [t.breakpoints.down("md")]: {
      rigth: 0,
      top: "50%",
      transform: "translate(-50%, -50%)",
    },
  },
}));
