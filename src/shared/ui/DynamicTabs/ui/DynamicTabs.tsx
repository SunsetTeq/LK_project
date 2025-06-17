import React from 'react';
import { Box, Tab, Tabs } from '@mui/material';
import { PageDevider } from '@ui/PageDevider';
import { boxTab, dinTab, dynTabs, onlyTabs } from './styles';

interface TabItem {
  label: string;
  content: React.ReactNode;
}

interface DynamicTabsProps {
  tabs: TabItem[];
  ariaLabel?: string;
}

export const DynamicTabs: React.FC<DynamicTabsProps> = ({
  tabs,
  ariaLabel,
}) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (_: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        width: '100%',
      }}
    >
      <Box component={'div'} sx={boxTab}>
        <Box sx={onlyTabs}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label={ariaLabel}
            sx={dynTabs}
            slotProps={{
              indicator: {
                children: <span className="MuiTabs-indicatorSpan" />,
              },
            }}
          >
            {tabs.map((tab, idx) => (
              <Tab key={idx} label={tab.label} sx={dinTab} />
            ))}
          </Tabs>
        </Box>
        <PageDevider />
      </Box>
      {tabs.map((tab, idx) => (
        <div key={idx} role="tabpanel" hidden={value !== idx}>
          {value === idx && <Box>{tab.content}</Box>}
        </div>
      ))}
    </Box>
  );
};
