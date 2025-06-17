import * as React from 'react';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Button1, Button2 } from '../styles';
import { foregroundAccentColor } from '@ui/fonts/fonts';

export default function AlertCartDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button1 variant="contained" onClick={handleClickOpen} fullWidth>
        Оформить заявку на закрепление
      </Button1>
      <Dialog
        open={open}
        onClose={handleClose}
        slotProps={{
          paper: {
            component: 'form',
            sx: { borderRadius: '16px', minWidth: '500px', minHeight: '281px' },
            onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
              event.preventDefault();
              const formData = new FormData(event.currentTarget);
              const formJson = Object.fromEntries((formData as any).entries());
              const email = formJson.email;
              console.log(email);
              handleClose();
            },
          },
        }}
      >
        <DialogTitle>Оформить заявку на закрепление</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            required
            margin="dense"
            id="purpose"
            name="purpose"
            label="Укажите цель закрепления"
            placeholder="Ваша цель закрепления"
            type="text"
            fullWidth
            variant="outlined"
            autoComplete="off"
            slotProps={{
              inputLabel: {
                shrink: true,
                required: false,
              },
            }}
            sx={{
              '& .MuiOutlinedInput-root': {
                borderRadius: '8px',
                minHeight: '64px',
              },
              // '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline':
              //   {
              //     borderColor: foregroundAccentColor,
              //   },
              // '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline':
              //   {
              //     borderColor: foregroundAccentColor,
              //   },
            }}
          />
          <TextField
            required
            margin="dense"
            id="comment"
            name="comment"
            placeholder="Ваш комментарий"
            type="text"
            fullWidth
            variant="outlined"
            autoComplete="off"
            slotProps={{
              inputLabel: {
                required: false,
              },
            }}
            sx={{
              '& .MuiOutlinedInput-root': {
                borderRadius: '8px',
                minHeight: '64px',
              },
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button2 onClick={handleClose} sx={{ color: foregroundAccentColor }}>
            Отмена
          </Button2>
          <Button1 type="submit" sx={{ minHeight: '36px' }}>
            Отправить
          </Button1>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
