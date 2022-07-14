import {
  Card,
  makeStyles,
  Avatar,
  Button,
  CardActions,
  CardContent,
  CardHeader,
  Typography,
} from "@material-ui/core";
import { ArrowRightAlt, ArrowRightSharp } from "@mui/icons-material";
import { Link } from "react-router-dom";

const blueButtonColor = "rgb(6, 6, 49)";

const useStyles = makeStyles({
  root: {
    minWidth: 300,
    maxWidth: 500,
    backgroundColor: blueButtonColor,
    margin: "20px",
    marginLeft: "20px",
  },
  avatar: {
    background: "gray",
  },
  priceName: {
    color: "gray",
  },
  deleteButton: {},
});
function ACard() {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={<Avatar className={classes.avatar}>C</Avatar>}
        title="Flight Name"
      />
      <CardContent>
        <Typography component="i">From</Typography>
        <Typography variant="h4">
          Start <ArrowRightAlt /> Stop
        </Typography>
        <Typography color="primary">13 july 2020</Typography>
        <Typography>3 hours</Typography>
        <Typography className={classes.priceName}>₦30,00</Typography>
      </CardContent>
      <CardActions>
        <Button size="small" className={classes.bookNowButton}>
          Update
        </Button>
        <Button size="small" className={classes.deleteButton}>
          Delete
        </Button>
        <Link to={"/vieworder"}>
          <Button size="small">
            orders 10
            <ArrowRightSharp />
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}

export default ACard;
