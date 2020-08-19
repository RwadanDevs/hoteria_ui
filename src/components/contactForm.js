import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Icon } from '@iconify/react';
import paperPlane from '@iconify/icons-si-glyph/paper-plane';
import SyncLoader from "react-spinners/SyncLoader";
import MuiAlert from '@material-ui/lab/Alert';
import Alert from '@material-ui/lab/Alert';

import formStyle from '../styles/components/contactFormStyle';


const useStyles = makeStyles((theme) => (formStyle(theme)));

export default (props)=>{
  const classes = useStyles();
  
  const [formState, setFormState]= useState({
    name:'',
    address:'',
    email:'',
    message:'',
  });
  
  const onInputChange = (e)=>{
    const { id, value } = e.target;
    setFormState({ ...formState, [id]:value, error: ''}); 
}

const onFormSubmit = (e) =>{
  e.preventDefault();
  const { name,address,email,message } = formState;
  
  if(email.match(/\S+@\S+\.\S+/)){
      props.onSubmit({ name,address,email,message });
  }else{
      setFormState({ ...formState, error:'incorrect email format'});
  }
}

  return (
    <form 
      className={classes.root} 
      onSubmit={onFormSubmit}
    >
    <Typography variant="h5" className={classes.title}>
          Get In Touch
    </Typography>
      <TextField
        id="name"
        className={classes.input}
        label="Name" 
        type="text"
        onChange={onInputChange}
        variant="outlined"
        required
      />
      <TextField 
        id="address"
        className={classes.input}
        label="Address" 
        type="text"
        onChange={onInputChange}
        variant="outlined" 
      />
      <TextField
        error={formState.error?true:false}
        helperText={formState.error}
        id="email"
        className={classes.input}
        label="Email" 
        type="email"
        onChange={onInputChange}
        variant="outlined"
        required
      />
      <TextField 
          required
          id="message"
          className={classes.textArea}
          label="Message"
          type="text"
          onChange={onInputChange}
          multiline
          rows={4}
          placeholder="Message..."
          variant="outlined"
      />
      
      <Button
        variant="contained"
        type="submit"
        disabled={ !formState.email || !formState.name || !formState.message }
        className={props.emailSent?(classes.button):(classes.emailSent)}
        endIcon={props.emailSent?(props.isLoading?null:<Icon icon={paperPlane} />):null}
      >
      
      {props.emailSent?(
      <span>
      {props.isLoading?( 
        <SyncLoader
            size={8}
            margin={8}
            color={"#fff"}
            loading={ props.isLoading }
        /> 
        ):('Send It')}
        </span>
        ):(
          <Alert  variant="filled" severity="success">
            Message Sent 
          </Alert>
          )}
      </Button>
      
    </form>
  );
}
