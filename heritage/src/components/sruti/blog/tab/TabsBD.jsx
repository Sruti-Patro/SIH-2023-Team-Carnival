import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import East from "../ewns/East";
import West from "../ewns/West";
import North from "../ewns/North";
import South from "../ewns/South";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 0 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function TabsBD() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor:'darkgray' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" centered textColor='black' sx={{color: "black",backgroundColor:"white"}}>
          <Tab label="EAST" {...a11yProps(0)} />
          <Tab label="WEST" {...a11yProps(1)} />
          <Tab label="NORTH" {...a11yProps(2)} />
          <Tab label="SOUTH" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <East/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <West/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <North/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <South/>
      </CustomTabPanel>
    </Box>
  );
}
