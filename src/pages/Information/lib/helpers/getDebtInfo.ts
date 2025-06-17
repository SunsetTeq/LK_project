export const getDebtInfo = (debt: number | undefined) => {
  if (debt == null) {
    // не строгая проверка в контексте проверки на und
    return {
      debt_message: 'Нет информации',
      isDebt: true,
    };
  }
  if (debt === 0) {
    return {
      debt_message: 'нет задолженности',
      isDebt: false,
    };
  } else {
    return {
      debt_message: `Задолженность: ${debt} руб.`,
      isDebt: true,
    };
  }
};
