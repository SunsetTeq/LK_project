import { useLoginMutation } from '@api/authApi';
import { IUserAuthRequestParams } from '@type/authTypes';
import { useState } from 'react';
import { useAppDispatch } from '@hooks/useAppDispatch';
import { logIn } from '@slices/authSlice';

import styles from './styles.module.scss';

export const Auth = () => {
  // consts
  const dispatch = useAppDispatch();

  // api
  const [login, { isLoading, isError }] = useLoginMutation();

  // states
  const [userData, setUserData] = useState<IUserAuthRequestParams>({
    username: '',
    password: '',
  });

  // handlers
  const handleClick = () => {
    login(userData)
      .unwrap()
      .then((response) => {
        const { auth_token } = response;

        if (auth_token) {
          dispatch(logIn({ token: auth_token }));
        }
      })
      .catch(() => {});
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;

    setUserData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  return (
    <div className={styles.wrapper}>
      <h1>Страница авторизации</h1>
      <div className={styles.form}>
        <div className={styles.field}>
          <span>Логин:</span>
          <input
            type="text"
            placeholder="Логин"
            name="username"
            onChange={handleChange}
          />
        </div>
        <div className={styles.field}>
          <span>Пароль:</span>
          <input
            type="password"
            placeholder="Пароль"
            name="password"
            onChange={handleChange}
          />
        </div>
        {isLoading && <span className={styles.loading}>Загрузка...</span>}
        {isError && <span className={styles.error}>Ошибка авторизации</span>}
      </div>
      <button type="button" onClick={handleClick}>
        Войти
      </button>
    </div>
  );
};
