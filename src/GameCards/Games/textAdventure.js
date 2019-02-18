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
            <Avatar aria-label="Recipe" className={classes.avatar}>
              T
            </Avatar>
          }
          action={
            <a href="http://users.csc.calpoly.edu/~tlmarsan/TextAdventure/">
          <IconButton aria-label="Info">
            <InfoIcon />
          </IconButton>
          </a>
          }
          title="Violence might not be the answer."
          subheader="A work of interactive fiction"
        />
        <CardMedia
          className={classes.media}
          image="./static/images/textSmallCover.jpg"
          title="Game Screenshot"
        />
        <CardContent>
          <Typography component="p">
            Play without downloading anything by following the 'Play In-Browser' link, using the Quixe interpreter.
          </Typography>
        </CardContent>
        <CardActions className={classes.actions} disableActionSpacing>
        <a href="http://users.csc.calpoly.edu/~tlmarsan/TextAdventure/play.html">
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
            <Typography paragraph>
              Violence might not be the answer. was created with Inform and has IFID D1CF158C-A96C-46F5-B183-26F13E71B5AB.
            </Typography>
            <Typography paragraph>
              To play a work like this one, you need an interpreter program: many are available, among them Zoom for Mac OS X and for Unix; Windows Frotz or Windows Glulxe for Windows.
            </Typography>
            <Typography paragraph>
              The postcard was written by Andrew Plotkin and designed by Lea Albaugh. Or you can play without downloading anything by following the 'Play In-Browser' link, using the Quixe interpreter.
            </Typography>
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