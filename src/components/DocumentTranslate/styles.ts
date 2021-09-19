import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((t) => ({
  container: {
    display: "flex",
    gap: t.spacing(4),
    flexGap: t.spacing(4),
    [t.breakpoints.down("md")]: {
      flexDirection: "column",
      gap: t.spacing(2),
      flexGap: t.spacing(2),
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
  transfer_area: {
    position: "relative",
    height: 400,
  },
  transfer_area_upload: {
    color: t.palette.secondary.main,
    "&:hover": {
      cursor: "pointer",
    },
  },
  transfer_area_icon: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    display: "flex",
    justifyItems: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  transfer_area_icon_icons: {
    display: "flex",
    alignItems: "center",
  },
}));
