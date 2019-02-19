import React, { Component } from 'react';
import './style.css'


import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';

import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import InfoIcon from '@material-ui/icons/InfoOutlined';
import IconButton from '@material-ui/core/IconButton';

import red from '@material-ui/core/colors/red';
import MovieIcon from '@material-ui/icons/Movie';

import PlayArrowIcon from '@material-ui/icons/PlayArrow';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const games = [
    {
        id: 0,
        title: "Violence might not be the answer.",
        subtitle: "A work of interactive fiction",
        imageURL: "./static/images/textSmallCover.jpg",
        imgText: "Game Screenshot",
        oneLiner: "Play without downloading anything by following the 'Play In-Browser' link, using the Quixe interpreter.",
        infoLink: "http://users.csc.calpoly.edu/~tlmarsan/TextAdventure/",
        catergoryLetter: "T",
        playLink: "http://users.csc.calpoly.edu/~tlmarsan/TextAdventure/play.html",
        summary: "You'll need to have Javascript enabled on your web browser.",
        longDesc: "Violence might not be the answer. was created with Inform and has IFID D1CF158C-A96C-46F5-B183-26F13E71B5AB. To play a work like this one, you need an interpreter program: many are available, among them Zoom for Mac OS X and for Unix; Windows Frotz or Windows Glulxe for Windows. The postcard was written by Andrew Plotkin and designed by Lea Albaugh. Or you can play without downloading anything by following the 'Play In-Browser' link, using the Quixe interpreter. You'll need to have Javascript enabled on your web browser."

    },
    {
        id: 1,
        title: "All Bark No Byte",
        subtitle: "Local Multiplayer",
        imageURL: "./static/images/noByte.png",
        imgText: "Game Screenshot",
        oneLiner: "The First Dog to Corral 5 sheep WINS!",
        catergoryLetter: "UT",
        movieLink: "http://users.csc.calpoly.edu/~tlmarsan/All%20Bark_No%20Byte/",
        summary: "You'll need to have Javascript enabled on your web browser."
    },
    {
        id: 3,
        title: "Family Tree",
        subtitle: "WebGL",
        imageURL: "./static/images/familyTree.png",
        imgText: "Game Screenshot",
        oneLiner: "Make it the Forest Floor!",
        catergoryLetter: "U",
        playLink: "http://users.csc.calpoly.edu/~tlmarsan/Family_Tree_WebGL_Build/",
        summary: "You'll need to have Javascript enabled on your web browser."
    },
    {
        id: 3,
        title: "AR Interactive Mural",
        subtitle: "WebGL",
        imageURL: "./static/images/arDemo.png",
        imgText: "Video Demo",
        oneLiner: "Watch the demo!",
        catergoryLetter: "AR",
        movieLink: "http://users.csc.calpoly.edu/~tlmarsan/AR_App_Demo.mov",
        summary: "You'll need to have Javascript enabled on your web browser."
    }
    
]

const styles = theme => ({
    container: {
        display: 'grid',
        gridTemplateColumns: 'repeat(12, 1fr)',
        gridGap: `${theme.spacing.unit * 3}px`,
    },
    paper: {
        padding: theme.spacing.unit,
        textAlign: 'center',
        color: theme.palette.text.secondary,
        whiteSpace: 'nowrap',
        marginBottom: theme.spacing.unit,
    },
    divider: {
        margin: `${theme.spacing.unit * 2}px 0`,
    },
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




class GameCards extends React.Component {
    state = { expanded: false };

    handleExpandClick = () => {
        this.setState(state => ({ expanded: !state.expanded }));
    };

    componentDidMount() {

    }

    openLink(link) {
        window.open(link)
    }

    render() {
        const { classes } = this.props;

        return (
            <div id="gameCardContainer">
                <div>
                    {/* <Typography variant="subtitle1" gutterBottom>
                        Material-UI Grid:
                    </Typography> */}
                    <Grid container spacing={16}>
                    
                        {games.map(game =>

                            <Grid item xs={12} sm={6} md={4} key={game.id}>
                                <Card className={classes.card}>
                                    <CardHeader
                                        avatar={
                                            <Avatar aria-label="Unity" className={classes.avatar}>
                                                {game.catergoryLetter}
                                            </Avatar>
                                        }
                                        action={
                                            <IconButton>
                                                {game.infoLink &&

                                                    <InfoIcon onClick={() => { this.openLink(game.infoLink) }} />

                                                }
                                            </IconButton>
                                        }
                                        title={game.title}
                                        subheader={game.subtitle}
                                    />
                                    <CardMedia
                                        className={classes.media}
                                        image={game.imageURL}
                                        title={game.imgText}
                                    />
                                    <CardContent>
                                        <Typography component="p">
                                            {game.oneLiner}
                                        </Typography>
                                    </CardContent>
                                    <CardActions className={classes.actions} disableActionSpacing>

                                        {game.playLink &&

                                            <IconButton aria-label="Play Game" onClick={() => { this.openLink(game.playLink) }} >
                                                <PlayArrowIcon />
                                            </IconButton>

                                        }

                                        {game.movieLink &&

                                            <IconButton aria-label="Watch Demo" onClick={() => { this.openLink(game.movieLink) }} >
                                                <MovieIcon />
                                            </IconButton>

                                        }

                                        {game.longDesc &&
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

                                        }



                                    </CardActions>


                                    {game.longDesc &&
                                        <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
                                            <CardContent>
                                                <Typography paragraph>
                                                    {game.longDesc}
                                                </Typography>
                                            </CardContent>
                                        </Collapse>

                                    }

                                </Card>
                            </Grid>
                        )}


                        {/* <Grid item xs={8}>
        e
        </Grid>
        <Grid item xs={4}>
        f
        </Grid> */}
                    </Grid>
                </div>

            </div>
        );
    }
}


export default withStyles(styles)(GameCards);