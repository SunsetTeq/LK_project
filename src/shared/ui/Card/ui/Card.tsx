import { Box } from '@mui/material';
import {
  cardTitle,
  cardHeader,
  cardWrapper,
  cardContentBox,
  cardCountValue,
  cardStatus,
  cardStatusBox,
} from './styles';
import { Circular } from '@ui/Circular';
import {
  backgroundAccentGhostColor,
  backgroundGhostColor,
  backgroundSuccessColor,
  backgroundWarningColor,
  borderAccentSecondaryColor,
  borderGhostColor,
  borderSuccessSecondaryColor,
  borderWarningSecondaryColor,
  foregroundAccentColor,
  foregroundPrimaryColor,
  foregroundSuccessColor,
  foregroundWarningColor,
} from '@ui/fonts/fonts';

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
  // цвет статуса
  const statusStyle = (() => {
    switch (assignmentStatus) {
      case 'На согласовании':
        return {
          color: foregroundWarningColor,
          border: `1px solid ${borderWarningSecondaryColor}`,
          backgroundColor: backgroundWarningColor,
        };
      case 'Исполняется':
        return {
          color: foregroundAccentColor,
          border: `1px solid ${borderAccentSecondaryColor}`,
          backgroundColor: backgroundAccentGhostColor,
        };
      case 'Выполнено':
        return {
          color: foregroundSuccessColor,
          border: `1px solid ${borderSuccessSecondaryColor}`,
          backgroundColor: backgroundSuccessColor,
        };
      default:
        return {
          color: foregroundPrimaryColor,
          border: borderGhostColor,
          backgroundColor: backgroundGhostColor,
        };
    }
  })();

  return (
    <Box sx={cardWrapper}>
      <Box sx={cardHeader}>
        <Box component={'div'} sx={cardStatusBox}>
          {assignmentStatus && (
            <Box sx={{ ...cardStatus, ...statusStyle }}>{assignmentStatus}</Box>
          )}
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
