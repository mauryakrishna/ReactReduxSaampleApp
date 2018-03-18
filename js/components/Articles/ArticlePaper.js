import React from 'react';
import { object } from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';

const styles = {
    root: {
        paddingTop: 16,
        paddingBottom: 16,
        marginTop: 10
    }
};

function ArticlePaper(props) {
    return (
        <div>
            <Paper elevation={4}>
                <Typography variant="headline" component="h3">
                    {props.data.title}
                </Typography>
                <Typography component="p">
                    {props.data.body}
                </Typography>
            </Paper>
        </div>
    );
}

ArticlePaper.propTypes = {
    data: object
};

export default withStyles(styles)(ArticlePaper);