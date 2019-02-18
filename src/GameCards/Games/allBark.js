import React, { Component } from 'react';
import './style.css'
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import InfoIcon from '@material-ui/icons/InfoOutlined';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';



const styles = theme => ({
  card: {
    maxWidth: 400,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
});

class GameCard extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    const { classes } = this.props;

    return (
      <Card className={classes.card}>
        <CardHeader
          avatar={
            <Avatar aria-label="Unity" className={classes.avatar}>
              U
            </Avatar>
          }
          // action={
          //   <IconButton>
          //     <MoreVertIcon />
          //   </IconButton>
          // }
          title="All Bark No Byte"
          subheader="Local Multiplayer"
        />
        <CardMedia
          className={classes.media}
          image="./static/images/noByte.png"
          title="Game Screenshot"
        />
        <CardContent>
          <Typography component="p">
           The First Dog to Corral 5 sheep WINS!
          </Typography>
        </CardContent>
        <CardActions className={classes.actions} disableActionSpacing>
         
          {/* <a href="http://users.csc.calpoly.edu/~tlmarsan/TextAdventure/">
          <IconButton aria-label="Info">
            <InfoIcon />
          </IconButton>
          </a> */}
          <a href="http://users.csc.calpoly.edu/~tlmarsan/All%20Bark_No%20Byte/">
            <IconButton aria-label="Play Game" onClick="">
              <PlayArrowIcon />
            </IconButton>
          </a>
          <IconButton
            className={classnames(classes.expand, {
              [classes.expandOpen]: this.state.expanded,
            })}
            onClick={this.handleExpandClick}
            aria-expanded={this.state.expanded}
            aria-label="Show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
          <CardContent>
           
            <Typography>
              You'll need to have Javascript enabled on your web browser.
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    );
  }
}


export default withStyles(styles)(GameCard);