import { Box } from '@mui/material';
import {
  contentBox,
  contentHeader,
  contentTitle,
  debtMessageStyle,
  gridBox,
} from '../style';

import { getCardsData } from '../../../../shared/model/data/cardsData';
import {
  foregroundAccentColor,
  foregroundPrimaryColor,
  RegularXS,
  SemiM,
} from '@ui/fonts/fonts';

import { Card1 } from './Cards/Card1';
import { Card3 } from './Cards/Card3';
import { Card4 } from './Cards/Card4';

export const Company = () => {
  const {
    companyName,
    debtMessage,
    isDebt,
    annualTurnover,
    cattle,
    staff,
    managers,
    details,
  } = getCardsData();

  return (
    <Box>
      <Box sx={contentBox}>
        <Box sx={contentHeader}>
          <Box sx={contentTitle}>
            <Box
              component={'span'}
              sx={{ ...SemiM, mr: '16px', color: foregroundPrimaryColor }}
            >
              {companyName}
            </Box>
            <Box component={'span'} sx={debtMessageStyle(isDebt)}>
              {debtMessage}
            </Box>
          </Box>
          <Box
            component="span"
            sx={{ ...RegularXS, color: foregroundAccentColor }}
          >
            Данные изменились?
          </Box>
        </Box>
        <Box sx={gridBox}>
          <Box
            component={'div'}
            display={'flex'}
            sx={{ flexDirection: 'column', gap: 2 }}
          >
            <Card1
              title={annualTurnover.title}
              headerValue={annualTurnover.header}
              semen={annualTurnover.semen}
            />
            <Card1
              title={cattle.title}
              headerValue={cattle.header}
              animals={cattle.animals}
              date={cattle.date}
            />
          </Box>
          <Card3
            title={staff.title}
            headerValue={staff.header}
            content={staff.content}
            contacts_title={staff.contactsTitle}
            contacts={staff.contacts}
          />
          <Box
            component={'div'}
            display={'flex'}
            sx={{ flexDirection: 'column', gap: 2 }}
          >
            <Card4
              title={details.title}
              headerValue={details.header}
              content={details.content}
            />
            <Card3
              title={managers.title}
              headerValue={managers.header}
              content={managers.content}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
