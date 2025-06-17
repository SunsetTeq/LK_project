import { useDispatch } from 'react-redux';
import { AppDispatch } from '@app/store/AppStore';

export const useAppDispatch = useDispatch<AppDispatch>;
