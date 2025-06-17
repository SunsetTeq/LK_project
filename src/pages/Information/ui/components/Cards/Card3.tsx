import { Card } from '@ui/Card';
import { Box, Link } from '@mui/material';
import { cardFirstColumn } from './cardStyle';
import {
  foregroundAccentColor,
  foregroundPrimaryColor,
  foregroundTertiaryColor,
} from '@ui/fonts/fonts';

interface Card3Props {
  title: string;
  headerValue: string;
  content: {
    role: string;
    name: string;
    phone: string;
    mail: string;
  }[];
  contacts_title?: string;
  contacts?: {
    type: string;
    list: string[];
  }[];
}

export const Card3: React.FC<Card3Props> = ({
  title,
  headerValue,
  content,
  contacts_title,
  contacts,
}) => (
  <Card title={title} headerValue={headerValue}>
    <Box sx={cardFirstColumn}>
      {content.map((item, idx) => (
        <Box key={idx} sx={{ mb: 2 }}>
          <Box color={foregroundTertiaryColor}>{item.role}</Box>
          <Box color={foregroundPrimaryColor}>{item.name}</Box>
          <Box
            sx={{
              display: 'flex',
              gap: 1,
              color: foregroundAccentColor,
              p: '4px 0 0 0',
              columnGap: '4px',
              rowGap: '4px',
              flexWrap: 'wrap',
            }}
          >
            <Link
              href={`tel:${item.phone}`}
              underline="none"
              sx={{ whiteSpace: 'nowrap' }}
            >
              {item.phone}
            </Link>
            <Box component="span">·</Box>
            <Link
              href={`mailto:${item.mail}`}
              underline="none"
              sx={{ whiteSpace: 'nowrap' }}
            >
              {item.mail}
            </Link>
          </Box>
        </Box>
      ))}
      <Box color={foregroundTertiaryColor}>{contacts_title}</Box>
      {contacts?.map((item, idx) => (
        <Box key={idx} sx={{ mb: 2 }}>
          <Box color={foregroundPrimaryColor}>{item.type}</Box>
          <Box
            component={'div'}
            sx={{
              display: 'flex',
              columnGap: '8px',
              rowGap: '4px',
              flexWrap: 'wrap',
              p: '4px 0 0 0',
            }}
          >
            {item.list?.map((contact, jdx) => (
              <Box
                key={jdx}
                component={'span'}
                sx={{ color: foregroundAccentColor }}
              >
                {item.type.toLowerCase() === 'телефон' ? (
                  <Link
                    href={`tel:${contact}`}
                    underline="none"
                    sx={{ whiteSpace: 'nowrap' }}
                  >
                    {contact}
                  </Link>
                ) : (
                  <Link
                    href={`mailto:${contact}`}
                    underline="none"
                    sx={{ whiteSpace: 'nowrap' }}
                  >
                    {contact}
                  </Link>
                )}
              </Box>
            ))}
          </Box>
        </Box>
      ))}
    </Box>
  </Card>
);
