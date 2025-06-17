import { Box } from '@mui/material';
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import { ruRU } from '@mui/x-data-grid/locales';
import { styled } from '@mui/material/styles';

import { CustomRow } from './customRow';
import { CustomToolbar } from './customToolbar';
import {
  backgroundGhostColor,
  backgroundInfoColor,
  borderAccentColor,
  borderAccentGhostColor,
  foregroundPrimaryColor,
  foregroundTertiaryColor,
  MediumXS,
  RegularXS,
} from '@ui/fonts/fonts';

const rows: GridRowsProp = [
  {
    id: 1,
    naab: '011HO16061',
    name: 'AltaAAMICK',
    remainder: 650,
    tpi: 3017,
    nm: 1035,
    fat: -2,
    protein: 51,
    yield: 3017,
    ease: 3017,
  },
  {
    id: 2,
    naab: '011HO16061',
    name: 'AltaAAMICK',
    remainder: 650,
    tpi: 3017,
    nm: 1035,
    fat: -2,
    protein: 51,
    yield: 3017,
    ease: 3017,
  },
  {
    id: 3,
    naab: '011HO16061',
    name: 'AltaAAMICK',
    remainder: 650,
    tpi: 3017,
    nm: 1035,
    fat: -2,
    protein: 51,
    yield: 3017,
    ease: 3017,
  },
  {
    id: 4,
    naab: '011HO16061',
    name: 'AltaAAMICK',
    remainder: 650,
    tpi: 3017,
    nm: 1035,
    fat: -2,
    protein: 51,
    yield: 3017,
    ease: 3017,
  },
  {
    id: 5,
    naab: '011HO16061',
    name: 'AltaAAMICK',
    remainder: 650,
    tpi: 3017,
    nm: 1035,
    fat: -2,
    protein: 51,
    yield: 3017,
    ease: 3017,
  },
  {
    id: 6,
    naab: '011HO16061',
    name: 'AltaAAMICK',
    remainder: 650,
    tpi: 3017,
    nm: 1035,
    fat: -2,
    protein: 51,
    yield: 3017,
    ease: 3017,
  },
  {
    id: 7,
    naab: '011HO16061',
    name: 'AltaAAMICK',
    remainder: 650,
    tpi: 3017,
    nm: 1035,
    fat: -2,
    protein: 51,
    yield: 3017,
    ease: 3017,
  },
  {
    id: 8,
    naab: '011HO16061',
    name: 'AltaAAMICK',
    remainder: 650,
    tpi: 3017,
    nm: 1035,
    fat: -2,
    protein: 51,
    yield: 3017,
    ease: 3017,
  },
  {
    id: 9,
    naab: '011HO16061',
    name: 'AltaAAMICK',
    remainder: 650,
    tpi: 3017,
    nm: 1035,
    fat: -2,
    protein: 51,
    yield: 3017,
    ease: 3017,
  },
  {
    id: 10,
    naab: '011HO16061',
    name: 'AltaAAMICK',
    remainder: 650,
    tpi: 3017,
    nm: 1035,
    fat: -2,
    protein: 51,
    yield: 3017,
    ease: 3017,
  },
  {
    id: 11,
    naab: '011HO16061',
    name: 'AltaAAMICK',
    remainder: 650,
    tpi: 3017,
    nm: 1035,
    fat: -2,
    protein: 51,
    yield: 3017,
    ease: 3017,
  },
  {
    id: 12,
    naab: '011HO16061',
    name: 'AltaAAMICK',
    remainder: 650,
    tpi: 3017,
    nm: 1035,
    fat: -2,
    protein: 51,
    yield: 3017,
    ease: 3017,
  },
  {
    id: 13,
    naab: '011HO16061',
    name: 'AltaAAMICK',
    remainder: 650,
    tpi: 3017,
    nm: 1035,
    fat: -2,
    protein: 51,
    yield: 3017,
    ease: 3017,
  },
];

const columns: GridColDef[] = [
  { field: 'naab', headerName: 'NAAB', flex: 1 },
  { field: 'name', headerName: 'Имя', flex: 1 },
  { field: 'remainder', headerName: 'Остаток доз', flex: 1 },
  { field: 'tpi', headerName: 'TPI', flex: 1 },
  { field: 'nm', headerName: 'NM$', flex: 1 },
  { field: 'fat', headerName: 'Жир, %', flex: 1 },
  { field: 'protein', headerName: 'Белок, %', flex: 1 },
  { field: 'yield', headerName: 'Удой', flex: 1 },
  { field: 'ease', headerName: 'Легкость отела', flex: 1 },
];

const StyledDataGrid = styled(DataGrid)(({ theme }) => ({
  // zebra-stripes
  '& .odd': {
    backgroundColor: borderAccentGhostColor,
  },
  '& .even': {
    backgroundColor: theme.palette.common.white,
  },
  '& .odd:hover, & .even:hover': {
    backgroundColor: backgroundGhostColor,
  },
  // общий сброс рамок
  '&, [class^=MuiDataGrid]': {
    border: 'none',
  },
  '& .MuiDataGrid-columnSeparator': {
    display: 'none',
  },
  '& .MuiDataGrid-cell, & .MuiDataGrid-columnHeader': {
    display: 'flex',
    alignItems: 'center',
  },
  // стили текста в ячейках
  '& .MuiDataGrid-cell': {
    ...RegularXS,
    color: foregroundPrimaryColor,
  },
  // стили текста в заголовках
  '& .MuiDataGrid-columnHeaderTitle': {
    ...MediumXS,
    color: foregroundTertiaryColor,
    whiteSpace: 'normal',
  },

  '& .MuiDataGrid-row': {
    borderRadius: '8px',
  },

  '& .MuiDataGrid-row:hover': {
    background: `${backgroundInfoColor}`,
  },
  '& .MuiDataGrid-row:hover::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    border: `1px solid ${borderAccentColor}`,
    borderRadius: '8px',
    pointerEvents: 'none',
    boxSizing: 'border-box',
  },
}));

export const Grid = () => {
  const category = 'Семя';

  return (
    <Box
      component={'div'}
      sx={{
        p: '12px 0 0 0',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        flexGrow: '1',
      }}
    >
      <StyledDataGrid
        rows={rows}
        columns={columns}
        showToolbar
        pageSizeOptions={[5, 10, 25, 100, { value: -1, label: 'Все' }]}
        initialState={{
          pagination: {
            paginationModel: { pageSize: 10, page: 0 },
          },
        }}
        slots={{
          toolbar: CustomToolbar,
          row: (rowProps) => <CustomRow {...rowProps} category={category} />,
        }}
        localeText={{
          ...ruRU.components.MuiDataGrid.defaultProps.localeText,
          // ручное изменение "of" на "из" в списке страниц
          paginationDisplayedRows: ({ from, to, count }) =>
            `${from}–${to} из ${count === -1 ? `более чем ${to}` : count}`,
        }}
        sx={{
          // скрывает все полосы у грида
          '&, [class^=MuiDataGrid]': {
            border: 'none',
          },
          // Скрывает вертикальные разделители между колонками
          '& .MuiDataGrid-columnSeparator': {
            display: 'none',
          },
        }}
        getRowClassName={(params) =>
          params.indexRelativeToCurrentPage % 2 === 0 ? 'even' : 'odd'
        }
      />
    </Box>
  );
};
