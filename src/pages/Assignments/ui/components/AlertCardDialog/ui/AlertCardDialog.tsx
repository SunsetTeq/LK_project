import {
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Typography,
  MenuItem,
  Divider, // ← импорт для опций селекта
} from '@mui/material';
import { Button1, Button2, Button3 } from '@ui/Buttons/buttons';
import {
  foregroundAccentColor,
  foregroundPrimaryColor,
  RegularXS,
} from '@ui/fonts/fonts';
import React from 'react';
import { BullCard } from './BullCard';
import { useAppSelector } from '@hooks/useAppSelector';
import { getCardsData } from '../../../../../../shared/model/data/cardsData';
import { bullBox } from './style';

export const AlertCardDialog = () => {
  const [open, setOpen] = React.useState(false);
  const [site, setSite] = React.useState<string>('');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSiteChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSite(e.target.value);
  };

  const selectedId = useAppSelector((state) => state.assignments.selectedId);
  const { assignmentsBulls } = getCardsData();
  const selectedBulls = assignmentsBulls.find((item) => item.id == selectedId);

  return (
    <React.Fragment>
      <Button3 variant="contained" onClick={handleClickOpen} fullWidth>
        Оформить заявку на доставку
      </Button3>
      <Dialog
        open={open}
        onClose={handleClose}
        slotProps={{
          paper: {
            component: 'form',
            tabIndex: -1,
            sx: { borderRadius: '16px', maxWidth: '500px', minHeight: '281px' },
            onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
              event.preventDefault();
              const formData = new FormData(event.currentTarget);
              const formJson = Object.fromEntries((formData as any).entries());
              console.log(formJson);
              handleClose();
            },
          },
        }}
      >
        <DialogTitle>Оформить заявку на доставку</DialogTitle>
        <DialogContent>
          <Divider sx={{ m: '0 -23px 0 -23px' }}></Divider>
          <Box component={'div'} sx={{ m: '16px 0' }}>
            <Typography sx={{ ...RegularXS, color: foregroundPrimaryColor }}>
              Укажите площадку, дату доставки и выберите сколько доз какого быка
              надо доставить
            </Typography>
          </Box>
          <Box
            component={'div'}
            sx={{ display: 'flex', flexDirection: 'column', gap: '4px' }}
          >
            <Box component={'div'} sx={{ display: 'flex', gap: 1 }}>
              <TextField
                required
                select
                value={site}
                onChange={handleSiteChange}
                margin="dense"
                id="select"
                name="select"
                label="Площадка"
                fullWidth
                variant="outlined"
                autoComplete="off"
                slotProps={{
                  inputLabel: {
                    shrink: true,
                    required: false,
                  },
                  select: {
                    displayEmpty: true,
                    renderValue: (value: unknown) => {
                      const val = typeof value === 'string' ? value : '';
                      if (!val) {
                        return (
                          <Box
                            sx={{
                              ...RegularXS,
                              color: '#acacac',
                            }}
                          >
                            Укажите площадку
                          </Box>
                        );
                      }
                      return (
                        <Box
                          sx={{ ...RegularXS, color: foregroundPrimaryColor }}
                        >
                          {val}
                        </Box>
                      );
                    },
                  },
                }}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: '8px',
                    maxHeight: '40px',
                  },
                }}
              >
                <MenuItem value="" disabled>
                  Укажите площадку
                </MenuItem>
                <MenuItem value="Площадка 1">Площадка 1</MenuItem>
                <MenuItem value="Площадка 2">Площадка 2</MenuItem>
              </TextField>

              <TextField
                required
                margin="dense"
                id="date"
                name="date"
                label="Дата доставки"
                type="date"
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
                    maxHeight: '40px',
                    color: '#acacac',
                  },
                }}
              />
            </Box>
            <Typography sx={{ ...RegularXS, color: foregroundPrimaryColor }}>
              Доступные быки на этот месяц
            </Typography>
            <Box
              component={'div'}
              sx={{ display: 'flex', gap: 1, flexDirection: 'column' }}
            >
              {selectedBulls?.bulls?.map((bull) => (
                <Box component={'div'} key={bull.bull_id} sx={bullBox}>
                  <BullCard
                    name={bull.title}
                    count={bull.count}
                    id={bull.bull_id}
                  />
                  <TextField
                    required
                    margin="dense"
                    id={`number-${bull.bull_id}`}
                    name={`Number-${bull.bull_id}`}
                    placeholder="Число"
                    label="Количество доз"
                    type="number"
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
                        maxHeight: '40px',
                        maxWidth: '145px',
                      },
                    }}
                  />
                </Box>
              ))}
            </Box>

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
          </Box>
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
};
