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
  borderAccentColor,
  foregroundPrimaryColor,
  foregroundTertiaryColor,
  MediumM,
  RegularS,
  RegularXS,
} from '@ui/fonts/fonts';
import SelectIcon from '@ui/icons/select-icon.svg?react';
import {
  cardBox,
  defaultTextBox,
  leftContent,
  leftWrapper,
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
import { InfoAboutCard } from './InfoAboutCard';
import { useAppDispatch } from '@hooks/useAppDispatch';
import { useAppSelector } from '@hooks/useAppSelector';
import { selectAssignment } from '@pages/Assignments/model/assignmentsSlice';

const ALL_VALUE = 'Все статусы';

export const Assignments = () => {
  // для отображения информации о конкретной карточке
  const dispatch = useAppDispatch();
  const selectedId = useAppSelector((state) => state.assignments.selectedId);

  const [status, setStatus] = React.useState<string>('');
  // текущая страница пагинации
  const [page, setPage] = React.useState(1);

  // сколько карточек отображать на странице
  let itemsPerPage: number;
  const isTall1290 = useMediaQuery('(min-height:1290px)');
  const isTall930 = useMediaQuery('(min-height:930px)');
  if (isTall1290) itemsPerPage = 3;
  else if (isTall930) itemsPerPage = 2;
  else itemsPerPage = 1;

  // выбор статуса
  const handleChange = (event: SelectChangeEvent<string>) => {
    setStatus(event.target.value);
    setPage(1);
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
      <Box component={'div'} sx={leftWrapper}>
        <Box width={'400px'} color={foregroundPrimaryColor} sx={leftContent}>
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
          <Box component={'div'} sx={cardBox}>
            {paginated?.map((card, idx) => (
              <Box
                key={card.id}
                onClick={() => dispatch(selectAssignment(card.id))}
                sx={{
                  border:
                    card.id === selectedId
                      ? `1px solid ${borderAccentColor}`
                      : '',
                  borderRadius: '16px',
                  m: card.id === selectedId ? '-1px' : '0px',
                }}
              >
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
              </Box>
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
        {selectedId ? (
          <Box color={foregroundPrimaryColor} sx={rightColumn}>
            <InfoAboutCard />
          </Box>
        ) : null}
      </Box>
    </ThemeProvider>
  );
};
