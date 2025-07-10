import { Box } from '@mui/material';
import { AssignmentsGrid } from '@pages/Assignments/ui/components/AssignmentsGrid';
import { executionWrapper } from './style';
import { getCardsData } from '../../../../../../shared/model/data/cardsData';
import { useAppSelector } from '@hooks/useAppSelector';
import {
  GridColDef,
  GridRenderCellParams,
  GridRowsProp,
} from '@mui/x-data-grid';

export const Execution = () => {
  const { assignmentsExecution } = getCardsData();
  const selectedId = useAppSelector((state) => state.assignments.selectedId);

  const selectedExecution = assignmentsExecution.find(
    (item) => item.id == selectedId,
  );
  console.log(selectedExecution);
  console.log(selectedId);
  // чтобы текст в ячейках обрезался
  const renderEllipsisCell = (params: GridRenderCellParams) => {
    return (
      <Box
        sx={{
          flex: '1 1 0px',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
        }}
      >
        {params.value}
      </Box>
    );
  };

  const columns: GridColDef[] = [
    {
      field: 'product',
      headerName: 'Товар',
      headerClassName: 'firstColHeader',
      flex: 1,
      renderCell: renderEllipsisCell,
    },
    {
      field: 'article',
      headerName: 'Артикул',
      flex: 1,
      renderCell: renderEllipsisCell,
    },
    {
      field: 'count_fixed',
      headerName: 'Закреплено, доз',
      flex: 1,
      renderCell: renderEllipsisCell,
    },
    {
      field: 'count_set',
      headerName: 'Поставлено, доз',
      flex: 1,
      renderCell: renderEllipsisCell,
    },
    {
      field: 'count_required',
      headerName: 'Требуется, доз',
      flex: 1,
      renderCell: renderEllipsisCell,
    },
    {
      field: 'count_performed',
      headerName: 'Выполнено',
      flex: 1,
      renderCell: renderEllipsisCell,
      headerClassName: 'lastColHeader',
    },
  ];

  const rows: GridRowsProp =
    selectedExecution?.rows.map((r, i) => ({
      id: i,
      ...r,
    })) ?? [];

  return (
    <Box component={'div'} sx={executionWrapper}>
      <AssignmentsGrid columns={columns} rows={rows} />
    </Box>
  );
};
