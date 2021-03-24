import React from "react";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

const styles = (theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
});

class GoTabs extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Tabs value={value} onChange={this.handleChange} centered>
            <Tab label="Child 1" />
            <Tab label="Child 2" />
            <Tab label="Child 3" />
            <Tab label="Child 4" />
          </Tabs>
        </AppBar>
        {value === 0 && <TabContainer>Item 1</TabContainer>}
        {value === 1 && <TabContainer>Item 2</TabContainer>}
        {value === 2 && <TabContainer>Item 3</TabContainer>}
        {value === 3 && <TabContainer>Item 4</TabContainer>}
      </div>
    );
  }
}

export default withStyles(styles)(GoTabs);
