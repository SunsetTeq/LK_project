import {
  Box,
  Divider,
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Pagination,
  Select,
  SelectChangeEvent,
  Typography,
  useMediaQuery,
  ThemeProvider,
} from '@mui/material';
import {
  foregroundPrimaryColor,
  foregroundTertiaryColor,
  MediumM,
  RegularS,
  RegularXS,
} from '@ui/fonts/fonts';
import SelectIcon from '@ui/icons/select-icon.svg?react';
import {
  defaultTextBox,
  rightColumn,
  selectField,
  selectInputLabel,
} from './styles';
import React from 'react';
import { getCardsData } from '../../../shared/model/data/cardsData';
import { CardAssignments } from './CardAssignments';
import {
  DEFAULT_ASSIGNMENTS_CONTENT,
  DEFAULT_ASSIGNMENTS_LABELS,
} from '../model/assigmentsData';
import { STATUS_OPTIONS } from '../../../shared/model/data/cardsData';
import { paginatiomTheme } from './themes';

const ALL_VALUE = 'Все статусы';

export const Assignments = () => {
  const [status, setStatus] = React.useState<string>('');
  // текущая страница пагинации
  const [page, setPage] = React.useState(1);
  // сколько карточек отображать на странице
  let itemsPerPage: number;
  const isTall1200 = useMediaQuery('(min-height:1200px)');
  const isTall850 = useMediaQuery('(min-height:850px)');
  if (isTall1200) itemsPerPage = 3;
  else if (isTall850) itemsPerPage = 2;
  else itemsPerPage = 1;

  const handleChange = (event: SelectChangeEvent<string>) => {
    setStatus(event.target.value);
  };

  const { assignments } = getCardsData();
  // фильтрация по статусу
  const filteredAssignments =
    !status || status === ALL_VALUE
      ? assignments
      : assignments.filter((card) => card.assignment_status === status);

  // расчет табов для пагинации
  const start = (page - 1) * itemsPerPage;
  const paginated =
    filteredAssignments.slice(start, start + itemsPerPage) ?? [];
  const totalPages = Math.max(
    1,
    Math.ceil(filteredAssignments.length / itemsPerPage),
  );

  return (
    <ThemeProvider theme={paginatiomTheme}>
      <Box component={'div'} sx={{ display: 'flex', gap: 3, height: '100%' }}>
        <Box
          width={'35%'}
          color={foregroundPrimaryColor}
          sx={{
            mt: 1,
            pt: 2,
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
          }}
        >
          <Typography sx={MediumM}>Закрепления</Typography>
          <FormControl>
            <InputLabel
              sx={selectInputLabel}
              shrink
              id="assignments-label-field"
            >
              Статус
            </InputLabel>
            <Select
              labelId="assignments-label-field"
              onChange={handleChange}
              value={status}
              displayEmpty
              input={<OutlinedInput label="Статус" notched />}
              renderValue={(selected) => {
                if (!selected) {
                  return <Box>Выберите статус закрепления</Box>;
                }

                return selected;
              }}
              id="assignments-label-select"
              IconComponent={SelectIcon}
              sx={selectField}
            >
              <MenuItem disabled value="" sx={RegularXS}>
                Выберите статус закрепления
              </MenuItem>
              <MenuItem value={ALL_VALUE} sx={RegularXS}>
                Все
              </MenuItem>
              {STATUS_OPTIONS.map((opt) => (
                <MenuItem value={opt} sx={RegularXS} key={opt}>
                  {opt}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Box
            component={'div'}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
            }}
          >
            {paginated?.map((card, idx) => (
              <CardAssignments
                key={idx}
                title={card.title ?? 'Закрепление'}
                assignmentStatus={card.assignment_status ?? 'Неизвестно'}
                headerValue={
                  card.header
                    ? card.header.toString() + '%'
                    : card.assignment_status
                      ? card.assignment_status === 'Исполняется'
                        ? '0%'
                        : ''
                      : ''
                }
                content={card.content ?? DEFAULT_ASSIGNMENTS_CONTENT}
                contentLabels={
                  card.content_labels ?? DEFAULT_ASSIGNMENTS_LABELS
                }
              />
            ))}
          </Box>
          {paginated.length > 0 ? (
            <Pagination
              count={totalPages}
              page={page}
              onChange={(_, newPage) => setPage(newPage)}
              variant="outlined"
              shape="rounded"
              color="primary"
              showFirstButton
              showLastButton
              sx={{
                display: 'flex',
                justifyContent: 'center',
              }}
            />
          ) : (
            <Box component={'div'} sx={defaultTextBox}>
              <Typography
                sx={{
                  ...RegularS,
                  align: 'center',
                  color: foregroundTertiaryColor,
                }}
              >
                Активных закреплений сейчас нет
              </Typography>
            </Box>
          )}
        </Box>
        <Divider
          orientation="vertical"
          variant="middle"
          sx={{ mb: -2 }}
          flexItem
        />
        <Box color={foregroundPrimaryColor} sx={rightColumn}>
          <Typography sx={MediumM}>Оно делается вроде</Typography>
        </Box>
      </Box>
    </ThemeProvider>
  );
};
