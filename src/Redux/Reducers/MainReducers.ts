export interface ITheme {
  theme: string;
}

export const initialState: ITheme = {
  theme: 'light',
};

export const MainReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'THEME.CHANGE':
      return {
        ...state,
        theme: action.theme,
      };

    default:
      return state;
  }
};
