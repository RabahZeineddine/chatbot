import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import style from './style'
import { Typography } from '@material-ui/core';
import ChatTab from './ChatTab'


import {
  ChatBubbleOutlineTwoTone,
  BarChartTwoTone,
  LocalOfferTwoTone
} from '@material-ui/icons'

function TabContainer({ children, dir }) {
  return (
    <Typography disabled component="div" dir={dir}>
      {children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired,
};


class TabsComponent extends React.Component {

  state = {
    value: 0,
  };

  static propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
  }

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  render() {
    const { classes, theme } = this.props;

    return (
      <div className={classes.holder}>
        <AppBar position="static" color="default">
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
          >
            <Tab icon={<ChatBubbleOutlineTwoTone />} style={{ minWidth: 50 }} />
            <Tab icon={<BarChartTwoTone />} style={{ minWidth: 50 }} />
            <Tab icon={<LocalOfferTwoTone />} style={{ minWidth: 50 }} />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={this.state.value}
          onChangeIndex={this.handleChangeIndex}
          style={{ display: 'flex', flex: '1', flexShrink: 1 }}
          containerStyle={{ flex: '1', flexShrink: 1, display: 'flex' }}
        >

          <ChatTab />
          <TabContainer dir={theme.direction} >.</TabContainer>
          <TabContainer dir={theme.direction} >.</TabContainer>
        </SwipeableViews>
      </div>
    );
  }
}

export default withStyles(style, { withTheme: true })(TabsComponent);