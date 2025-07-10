import {
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  Link,
  TextField,
  Typography,
} from '@mui/material';
import { Button1, Button2 } from '@ui/Buttons/buttons';
import {
  foregroundAccentColor,
  foregroundPrimaryColor,
  foregroundSecondaryColor,
  RegularXS,
} from '@ui/fonts/fonts';
import React from 'react';
import { FileUploadField } from './FileUploadField';

export const AlertQuestion = () => {
  const [open, setOpen] = React.useState(false);
  const [file, setFile] = React.useState<File | null>(null);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Link
        underline="none"
        onClick={handleClickOpen}
        sx={{ cursor: 'pointer', ...RegularXS, color: foregroundAccentColor }}
      >
        Задать вопрос?
      </Link>
      <Dialog
        open={open}
        onClose={handleClose}
        slotProps={{
          paper: {
            component: 'form',
            tabIndex: -1,
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
        <DialogTitle>Оформление заявки на доставку</DialogTitle>
        <DialogContent>
          <Divider sx={{ m: '0 -23px 0 -23px' }}></Divider>
          <Box
            component={'div'}
            sx={{ ...RegularXS, color: foregroundPrimaryColor, m: '16px 0' }}
          >
            Заполните данные ниже
          </Box>
          <Box component={'div'} sx={{ m: '16px 0' }}>
            <Typography
              component={'span'}
              sx={{ ...RegularXS, color: foregroundSecondaryColor }}
            >
              Тема
            </Typography>{' '}
            <Typography
              component={'span'}
              sx={{ ...RegularXS, color: foregroundPrimaryColor }}
            >
              Вопрос по заказу
            </Typography>
          </Box>
          <TextField
            autoFocus
            required
            multiline
            rows={4}
            margin="dense"
            id="allocution"
            name="allocution"
            placeholder="Ваше обращение"
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
                minHeight: '102px',
              },
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: '#E0E0E0',
              },
            }}
          />
          <FileUploadField file={file} onFileChange={setFile} />
        </DialogContent>
        <DialogActions>
          <Box component={'div'} sx={{ mr: '16px' }}>
            <Button2
              onClick={handleClose}
              sx={{ color: foregroundAccentColor }}
            >
              Отмена
            </Button2>
            <Button1 type="submit" sx={{ minHeight: '36px' }}>
              Отправить
            </Button1>
          </Box>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};
