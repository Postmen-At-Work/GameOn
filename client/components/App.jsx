import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Tab from '@mui/material/Tab';
import SportsFootballIcon from '@mui/icons-material/SportsFootball';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import HomeIcon from '@mui/icons-material/Home';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import GroupsIcon from '@mui/icons-material/Groups';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import StormIcon from '@mui/icons-material/Storm';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import axios from 'axios';
import { teal } from '@mui/material/colors';
import ImageAvatar from './ImageAvatar.jsx';

const theme = createTheme({
  components: {
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          h1: 'h1',
          h2: 'h2',
          h3: 'h3',
          h4: 'h4',
          h5: 'h5',
          h6: 'h6',
          subtitle1: 'h2',
          subtitle2: 'h2',
          body1: 'span',
          body2: 'span',
        },
      },
    },
  },
});

const styles = {
  tab: {
    color: '#E7F6F2',
  },
};

const linkStyle = {
  margin: '1rem',
  textDecoration: 'none',
  color: 'black',
  fontSize: 17,
};
const login = {
  margin: '1rem',
  textDecoration: 'none',
  color: 'gray',
  fontSize: 13,
  fontFamily: 'Roboto',
};

const App = () => {
  /**
   * This function executes an axios GET request to log out the current user.
   */
  const logout = () => {
    axios
      .get('/logout')
      .then((res) => {
        if (res.data) {
          alert('logout successful');
          window.location.href = '/';
          history.push('/');
          history.push('/profile');
        }
      })
      .catch((err) => console.error(err));
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={1}>
          <Grid item xs={9}></Grid>
          <Grid item xs={1}>
            <Link to='/login' style={login}>
              LOGIN
            </Link>
          </Grid>
          <Grid item xs={1}>
            <Link onClick={logout} to='/logout' style={login}>
              LOGOUT
            </Link>
          </Grid>
        </Grid>
        <Typography align='center' variant='h2' component='h2'>
          Game
          <strong>
            <SportsBasketballIcon sx={{ fontSize: 50, color: teal[100] }} />N
          </strong>
        </Typography>
        <Grid
          container
          spacing={6}
          align='center'
          margin='auto'
          sx={{ justifyContent: 'center' }}
        >
          <Grid>
            <Link to='/home' style={linkStyle}>
              {
                <Tab
                  icon={<HomeIcon sx={{ color: teal[100] }} />}
                  style={styles.tab}
                  label='HOME'
                />
              }
            </Link>{' '}
          </Grid>
          <Grid>
            <Link to='/eventListings' style={linkStyle}>
              {
                <Tab
                  icon={<SportsFootballIcon sx={{ color: teal[100] }} />}
                  style={styles.tab}
                  label='GAMES'
                />
              }
            </Link>
          </Grid>
          <Grid>
            <Link to='/teamList' style={linkStyle}>
              {
                <Tab
                  icon={<GroupsIcon sx={{ color: teal[100] }} />}
                  style={styles.tab}
                  label='TEAMS'
                />
              }
            </Link>
          </Grid>
          <Grid>
            <Link to='/createTeam' style={linkStyle}>
              {
                <Tab
                  icon={<GroupAddIcon sx={{ color: teal[100] }} />}
                  style={styles.tab}
                  label='CREATE TEAM'
                />
              }
            </Link>
          </Grid>
          <Grid>
            <Link to='/leaderboard' style={linkStyle}>
              {
                <Tab
                  icon={<LeaderboardIcon sx={{ color: teal[100] }} />}
                  style={styles.tab}
                  label='LEADERBOARD'
                />
              }
            </Link>
          </Grid>
          <Grid>
            <Link to='/map' style={linkStyle}>
              {
                <Tab
                  icon={<MapOutlinedIcon sx={{ color: teal[100] }} />}
                  style={styles.tab}
                  label='MAP'
                />
              }
            </Link>
          </Grid>
          <Grid>
            <Link to='/forecast' style={linkStyle}>
              {
                <Tab
                  icon={<StormIcon sx={{ color: teal[100] }} />}
                  style={styles.tab}
                  label='FORECAST'
                />
              }
            </Link>
          </Grid>
          <Grid>
            <Link to='/postEvent' style={linkStyle}>
              {
                <Tab
                  icon={<AddCircleIcon sx={{ color: teal[100] }} />}
                  style={styles.tab}
                  label='POST'
                />
              }
            </Link>
          </Grid>
          <ImageAvatar />
        </Grid>
        <Outlet />
        <Typography>
          <p align='center'>
            Game
            <strong>
              <SportsBasketballIcon sx={{ fontSize: 15 }} />N
            </strong>
            : Your go-to app for local pickup games.
          </p>
        </Typography>
      </Box>
    </ThemeProvider>
  );
};

export default App;
