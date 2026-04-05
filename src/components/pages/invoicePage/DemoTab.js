import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import styled from 'styled-components';

const ButtonDiv = styled('div')(() => ({
  width: '100%', 
  textAlign: 'right',
  marginTop: '10px'
}))

export default function DemoTabs() {
  const [name, setName] = React.useState('Robin');
  const [password, setPassword] = React.useState('000 000 000')
  const [email, setEmail] = React.useState('codedthemes@gmail.com')
  const [desc, setDesc] = React.useState('Silver Business Point, nr. VIP Circle, Uttran, Surat, Gujarat 394105')

  return (
    <Box
      component="form"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height:'270px',
        overflowY:'scroll',
        gap: 2, 
        width: '100%',
        maxWidth: '55ch',
        margin: '0 auto', 
        '& .MuiTextField-root': {
          width: '100%', 
        },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="name"
        label="Name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <TextField
        id="phone"
        label="Phone Number"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <TextField
        id="email"
        label="Email ID"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <TextField
        id="desc"
        label="Description"
        multiline 
        maxRows={4}
        value={desc}
        onChange={(event) => setDesc(event.target.value)}
      />
      
      <ButtonDiv>
        <Button 
        size='small'
          variant="contained" 
          sx={{ 
            width: { xs: '100%', sm: 'auto' }, 
            textTransform: 'none',
            borderRadius: '8px'
          }}
        >
          Request A Demo
        </Button>
      </ButtonDiv>
    </Box>
  );
}