import React from 'react';
import { Box, Tab, Tabs } from '@mui/material';
import { PageDevider } from '@ui/PageDevider';
import { dinTab, dynTabs, onlyTabs } from './styles';

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
        flexGrow: '1',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
      }}
    >
      <Box component={'div'}>
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
      {tabs.map(
        (tab, idx) =>
          value === idx && (
            <div
              key={idx}
              role="tabpanel"
              hidden={value !== idx}
              style={{ display: 'flex', flexGrow: '1' }}
            >
              {tab.content}
            </div>
          ),
      )}
    </Box>
  );
};
