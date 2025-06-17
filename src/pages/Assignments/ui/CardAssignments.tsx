import { Card } from '@ui/Card';
import { Box } from '@mui/material';
import { cardFirstColumn, cardColumn } from '@ui/Card/ui/styles';
import { foregroundAccentColor } from '@ui/fonts/fonts';

interface CardAssignmentsProps {
  title: string;
  headerValue: string;
  assignmentStatus: string;
  content: {
    regular: string;
    period: string;
    total_doses: number;
    shipped_doses: number;
    left_doses: number;
    dealings: number;
  };
  contentLabels: {
    regular: string;
    period: string;
    total_doses: string;
    shipped_doses: string;
    left_doses: string;
    dealings: string;
  };
}

const KEYS = [
  'regular',
  'period',
  'total_doses',
  'shipped_doses',
  'left_doses',
  'dealings',
] as const;

export const CardAssignments: React.FC<CardAssignmentsProps> = ({
  title,
  headerValue,
  assignmentStatus,
  content,
  contentLabels,
}) => (
  <Card
    title={title}
    headerValue={headerValue}
    assignmentStatus={assignmentStatus}
  >
    <>
      <Box sx={{ ...cardFirstColumn, rowGap: '4px' }}>
        {KEYS.map((key) => (
          <Box
            key={key}
            sx={{ pl: key === 'shipped_doses' || key === 'left_doses' ? 2 : 0 }}
          >
            {contentLabels[key]}
          </Box>
        ))}
      </Box>
      <Box sx={{ ...cardColumn, rowGap: '4px' }}>
        {KEYS.map((key) => (
          <Box
            key={key}
            sx={{
              color:
                key === 'dealings' && content[key] > 0
                  ? foregroundAccentColor
                  : 'inherit',
            }}
          >
            {content[key].toLocaleString('ru-RU')}
          </Box>
        ))}
      </Box>
    </>
  </Card>
);
