import { Box } from '@mui/material';
import { AssignmentsGrid } from '@pages/Assignments/ui/components/AssignmentsGrid';
import { RegularXS } from '@ui/fonts/fonts';
import { goodsWrapper } from './style';
import { getCardsData } from '../../../../../../shared/model/data/cardsData';
import { useAppSelector } from '@hooks/useAppSelector';
import { GridColDef, GridRowsProp } from '@mui/x-data-grid';

export const Goods = () => {
  const { assignmentsGoods } = getCardsData();
  const selectedId = useAppSelector((state) => state.assignments.selectedId);

  const selectedGoods = assignmentsGoods.find((item) => item.id == selectedId);
  console.log(selectedGoods);
  console.log(selectedId);

  const columns: GridColDef[] = [
    {
      field: 'product',
      headerName: 'Товар',
      headerClassName: 'firstColHeader',
      flex: 1,
    },
    { field: 'article', headerName: 'Артикул', flex: 1 },
    {
      field: 'count',
      headerName: 'Кол-во доз',
      flex: 1,
      headerClassName: 'lastColHeader',
      headerAlign: 'right',
      align: 'right',
    },
  ];

  const rows: GridRowsProp =
    selectedGoods?.rows.map((r, i) => ({
      id: i,
      ...r,
    })) ?? [];

  return (
    <Box component={'div'} sx={goodsWrapper}>
      <AssignmentsGrid columns={columns} rows={rows} />
      <Box
        component={'div'}
        display={'flex'}
        sx={{ ...RegularXS, pt: '8px', pr: '24px', pl: '10px' }}
      >
        {selectedGoods && (
          <>
            <Box sx={{ flexGrow: 1 }}>ИТОГО</Box>
            <Box sx={{ mr: '-6px' }}>{selectedGoods.sum}</Box>
          </>
        )}
      </Box>
    </Box>
  );
};
