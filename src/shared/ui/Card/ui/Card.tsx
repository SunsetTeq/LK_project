import { Box } from '@mui/material';
import {
  cardTitle,
  cardHeader,
  cardWrapper,
  cardContentBox,
  cardCountValue,
  cardStatusBox,
} from './styles';
import { Circular } from '@ui/Circular';
import { Status } from '@ui/Status/ui/Status';

interface CardProps {
  title: string;
  assignmentStatus?: string;
  headerValue: React.ReactNode;
  children?: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({
  title,
  headerValue,
  assignmentStatus,
  children,
}) => {
  return (
    <Box sx={cardWrapper}>
      <Box sx={cardHeader}>
        <Box component={'div'} sx={cardStatusBox}>
          {assignmentStatus && <Status assignmentStatus={assignmentStatus} />}
          <Box sx={cardTitle}>{title}</Box>
        </Box>
        <Box sx={cardCountValue}>
          {typeof headerValue === 'string' && headerValue.endsWith('%') ? (
            <Circular value={parseInt(headerValue)} />
          ) : (
            headerValue
          )}
        </Box>
      </Box>
      <Box sx={cardContentBox}>{children}</Box>
    </Box>
  );
};
