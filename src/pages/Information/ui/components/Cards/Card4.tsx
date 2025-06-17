import { Card } from '@ui/Card';
import { Box } from '@mui/material';
import { cardFirstColumn } from './cardStyle';
import {
  foregroundPrimaryColor,
  foregroundTertiaryColor,
} from '@ui/fonts/fonts';

interface Card4Props {
  title: string;
  headerValue: string;
  content: {
    type: string;
    adress: string;
  }[];
}

export const Card4: React.FC<Card4Props> = ({
  title,
  headerValue,
  content,
}) => (
  <Card title={title} headerValue={headerValue}>
    <Box sx={cardFirstColumn}>
      {content.map((item, idx) => (
        <Box key={idx} sx={{ mb: 2 }}>
          <Box sx={{ color: foregroundTertiaryColor }}>{item.type}</Box>
          <Box sx={{ color: foregroundPrimaryColor }}>{item.adress}</Box>
        </Box>
      ))}
    </Box>
  </Card>
);
