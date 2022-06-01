import { ThemeProvider } from "@emotion/react";
import { Avatar, Box, Grid, Tab, Tabs, Typography } from "@mui/material";
import { Component, SyntheticEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { baseTheme } from "../../../theme";
import { BookCard,books } from "../../molecules/Card";

interface Book{
    id:number;
    image:any;
  title:string;
  author:string;
  readTime:string;
  currentReads:string;
  added:boolean;
  finished:boolean;
}
const Library = ()=>{
  const [value,setValue] =useState('curr');
  function handleChange(event: SyntheticEvent,newValue:string){
      setValue(newValue);
  }
  const [currentRead,setCurrent] = useState<Book[]>(books.filter((book)=>book.added && !book.finished));
  const [finishedRead,setFinished]=useState<Book[]>(books.filter((book)=>book.added && book.finished));
//   useEffect(()=>{
//       setCurrent(books.filter((book)=>book.status=='Finished')); 
//       setFinished(books.filter((book)=>book.status=='Read again'));
//   });
  const [finish,setFinish]=useState(false);
    function moveToFinished(id:number){   
        let book =currentRead.filter((i)=>i.id==id);
        book[0].finished=true;
        setCurrent(currentRead.filter((i)=>i.id!=id));
        finishedRead.push(book[0])
        setFinished(finishedRead);
    }
    function moveToCurrent(id:number){   
        let book =finishedRead.filter((i)=>i.id==id);
        book[0].finished=false;
        setFinished(finishedRead.filter((i)=>i.id!=id));
        currentRead.push(book[0])
        setCurrent(currentRead);
    }
    const navigate = useNavigate();

    // const navigateToContacts = () => {
    //   // 👇️ navigate to /contacts
    //   navigate('/contacts');
    // };
    const openDetail = (id:number)=>{
        navigate('/detail/'+id);
    }
  interface TabPanelProps{
      children:any;
      value:any;
      index:any;
  }
      
      function TabPanel(props: TabPanelProps) {
        const { children, value, index, ...other } = props;
      
        return (
          <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}>
            {value === index && (
                <div style={{color:'baseTheme.palette.backgroundcolor.main',display:'inline-flex',flexDirection:'column'}}>{children}</div>
            )}
          </div>
        );
      }
    
    // let currentRead = books.filter((book)=>book.status=='Finished');
    // let finishedRead= books.filter((book)=>book.status=='Read again');
    return(
        <ThemeProvider theme={baseTheme}>
        <Grid container style={{marginInline:'10vw',width:'80vw',justifyContent:'space-around'}}>
            <Grid item xs={12}>
                <Typography variant='h1' color='textcolor.dark'>My Library</Typography>
            </Grid>
            <Grid item xs={12}>
                <Tabs aria-label="basic tabs example" textColor='primary' value={value} onChange={handleChange}>
                    <Tab label="Currently Reading" value='curr'/>
                    <Tab label="Finished" value='fin' />
                </Tabs>
            </Grid>
            </Grid>
               
            <TabPanel value={value} index='curr'>
            <Grid container style={{marginInline:'10vw',width:'80vw',justifyContent:'space-around'}}> 
            {Array.from(Array(currentRead.length)).map((_, index) => (
                <Grid item xs={4} sm={4} md={4} key={index}>
                    <BookCard id={currentRead[index].id} image={currentRead[index].image} title={currentRead[index].title} author={currentRead[index].author} readTime={currentRead[index]["readTime"]}
                     totalReads={currentRead[index].currentReads} status={(!currentRead[index].finished && 'Finished')||'Read Again'} size='width: 20vw' bgcolor={baseTheme.palette.backgroundcolor.light}
                     click={()=>moveToFinished(currentRead[index].id)} onclick={()=>openDetail(currentRead[index].id)}/>
                </Grid>
                ))}
                </Grid>
            </TabPanel>
            <TabPanel value={value} index='fin'>
            <Grid container style={{marginInline:'10vw',width:'80vw',justifyContent:'space-around'}}> 
            {Array.from(Array(finishedRead.length)).map((_, index) => (
                <Grid item xs={4} sm={4} md={4} key={index}>
                    <BookCard id={finishedRead[index].id} image={finishedRead[index].image} title={finishedRead[index].title} author={finishedRead[index].author} readTime={finishedRead[index]["readTime"]}
                     totalReads={finishedRead[index].currentReads} status={(currentRead[index].finished && 'Finished')||'Read Again'} size='width: 20vw' bgcolor={baseTheme.palette.backgroundcolor.light}
                     click={()=>moveToCurrent(finishedRead[index].id)}/>
                </Grid>
                ))}</Grid>
            </TabPanel>
            </ThemeProvider>
    )
}
export default Library;