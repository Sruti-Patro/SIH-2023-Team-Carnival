import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export default function Body() {
  return (
    <Stack direction="row" justifyContent={'center'} spacing={5}>
        <Button variant="contained" href="#contained-buttons">
        Log In
      </Button>
        <Button variant="contained" href="#contained-buttons">
           SignUp
        </Button>
    </Stack>
  );
}