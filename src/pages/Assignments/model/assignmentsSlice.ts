import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AssignmentsState {
  selectedId: string | null;
}

const initialState: AssignmentsState = {
  selectedId: null,
};

export const assignmentsSlice = createSlice({
  name: 'assignments',
  initialState,
  reducers: {
    selectAssignment(state, action: PayloadAction<string>) {
      state.selectedId = action.payload;
    },
    clearSelection(state) {
      state.selectedId = null;
    },
  },
});

export const { selectAssignment, clearSelection } = assignmentsSlice.actions;
export default assignmentsSlice.reducer;
