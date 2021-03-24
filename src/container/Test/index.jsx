import React from "react";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import GoTabs from "./goTabs";

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
    textTransform: "none",
  },
});

class Test extends React.Component {
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
            <Tab label="Parent 1" />
            <Tab label="Parent 2" />
            <Tab label="Parent 3" href="#basic-tabs" />
          </Tabs>
        </AppBar>
        {value === 0 && <TabContainer>Item 1</TabContainer>}
        {value === 1 && <TabContainer>Item 2</TabContainer>}
        {value === 2 && (
          <TabContainer>
            <GoTabs />
          </TabContainer>
        )}
      </div>
    );
  }
}

export default withStyles(styles)(Test);
