import React, { useState, useEffect, useRef } from 'react';
import Button from '@mui/material/Button';
import Popper from '@mui/material/Popper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const SimplePopper = ({ description }) => {
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (anchorRef.current && !anchorRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleTogglePopper = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  return (
    <div>
      <Button ref={anchorRef} onClick={handleTogglePopper}  variant="text">
        View Job
      </Button>
      <Popper open={open} anchorEl={anchorRef.current} placement="top">
        <Paper sx={{
          padding: 2,
          width: '600px', 
          maxHeight: '600px',
          overflowY: 'auto',
          borderRadius: '4px',

        }}>
          <Typography variant="subtitle1" >{description}</Typography>
        </Paper>
      </Popper>
    </div>
  );
};

export default SimplePopper;
