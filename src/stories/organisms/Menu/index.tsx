import { Box, Tabs, Tab, Typography, Grid, IconButton } from "@mui/material"
import React, { useEffect } from "react";
import { baseTheme } from "../../../theme";
import MuiButton from "../../atoms/MuiButton";

import EntrepreneurIcon from "../../atoms/icons/entrepreneurIcon";
import EconomicsIcon from "../../atoms/icons/economicsIcon";
import CorporateIcon from "../../atoms/icons/corporateIcon";
import PoliticsIcon from "../../atoms/icons/politicsIcon";
import RelationshipIcon from "../../atoms/icons/relationIcon";
import MarketingIcon from "../../atoms/icons/marketingIcon";
import ScienceIcon from "../../atoms/icons/scienceIcon";
import HealthIcon from "../../atoms/icons/healthIcon";
import PersonalDevIcon from "../../atoms/icons/persdevIcon";
import HistoryIcon from "../../atoms/icons/historyIcon";
import CommunicationIcon from "../../atoms/icons/communicateIcon";
import MotivationIcon from "../../atoms/icons/motivationIcon";
import InvestmentIcon from "../../atoms/icons/investmentIcon";
import PsychologyIcon from "../../atoms/icons/psycologyIcon";
import ProductivityIcon from "../../atoms/icons/productivityIcon";
import NatureIcon from "../../atoms/icons/natureIcon";
import CareerIcon from "../../atoms/icons/careerIcon";
import EducationIcon from "../../atoms/icons/educationIcon";
import { useNavigate } from "react-router-dom";
interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
  }
  
  function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;
  
    return (
      <div style={{color:'baseTheme.palette.backgroundcolor.main'}}
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }} >
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
function ExtendedMenu(){
    const [value, setValue] = React.useState(0);
    const icons = [<EntrepreneurIcon/>,<PoliticsIcon/>,<MarketingIcon/>,<ScienceIcon/>,<HealthIcon/>,<PersonalDevIcon/>,<EconomicsIcon/>,<HistoryIcon/>,<CommunicationIcon/>,
    <CorporateIcon/>,<MotivationIcon/>,<InvestmentIcon/>,<PsychologyIcon/>,<ProductivityIcon/>,<RelationshipIcon/>,<NatureIcon/>,<CareerIcon/>,<EducationIcon/>];
    const labels= ['Entrepreneurship','Politics','Marketing','Science','Health & Nutrition','Personal Development','Economics','History','Cummunication Skills',
    'Corporate Culture','Motivation & Inspiration','Money & Investment','Psychology','Productivity','Sex & Relationship','Nature & Environment','Career & Success','Education'];
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
    const navigate = useNavigate();
    
    const showBooks = (cat:string)=>{

        navigate('/explore/'+cat);
    }
    return(
        <Box bgcolor={baseTheme.palette.backgroundcolor.main}>
        <Tabs aria-label="basic tabs example" textColor='primary' value={value} onChange={handleChange}>
          <Tab label="Explore by Category" value={0}/>
          <Tab label="See recently added tiles" value={1}/>
          <Tab label='See popular tiles' value={2}/>
        </Tabs>
        <TabPanel value={value} index={0}>
            <Grid container>
                {Array.from(Array(icons.length)).map((_, index) => (
                <Grid item xs={2} sm={4} md={4} key={index}>
                    <MuiButton startIcon={icons[index]} label={labels[index]} variant="text" size="small"
                    onClick={()=>{showBooks(labels[index])}} color={baseTheme.palette.textcolor.light}/>
                </Grid>
                ))}
            </Grid>
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
        </Box>
    )
}
export default ExtendedMenu;