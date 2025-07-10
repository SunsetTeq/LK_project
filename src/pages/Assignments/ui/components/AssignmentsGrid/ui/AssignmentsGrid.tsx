import { createTheme, styled, ThemeProvider } from '@mui/material';
import { DataGrid, GridColDef, GridRowsProp } from '@mui/x-data-grid';
import { ruRU } from '@mui/x-data-grid/locales';
import {
  foregroundPrimaryColor,
  foregroundTertiaryColor,
  RegularXS,
} from '@ui/fonts/fonts';
import type {} from '@mui/x-data-grid/themeAugmentation';

const theme = createTheme({
  palette: {
    DataGrid: {
      headerBg: '#F8F8F8',
    },
  },
});

const StyledDataGrid = styled(DataGrid)(({}) => ({
  '&.MuiDataGrid-root': {
    borderRight: 'none',
    borderLeft: 'none',
    borderTop: 'none',
    borderRadius: '0px',
  },

  // убирает нижнюю границу у заголовка
  '& .MuiDataGrid-row--borderBottom .MuiDataGrid-cell, \
       & .MuiDataGrid-row--borderBottom .MuiDataGrid-columnHeader, \
       & .MuiDataGrid-row--borderBottom .MuiDataGrid-filler, \
       & .MuiDataGrid-row--borderBottom .MuiDataGrid-scrollbarFiller': {
    borderBottom: 'none',
    backgroundColor: '#F8F8F8',
  },

  '& .MuiDataGrid-row--borderBottom .MuiDataGrid-cell, \
       & .MuiDataGrid-row--borderBottom .MuiDataGrid-filler, \
       & .MuiDataGrid-row--borderBottom .MuiDataGrid-scrollbarFiller': {
    borderRadius: '0px 8px 8px 0px',
  },

  // разделители заголовка
  '& .MuiDataGrid-columnSeparator': {
    width: '1px',
    right: '0',
  },
  // скрыть последний разделитель
  '&& .lastColHeader > .MuiDataGrid-columnSeparator': {
    display: 'none',
  },

  '&& .firstColHeader': {
    borderRadius: '8px 0px 0px 8px',
  },

  // выравнивание по вертикали
  '& .MuiDataGrid-cell, & .MuiDataGrid-columnHeader': {
    display: 'flex',
    alignItems: 'center',
  },

  // стили текста в ячейках
  '& .MuiDataGrid-cell': {
    minWidth: 0,
    ...RegularXS,
    color: foregroundPrimaryColor,
  },

  // стили текста в заголовках
  '& .MuiDataGrid-columnHeaderTitle': {
    ...RegularXS,
    color: foregroundTertiaryColor,
  },
}));

interface GridProps {
  columns: GridColDef[];
  rows: GridRowsProp;
}

export const AssignmentsGrid: React.FC<GridProps> = ({ columns, rows }) => {
  return (
    <ThemeProvider theme={theme}>
      <StyledDataGrid
        rows={rows}
        columnHeaderHeight={36}
        columns={columns}
        hideFooter // без нижней панели с пагинацией
        localeText={{
          ...ruRU.components.MuiDataGrid.defaultProps.localeText,
          // ручное изменение "of" на "из" в списке страниц
          paginationDisplayedRows: ({ from, to, count }) =>
            `${from}–${to} из ${count === -1 ? `более чем ${to}` : count}`,
        }}
      />
    </ThemeProvider>
  );
};
