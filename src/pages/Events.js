import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Slide from 'react-reveal/Slide';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    width: '700px'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    textAlign: 'center',
    fontWeight: 'bold'
  },
  pos: {
    marginBottom: 12,
  },
  heading: {
    color:'grey',
    fontWeight: 'bold',
  },
  description: {
      textAlign: 'center'
  },
  topics: {
      fontWeight: 'bold',

  },
  list: {
      color: 'grey',
      fontSize: '1rem'
  }
});

const Events = () =>  {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
      <div>
      <div style={{paddingTop:'30px',
      paddingLeft:'330px'}}><Typography variant='h4' className={classes.heading}>We have a history of conducting successful and useful events!</Typography></div>
      <div style={{paddingTop:'50px', paddingLeft:'600px'}}><Typography variant='h4' className={classes.heading}>Upcoming Events!</Typography></div>
      <br/>
      <br/>
      <div className='row' style={{paddingLeft:'50px'}}>
      <div className='col s6'>
      <Slide bottom>
      <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} variant='h4' style={{paddingTop:'10px'}}>
        Full Stack Bootcamp
        </Typography>
       <Typography className={classes.description} variant='h6' style={{paddingTop:'10px'}}>
       We will have discussions and a problem solving oriented approach, we will have live youtube sessions, and a display of awesome projects at the end of the Bootcamp, something worth for the resume/CV. Additionally, for those who successfully submit their projects will get Google Developers Certified certificates and many more swags (pens, stickers, T-shirts, and whatnot). So what are you waiting for? Fill in the form and register yourself! See the attached flyer for the complete timeline!
        </Typography>
        <Typography className={classes.topics} variant='h6' style={{paddingTop:'10px'}}>
        Topics Covered:
        </Typography>
        <Typography className={classes.list} variant='h6' style={{paddingTop:'10px'}}>
        Web Development
        </Typography>
        <Typography className={classes.list} variant='h6' style={{paddingTop:'10px'}}>
        Blockchain
        </Typography>
        <Typography className={classes.list} variant='h6' style={{paddingTop:'10px'}}>
        Software Development
        </Typography>
        <Typography className={classes.list} variant='h6' style={{paddingTop:'10px'}}>
        Machine Learning
        </Typography>
        <Typography className={classes.list} variant='h6' style={{paddingTop:'10px'}}>
        Data Structures and Algorithms
        </Typography>
        <Typography className={classes.list} variant='h6' style={{paddingTop:'10px'}}>
       IOT
        </Typography>
      </CardContent>
      <CardActions style={{justifyContent: 'center'}}>
        <Button size="large" color='primary' variant="outlined">Register</Button>
      </CardActions>
    </Card>
    </Slide>
    </div>
    <div className='col s6'>
    <Slide bottom>
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} variant='h4' style={{paddingTop:'10px'}}>
        Full Stack Bootcamp
        </Typography>
       <Typography className={classes.description} variant='h6' style={{paddingTop:'10px'}}>
       We will have discussions and a problem solving oriented approach, we will have live youtube sessions, and a display of awesome projects at the end of the Bootcamp, something worth for the resume/CV. Additionally, for those who successfully submit their projects will get Google Developers Certified certificates and many more swags (pens, stickers, T-shirts, and whatnot). So what are you waiting for? Fill in the form and register yourself! See the attached flyer for the complete timeline!
        </Typography>
        <Typography className={classes.topics} variant='h6' style={{paddingTop:'10px'}}>
        Topics Covered:
        </Typography>
        <Typography className={classes.list} variant='h6' style={{paddingTop:'10px'}}>
        Web Development
        </Typography>
        <Typography className={classes.list} variant='h6' style={{paddingTop:'10px'}}>
        Blockchain
        </Typography>
        <Typography className={classes.list} variant='h6' style={{paddingTop:'10px'}}>
        Software Development
        </Typography>
        <Typography className={classes.list} variant='h6' style={{paddingTop:'10px'}}>
        Machine Learning
        </Typography>
        <Typography className={classes.list} variant='h6' style={{paddingTop:'10px'}}>
        Data Structures and Algorithms
        </Typography>
        <Typography className={classes.list} variant='h6' style={{paddingTop:'10px'}}>
       IOT
        </Typography>
      </CardContent>
      <CardActions style={{justifyContent: 'center'}}>
        <Button size="large" color='primary' variant="outlined">Register</Button>
      </CardActions>
    </Card>
    </Slide>
    </div>
    <div className='col s6' style={{paddingTop:'40px'}}>
      <Slide bottom>
      <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} variant='h4' style={{paddingTop:'10px'}}>
        Full Stack Bootcamp
        </Typography>
       <Typography className={classes.description} variant='h6' style={{paddingTop:'10px'}}>
       We will have discussions and a problem solving oriented approach, we will have live youtube sessions, and a display of awesome projects at the end of the Bootcamp, something worth for the resume/CV. Additionally, for those who successfully submit their projects will get Google Developers Certified certificates and many more swags (pens, stickers, T-shirts, and whatnot). So what are you waiting for? Fill in the form and register yourself! See the attached flyer for the complete timeline!
        </Typography>
        <Typography className={classes.topics} variant='h6' style={{paddingTop:'10px'}}>
        Topics Covered:
        </Typography>
        <Typography className={classes.list} variant='h6' style={{paddingTop:'10px'}}>
        Web Development
        </Typography>
        <Typography className={classes.list} variant='h6' style={{paddingTop:'10px'}}>
        Blockchain
        </Typography>
        <Typography className={classes.list} variant='h6' style={{paddingTop:'10px'}}>
        Software Development
        </Typography>
        <Typography className={classes.list} variant='h6' style={{paddingTop:'10px'}}>
        Machine Learning
        </Typography>
        <Typography className={classes.list} variant='h6' style={{paddingTop:'10px'}}>
        Data Structures and Algorithms
        </Typography>
        <Typography className={classes.list} variant='h6' style={{paddingTop:'10px'}}>
       IOT
        </Typography>
      </CardContent>
      <CardActions style={{justifyContent: 'center'}}>
        <Button size="large" color='primary' variant="outlined">Register</Button>
      </CardActions>
    </Card>
    </Slide>
    </div>
    <div className='col s6' style={{paddingTop:'40px'}}>
      <Slide bottom>
      <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} variant='h4' style={{paddingTop:'10px'}}>
        Full Stack Bootcamp
        </Typography>
       <Typography className={classes.description} variant='h6' style={{paddingTop:'10px'}}>
       We will have discussions and a problem solving oriented approach, we will have live youtube sessions, and a display of awesome projects at the end of the Bootcamp, something worth for the resume/CV. Additionally, for those who successfully submit their projects will get Google Developers Certified certificates and many more swags (pens, stickers, T-shirts, and whatnot). So what are you waiting for? Fill in the form and register yourself! See the attached flyer for the complete timeline!
        </Typography>
        <Typography className={classes.topics} variant='h6' style={{paddingTop:'10px'}}>
        Topics Covered:
        </Typography>
        <Typography className={classes.list} variant='h6' style={{paddingTop:'10px'}}>
        Web Development
        </Typography>
        <Typography className={classes.list} variant='h6' style={{paddingTop:'10px'}}>
        Blockchain
        </Typography>
        <Typography className={classes.list} variant='h6' style={{paddingTop:'10px'}}>
        Software Development
        </Typography>
        <Typography className={classes.list} variant='h6' style={{paddingTop:'10px'}}>
        Machine Learning
        </Typography>
        <Typography className={classes.list} variant='h6' style={{paddingTop:'10px'}}>
        Data Structures and Algorithms
        </Typography>
        <Typography className={classes.list} variant='h6' style={{paddingTop:'10px'}}>
       IOT
        </Typography>
      </CardContent>
      <CardActions style={{justifyContent: 'center'}}>
        <Button size="large" color='primary' variant="outlined">Register</Button>
      </CardActions>
    </Card>
    </Slide>
    </div>
    </div>
    </div>
  );
}
export default Events;