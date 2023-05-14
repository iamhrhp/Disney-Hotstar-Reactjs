import { Box, Button, IconButton } from '@mui/material';
import React, { Component } from 'react';
import { SidebarData } from '../../Data/Sidebar/SidebarData';
import './SideBarPage.css';
import { withStyles } from '@mui/styles';
import { SidebarPageStyles } from './SidebarPage.Style';
import { withRouter } from '../../Utils/WithRouter';

interface IProps {
  children: React.ReactNode;
  classes: any;
  navigate: any;
}

interface IState {
  showFull: boolean;
}

class SidebarPage extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = { showFull: false };
  }

  navigateToPage = (data: any) => {
    let title = data.title;
    switch (title) {
      case 'Profile':
        return this.props.navigate('/myspace');
      case 'Home':
        return this.props.navigate('/');
      case 'Search':
        return this.props.navigate('/search');
      case 'TV':
        return this.props.navigate('/Tv');
      default:
        break;
    }
  };

  render() {
    const { children, classes } = this.props;
    return (
      <React.Fragment>
        <Box className="sidebar-boxwrapper">
          <Box className={classes.sidebarMainbox}>
            <Box className="sidebarBox">
              <Box className="sidebar-mapBefore">
                {SidebarData.map((item, index = Date.now()) => {
                  return (
                    <React.Fragment key={index}>
                      <Box
                        className="sidebar-mapAfter"
                        onClick={() => this.navigateToPage(item)}
                      >
                        <IconButton className="iconBtn">
                          <item.icon className="icon1" />
                          <item.icon2 className="icon2" />
                        </IconButton>
                        <Button className="titleButton">{item.title}</Button>
                      </Box>
                    </React.Fragment>
                  );
                })}
              </Box>
            </Box>
          </Box>
          <Box className={classes.childrenProp}>{children}</Box>
        </Box>
      </React.Fragment>
    );
  }
}

export default withRouter(withStyles(SidebarPageStyles)(SidebarPage));
