import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';

const Cards = (props) => {
  const { name, bio, image, dep_url, repo_url, tech } = props.project;
  const theme = makeStyles({
    root: {
      height: '20px',
      fontFamily: 'Helvetica Neue',
      fontSize: '0.8em',
      backgroundColor: 'transparent',
      color: '#1a1a1a',
      padding: '0',
      marginRight: '8px',
      border: '1px solid transparent',
      '&:hover': {
        backgroundColor: 'transparent',
        color: '#096cd7',
      },
    },
  });
  const classes = theme();
  const cardTheme = createTheme({
    typography: {
      body2: {
        fontSize: '15px',
        fontWeight: 'medium',
        fontFamily: 'Helvetica Neue',
      },
      fontFamily: [
        'Avenir',
        'Arial',
        'sans-serif',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
    },
    components: {
      MuiCard: {
        styleOverrides: {
          root: {
            // apply theme's border-radius instead of component's default
            backgroundColor: 'white',
            position: 'relative',
            // height: '250px',
            // overflow: 'hidden',
            // height: '250px',
            // '&:hover': {
            //   height: '300px',
            //   zIndex: '22',
            //   transition: '0.2s height linear',
            //   overflow: 'visible',
            // }
          },
        },
      },
      MuiButtonBase: {
        defaultProps: {
          disableRipple: true,
        },
      },
    },
  });
  const handleClick = () => {
    window.open(repo_url, "open_blank");
  }
  return (
    <ThemeProvider theme={cardTheme}>
      <div tabIndex={0} role="button" onClick={(event) => handleClick(event)} onKeyDown={() => handleClick()}>
      <Card sx={{ minWidth: 200 }}
        className="card"
      >
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt="screen shot of project"
        />
        <CardContent>
          <Typography className="cardName" gutterBottom variant="h6">
            {name}
          </Typography>
          <Typography variant="body2" className="cardText" color="text.secondary">
            {bio}
          </Typography>
          {/* <Typography variant="body2">
           Tech: {tech}
        </Typography> */}
          <div className="buttonCont">
            {dep_url.length > 0 ? <Button
              className={classes.root}
              variant="text"
              size="small"
              onClick={() => window.open(dep_url, "_blank")}
            >Deployed</Button> : null}
            <Button size="small"
              variant="text"
              className={classes.root}
              onClick={() => window.open(repo_url, "_blank")}
            >Github</Button>
          </div>
        </CardContent>
      </Card>
      </div>
    </ThemeProvider>
  );
}

export default Cards;