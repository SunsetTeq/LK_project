import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import React from 'react';
import { Box } from '@mui/material';
import SelectIcon from '@ui/icons/select-icon.svg?react';
import { selectBox, selectField } from './styles';

export const Selector = () => {
  const [company, setCompany] = React.useState('Звезда');

  const handleChange = (event: SelectChangeEvent) => {
    setCompany(event.target.value);
  };
  return (
    <Box sx={selectBox}>
      <FormControl
        sx={{
          m: 1,
          minWidth: 200,
        }}
        size="small"
      >
        <Select
          value={company}
          onChange={handleChange}
          sx={selectField}
          IconComponent={SelectIcon}
        >
          <MenuItem value={'Звезда'}>ООО Красная Звезда</MenuItem>
          <MenuItem value={'Корова'}>ООО Зеленый Слоник</MenuItem>
          <MenuItem value={'Бурёнка'}>ООО Грибная Корова</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};
