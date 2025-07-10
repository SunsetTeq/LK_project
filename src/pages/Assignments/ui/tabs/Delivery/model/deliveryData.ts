interface DeliveryContent {
  date: string;
  price: string;
  shipped: string;
  left: string;
}

interface DeliveryItem {
  id: string | null;
  assignments_id: string | null;
  status: string;
  label: string;
  content: DeliveryContent;
}

export interface DeliveryCardProps {
  delivery: DeliveryItem;
}

export interface DeliveryIndicatorProps {
  status: string;
}
