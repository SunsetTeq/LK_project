import { styled } from '@mui/material/styles';
import {
  Toolbar,
  ToolbarButton,
  FilterPanelTrigger,
  QuickFilter,
  QuickFilterControl,
  QuickFilterClear,
  QuickFilterTrigger,
} from '@mui/x-data-grid';
import Tooltip from '@mui/material/Tooltip';
import Badge from '@mui/material/Badge';
import FilterListIcon from '@mui/icons-material/FilterList';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import CancelIcon from '@mui/icons-material/Cancel';
import SearchIcon from '@mui/icons-material/Search';
import { Typography } from '@mui/material';
import {
  foregroundSecondaryColor,
  foregroundTertiaryColor,
  RegularS,
} from '@ui/fonts/fonts';

type OwnerState = {
  expanded: boolean;
};

const StyledQuickFilter = styled(QuickFilter)({
  display: 'grid',
  alignItems: 'center',
});

const StyledToolbarButton = styled(ToolbarButton)<{ ownerState: OwnerState }>(
  ({ theme, ownerState }) => ({
    gridArea: '1 / 1',
    width: 'min-content',
    height: 'min-content',
    zIndex: 1,
    opacity: ownerState.expanded ? 0 : 1,
    pointerEvents: ownerState.expanded ? 'none' : 'auto',
    transition: theme.transitions.create(['opacity']),
  }),
);

const StyledTextField = styled(TextField)<{
  ownerState: OwnerState;
}>(({ theme, ownerState }) => ({
  gridArea: '1 / 1',
  overflowX: 'clip',
  width: ownerState.expanded ? 260 : 'var(--trigger-width)',
  opacity: ownerState.expanded ? 1 : 0,
  transition: theme.transitions.create(['width', 'opacity']),
  // меняем цвет текста внутри окна поиска
  '& .MuiInputBase-input': {
    ...RegularS,
    color: foregroundTertiaryColor,
  },
  // меняем цвет иконок внутри окна поиска
  '& .MuiSvgIcon-root': {
    color: foregroundSecondaryColor,
  },
}));

export function CustomToolbar() {
  return (
    <Toolbar>
      <Tooltip title="Фильтры">
        <FilterPanelTrigger
          render={(props, state) => (
            <ToolbarButton {...props} color="default">
              <Badge
                badgeContent={state.filterCount}
                color="primary"
                variant="dot"
              >
                <FilterListIcon
                  fontSize="small"
                  sx={{ color: foregroundTertiaryColor }}
                />
              </Badge>
              <Typography
                component={'span'}
                sx={{ ...RegularS, color: foregroundTertiaryColor, ml: '8px' }}
              >
                Фильтры
              </Typography>
            </ToolbarButton>
          )}
        />
      </Tooltip>

      <div style={{ flex: 1 }} />

      <StyledQuickFilter expanded>
        <QuickFilterTrigger
          render={(triggerProps, state) => (
            <Tooltip title="Поиск" enterDelay={0}>
              <StyledToolbarButton
                {...triggerProps}
                ownerState={{ expanded: state.expanded }}
                color="default"
                aria-disabled={state.expanded}
              >
                <SearchIcon fontSize="small" />
              </StyledToolbarButton>
            </Tooltip>
          )}
        />
        <QuickFilterControl
          render={({ ref, ...controlProps }, state) => (
            <StyledTextField
              {...controlProps}
              ownerState={{ expanded: state.expanded }}
              inputRef={ref}
              variant="standard"
              aria-label="Поиск"
              placeholder="Поиск"
              size="small"
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon fontSize="small" />
                    </InputAdornment>
                  ),
                  endAdornment: state.value ? (
                    <InputAdornment position="end">
                      <QuickFilterClear
                        edge="end"
                        size="small"
                        aria-label="Clear search"
                        material={{ sx: { marginRight: -0.75 } }}
                      >
                        <CancelIcon fontSize="small" />
                      </QuickFilterClear>
                    </InputAdornment>
                  ) : null,
                  ...controlProps.slotProps?.input,
                },
                ...controlProps.slotProps,
              }}
            />
          )}
        />
      </StyledQuickFilter>
    </Toolbar>
  );
}
