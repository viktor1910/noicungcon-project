import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CustomHeaderAdmin from 'src/components/CustomHeader';
import SideMenu from 'src/components/SideMenu';
import { Container } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  content: {
    flexGrow: 1,
    height: '100%',
    overflow: 'auto',
  },
  appBarSpacer: theme.mixins.toolbar,
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
}));

const LayoutAdmin = ({ children }: { children: React.ReactNode }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(true);
  const handleOpenDrawer = () => setOpen(true);
  const handleCloseDrawer = () => setOpen(false);
  return (
    <div className={classes.root}>
      <CustomHeaderAdmin open={open} openDrawer={handleOpenDrawer} />
      <SideMenu open={open} closeDrawer={handleCloseDrawer}>
        List of Menu Here
      </SideMenu>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          {children}
        </Container>
      </main>
    </div>
  );
};

export default LayoutAdmin;
