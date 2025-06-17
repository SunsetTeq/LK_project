import { Card } from '@ui/Card';
import { Box } from '@mui/material';
import { cardFirstColumn, cardColumn } from './cardStyle';

interface Card1Props {
  title: string;
  headerValue: string;
  semen?: { label: string; value: string }[];
  animals?: { label: string; value: string }[];
  date?: { label: string; value: string };
}

export const Card1: React.FC<Card1Props> = ({
  title,
  headerValue,
  semen,
  animals,
  date,
}) => (
  <Card title={title} headerValue={headerValue}>
    {animals ? (
      <>
        <Box sx={{ ...cardFirstColumn, rowGap: '4px' }}>
          {animals.map((item, idx) => (
            <Box key={idx}>{item.label}</Box>
          ))}
          {date && <Box>{date.label}</Box>}
        </Box>
        <Box sx={{ ...cardColumn, rowGap: '4px' }}>
          {animals.map((item, idx) => (
            <Box key={idx}>{item.value}</Box>
          ))}
          {date && <Box>{date.value}</Box>}
        </Box>
      </>
    ) : null}
    {semen ? (
      <>
        <Box sx={{ ...cardFirstColumn, rowGap: '4px' }}>
          {semen.map((item, idx) => (
            <Box key={idx}>{item.label}</Box>
          ))}
        </Box>
        <Box sx={{ ...cardColumn, rowGap: '4px' }}>
          {semen.map((item, idx) => (
            <Box key={idx}>{item.value}</Box>
          ))}
        </Box>
      </>
    ) : null}
  </Card>
);
