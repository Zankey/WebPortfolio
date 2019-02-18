import React, { Component } from 'react';
import './style.css'

import TextAdventureGameCard from './Games/textAdventure'
import AllBarkGameCard from './Games/allBark'
import FamilyTreeGameCard from './Games/familyTree'
import ARDemoGameCard from './Games/arDemo'

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';


import GamesList from './GamesList.json'

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
});




class GameCards extends React.Component {
    state = { expanded: false };

    handleExpandClick = () => {
        this.setState(state => ({ expanded: !state.expanded }));
    };

    render() {
        const { classes } = this.props;

        return (
            <div id="gameCardContainer">
                <div>
                    {/* <Typography variant="subtitle1" gutterBottom>
                        Material-UI Grid:
                    </Typography> */}
                    <Grid container spacing={16}>
                        <Grid item xs={12} sm={6} md={4}>
                            <TextAdventureGameCard />

                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <AllBarkGameCard />

                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <FamilyTreeGameCard />

                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <ARDemoGameCard />

                        </Grid>
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


export default GameCards;