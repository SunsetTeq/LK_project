import { Card } from '@ui/Card';
import { Box } from '@mui/material';
import { cardFirstColumn, cardColumn } from '@ui/Card/ui/styles';
import { foregroundAccentColor } from '@ui/fonts/fonts';
import { AlertCardDialog } from './components/AlertCardDialog/ui/AlertCardDialog';
import { CardAssignmentsProps } from '../model/assigmentsData';
import { KEYS } from '../model/assigmentsData';

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
    <Box
      component={'div'}
      sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}
    >
      <Box component={'div'} sx={{ display: 'flex', flexDirection: 'row' }}>
        <Box sx={{ ...cardFirstColumn, rowGap: '4px' }}>
          {KEYS.map((key) => (
            <Box
              key={key}
              sx={{
                pl: key === 'shipped_doses' || key === 'left_doses' ? 2 : 0,
              }}
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
      </Box>
      {assignmentStatus === 'Исполняется' && (
        <Box sx={{ mt: 2 /* отступ сверху, можно настроить */ }}>
          <AlertCardDialog />
        </Box>
      )}
    </Box>
  </Card>
);
