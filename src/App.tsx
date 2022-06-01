import React from 'react';
import './App.css';
import { Footer } from './stories/organisms/Footer';
import { Header } from './stories/organisms/Header';
import { Banner } from './stories/molecules/Banner';
import Library from './stories/organisms/Library';
import { Detail } from './stories/organisms/BookDetail';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import { Explore } from './stories/organisms/Explore';

function App() {
  const [value, setValue] = React.useState('curr');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <div className="App">
      
    <BrowserRouter>
    <Header/>
      {/* <Detail id={2}/> */}
      {/* <SearchBar placeholder='Search by title or author' placeholdercolor={baseTheme.palette.textcolor.main}/> */}
      {/* <Tab text="Currently Reading" width='304px' height="39px" textColor="#22C870" lineColor="#22C870"/> */}
      {/* <Box sx={{ width:'304px',height:'39px', margin:'10px' }}>
        <Tabs aria-label="basic tabs example" textColor='primary' value={value} onChange={handleChange}>
          <Tab label="Currently Reading" value='curr'/>
          <Tab label="Finished" value='fin' />
        </Tabs>
      </Box> */}
      {/* <Banner title='Explore Books on entrepreneurship' description='Everything you need to know about thriving on a shoestring budget, making your first million, and hiring right from the start.'/> */}
      {/* <BookCard image={book11} title='Employee to Entrepreneur' author='Wiley' size='width: 345px' 
        margin='margin-left:20px' bgcolor={baseTheme.palette.backgroundcolor.light}/> */}
      
    <Routes>
     <Route path="/" element={<Library/>}/>
     <Route path="/explore/:cat" element = {<Explore/>}/>
     <Route path="/detail/:id" element={<Detail/>}/>
     </Routes>
    <Footer/>
   </BrowserRouter>
   
    </div>
  );
}
export default App;
