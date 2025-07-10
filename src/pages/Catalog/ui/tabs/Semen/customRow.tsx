import * as React from 'react';
import { Box } from '@mui/material';
import { GridRow, gridClasses, type GridRowProps } from '@mui/x-data-grid';
import { Button1, Button2 } from '@ui/Buttons/buttons';
import { backgroundInfoColor } from '@ui/fonts/fonts';
import type { Category } from '@pages/Catalog/constants/categories';
import { useRowActions } from '@pages/Catalog/lib/hooks/useRowActions';

export type CustomRowProps = GridRowProps & {
  category: Category;
};

export function CustomRow(props: CustomRowProps) {
  const [hovered, setHovered] = React.useState(false);

  const { handleAdd, handleClear } = useRowActions();

  const existingStyle = (props as any).style || {};

  return (
    <div
      className={gridClasses.row}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ position: 'relative' }}
    >
      <GridRow
        {...props}
        style={{
          ...existingStyle,
          background: hovered ? backgroundInfoColor : existingStyle.background,
        }}
      />

      {hovered && (
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            right: 15,
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            pr: 1,

            background: 'rgba(0,0,0,0.0)', // прозрачный фон
            pointerEvents: 'none',
            '& > *': {
              pointerEvents: 'auto', // кнопки — кликабельны
            },
          }}
        >
          <Button1
            onClick={() => handleAdd(props.category, props.row, props.rowId)}
          >
            Добавить в корзину
          </Button1>
          <Button2 onClick={handleClear}>Подробнее</Button2>
        </Box>
      )}
    </div>
  );
}
