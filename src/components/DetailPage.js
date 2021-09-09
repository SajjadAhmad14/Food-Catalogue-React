/* eslint-disable react/prop-types */
// const DetailPage = (props) => {
// eslint-disable-next-line react/prop-types
// eslint-disable-next-line react/destructuring-assignment
//   console.log(props.location.state);
//   return (
//     <div className="details">
//       This is details page
//     </div>
//   );
// };

// export default DetailPage;

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 500,
  },
  media: {
    height: 200,
  },
});

const MediaCard = (props) => {
  const classes = useStyles();
  // eslint-disable-next-line react/destructuring-assignment
  const { food } = props.location.state;
  return (
    <div className="details-card">
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={food.strMealThumb}
            title="Food"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {food.strMeal}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque erat nunc, pellentesque in varius sit amet,
              sollicitudin eget ante. Vivamus lobortis tellus arcu,
              non tempor mi accumsan bibendum. Donec faucibus urna ut orci molestie,
              eget scelerisque enim iaculis. Aenean vulputate enim at laoreet bibendum.
              Donec pellentesque mi libero, et interdum arcu lobortis vitae.
              Quisque mauris ex, rutrum nec erat id, viverra vehicula purus.
              Ut quis velit suscipit, rutrum turpis in, ultrices sapien.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default MediaCard;
