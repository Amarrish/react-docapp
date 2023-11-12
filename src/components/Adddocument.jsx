import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import docservices from '../services/docservices';
import Grid from '@mui/material/Grid';
import Documentlist from './Documentlist';

const Adddocument = () => {
    const [docname,setDocname]=useState("")
    // const [docpara,setDocpara]= useState("")


    const handlesubmit = async (e) => {
        e.preventDefault();
        if (!docname) {
          alert("Fill in the text field");
          return
        }
        const newdoc = {
          cardname: docname
          // docpara,
      }
        try{
            await docservices.adddocument(newdoc)
            alert("doc added successfully")
        }
        catch (error) {
            console.error("Error adding document:", error);
            alert("Error adding document. Please try again.");
        }
        setDocname("")
       
      };

  return (
    <>
       <Box
      alignItems="center"
      justifyContent="center"
      
     
      sx={{
        '& .MuiTextField-root': { m: 5, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <form onSubmit={handlesubmit} style={{ alignItems:'center',justifyContent:'center', textAlign:'center'}}>
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12} sm={8}>
            <TextField
              id="outlined-helperText"
              label="Add Text"
              helperText="Text your Documents"
              value={docname}
              style={{width:'90%'}}
              onChange={(e) => setDocname(e.target.value)}
              name="text"
            />
          </Grid>
          <Grid style={{marginTop:'3em', alignItems:'center',justifyContent:'center', textAlign:'center'}} item xs={12} sm={4}>
           <Button  type="submit" variant="contained" color="success"> Add Here </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
    <Box>
      <Documentlist/>
    </Box>
    </>
  )
}

export default Adddocument