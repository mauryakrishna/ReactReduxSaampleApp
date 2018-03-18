import React from 'react';
import { object, func } from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

const styles = {
    card: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        marginBottom: 16,
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    }
};

function ArticleCard(props) {
    return (
        <div>
            <Card>
                <CardContent>
                    <Typography gutterBottom variant="headline" component="h2">
                        {props.articleDetails.title}
                    </Typography>
                    <Typography component="p">
                        {props.articleDetails.body}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" color="primary" onClick={props.onButtonClick.bind(this, props.articleDetails.id)}>
                        Read
                    </Button>
                </CardActions>
            </Card>
        </div>
    );
}

ArticleCard.propTypes = {
    articleDetails: object,
    onButtonClick: func
};

export default withStyles(styles)(ArticleCard);