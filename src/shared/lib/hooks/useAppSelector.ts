import { useSelector, type TypedUseSelectorHook } from 'react-redux';
import { RootState } from '@app/store/AppStore';

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
