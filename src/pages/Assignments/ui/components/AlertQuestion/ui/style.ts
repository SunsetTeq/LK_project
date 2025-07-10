export const fileUpload = {
  backgroundImage: `url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='8' ry='8' stroke='%23E0E0E0' stroke-width='2' stroke-dasharray='8' stroke-dashoffset='3' stroke-linecap='square'/%3e%3c/svg%3e")`,

  borderRadius: '8px',
  minHeight: '92px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  mt: '15px',

  '&:hover': {
    backgroundImage: `url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='8' ry='8' stroke='%23212121' stroke-width='2' stroke-dasharray='8' stroke-dashoffset='3' stroke-linecap='square'/%3e%3c/svg%3e")`,
  },
};
