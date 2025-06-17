import { Box, Divider, IconButton, Typography } from '@mui/material';
import {
  Button1,
  cartBoxEmpty,
  cartBoxNoEmpty,
  cartBoxNoEmptyContent,
  cartCategoryStyle,
  cartFooter,
  cartFooterBox,
  cartWrap,
  listofPurchases,
  stringPurschases,
} from '../styles';
import RemoveIcon from '../img/remove.svg?react';
import { foregroundTertiaryColor, RegularXS } from '@ui/fonts/fonts';
import Icon from '../img/ic_shop_card.svg?react';
import AlertCartDialog from './AlertCartDialog';
import { useAppSelector } from '@hooks/useAppSelector';
import { CategoryInCart } from '@pages/Catalog/model/cartTypes';
import { useRowActions } from '@pages/Catalog/lib/hooks/useRowActions';

export const Cart = () => {
  const cartSections = useAppSelector((state) => state.cart);
  const nonEmptySections = cartSections.filter(
    (section: CategoryInCart) => section.items.length > 0,
  );

  return nonEmptySections.length === 0 ? (
    <EmptyCart />
  ) : (
    <NoEmptyCart nonEmptySections={nonEmptySections} />
  );
};

export const EmptyCart = () => {
  return (
    <Box component={'div'} sx={cartWrap}>
      <AlertCartDialog />
      <Box sx={cartBoxEmpty}>
        <Box component={'div'} sx={{ m: '16px 0 8px 0' }}>
          <Icon />
        </Box>
        <Box component={'div'}>
          <Typography sx={{ ...RegularXS, color: foregroundTertiaryColor }}>
            Корзина пока пуста
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

type NoEmptyCartProps = {
  nonEmptySections: CategoryInCart[];
};

export const NoEmptyCart = ({ nonEmptySections }: NoEmptyCartProps) => {
  const { handleRemove } = useRowActions();
  const category = 'Семя';

  return (
    <Box component={'div'} sx={cartWrap}>
      <AlertCartDialog />
      <Box sx={cartBoxNoEmpty}>
        <Box component={'div'} sx={cartBoxNoEmptyContent}>
          {nonEmptySections.map((section: CategoryInCart) => (
            <Box key={section.category} sx={listofPurchases}>
              <Typography sx={cartCategoryStyle}>{section.category}</Typography>
              <Box component={'div'}>
                {section.items.map((item) => (
                  <Box
                    component={'div'}
                    key={item.uniqId}
                    sx={stringPurschases}
                  >
                    <Typography sx={{ flexGrow: 1 }}>{item.name}</Typography>
                    <Box component={'div'} sx={{ display: 'flex', gap: 1 }}>
                      <Typography>{item.naab}</Typography>
                      <IconButton
                        sx={{ p: 0 }}
                        onClick={() => handleRemove(category, item.uniqId)}
                      >
                        <RemoveIcon />
                      </IconButton>
                    </Box>
                  </Box>
                ))}
              </Box>
            </Box>
          ))}
          <Divider />
          <Box component={'div'} sx={cartFooterBox}>
            <Box sx={cartFooter}>
              <Button1 variant="contained" fullWidth>
                Оформить заявку
              </Button1>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
