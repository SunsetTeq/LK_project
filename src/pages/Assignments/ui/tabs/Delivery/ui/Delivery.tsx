import { useAppSelector } from '@hooks/useAppSelector';
import { DeliveryCard } from './DeliveryCard';
import { getCardsData } from '../../../../../../shared/model/data/cardsData';
import { Box } from '@mui/material';
import { deliveryWrapper } from './style';

export const Delivery = () => {
  const selectedId = useAppSelector((state) => state.assignments.selectedId);
  const { assignmentsDelivery } = getCardsData();

  const deliveriesForAssignment = assignmentsDelivery.filter(
    (item) => item.assignments_id == selectedId,
  );

  if (deliveriesForAssignment.length === 0) {
    return <Box>Доставки для выбранной заявки не найдены</Box>;
  }

  return (
    <Box component={'div'} sx={deliveryWrapper}>
      {/* 
      // фильтр убрали
      <Button
        variant="text"
        sx={{
          ...MediumXS,
          color: foregroundSecondaryColor,
          textTransform: 'none',
          width: '-webkit-fit-content',
          mt: '16px',
          ml: '-6px',
        }}
        startIcon={<FilterListIcon />}
      >
        Фильтр
      </Button> */}
      {deliveriesForAssignment.map((delivery) => (
        <DeliveryCard key={delivery.id} delivery={delivery} />
      ))}
    </Box>
  );
};
