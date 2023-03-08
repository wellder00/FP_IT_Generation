import React, { useState, useEffect } from 'react';

function Timer() {
  const [isUserActive, setIsUserActive] = useState(true);

  useEffect(() => {
    let timeout;

    // Функция, которая сбрасывает таймер и обновляет состояние isUserActive
    const resetTimer = () => {
      clearTimeout(timeout);
      setIsUserActive(true);
      timeout = setTimeout(() => {
        setIsUserActive(false);
      }, 600); // Таймер на 60 секунд
    };

    // Обработчик события, который вызывается при любом действии пользователя
    const handleUserActivity = () => {
      resetTimer();
    };

    // Запускаем таймер при монтировании компонента
    resetTimer();

    // Устанавливаем обработчик событий для элемента body
    document.body.addEventListener('mousemove', handleUserActivity);
    document.body.addEventListener('keydown', handleUserActivity);

    // Отключаем обработчики событий при размонтировании компонента
    return () => {
      document.body.removeEventListener('mousemove', handleUserActivity);
      document.body.removeEventListener('keydown', handleUserActivity);
      clearTimeout(timeout);
    };
  }, []);

  useEffect(() => {
    let interval;

    // Функция, которая выводит предупреждение через алерт
    const warnUser = () => {
      const confirmTimeout = setTimeout(() => {
        window.close(); // Закрываем вкладку        
      }, 300); // Таймер на 30 секунд

      if (window.confirm('Вы всё ещё здесь?')) {
        clearTimeout(confirmTimeout); // Отменяем закрытие вкладки
      } else {
        window.close(); // Закрываем вкладку
      }
    };

    // Запускаем таймер на 60 секунд после неактивности пользователя
    if (!isUserActive) {
      interval = setInterval(() => {
        warnUser();
      }, 600); // Таймер на 60 секунд
    }

    // Отключаем таймер при любом действии пользователя
    if (isUserActive) {
      clearInterval(interval);
    }

    // Отключаем таймер при размонтировании компонента
    return () => clearInterval(interval);
  }, [isUserActive]);

  return (
    <div>
      {isUserActive ? (
        <p>Пользователь находится на странице</p>
      ) : (
        <p>Пользователь неактивен</p>
      )}
    </div>
  );
}

export default Timer;