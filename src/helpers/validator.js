export const validateTitle = (title) => {
  const titleValidateArray = title.split(" ");
  let currentError = "";

  //errors list
  const emptyArrayError = (array) => {
    if (array.length === 1 && array[0].length === 0) {
      return false;
    }
    return true;
  };

  const notLongEnoughError = (array) => {
    if (array.length === 1) {
      return false;
    }
    return true;
  };

  const notLongEnoughFirstFieldError = (array) => {
    if (array[0].length <= 2) {
      return false;
    }
    return true;
  };

  const notLongEnoughSecondFieldError = (array) => {
    if (array[1].length <= 2) {
      return false;
    }
    return true;
  };

  const tooLong = (array) => {
    if (array.length > 2) {
      return false;
    }
    return true;
  };

  const errors = [
    {
      error: emptyArrayError,
      message: "Заполните поле",
    },
    {
      error: notLongEnoughError,
      message: "Введите имя и фамилию через пробел",
    },
    {
      error: notLongEnoughFirstFieldError,
      message: "Минимальная длина имени - 2 символа",
    },
    {
      error: notLongEnoughSecondFieldError,
      message: "Минимальная длина фамилии - 2 символа",
    },
    {
      error: tooLong,
      message: "Максимально количество слов - 2",
    },
  ];

  errors.every((error) => {
    if (!error.error(titleValidateArray)) {
      currentError = error.message;
      return false;
    }
    return true;
  });

  return currentError;
};

export const validateDescription = (description) => {
  const descriptionValidateArray = description.split(" ");
  let currentError = "";

  const emptyArrayError = (array) => {
    if (array.length === 0) {
      return false;
    }
    return true;
  };

  const notLongEnoughError = (array) => {
    if (array.length < 10) {
      return false;
    }
    return true;
  };

  const limitSymbolReached = (array) => {
    let sumEntireArray = array.join(" ");
    if (sumEntireArray > 200) {
      return false;
    }
    return true;
  };

  const errors = [
    {
      error: emptyArrayError,
      message: "Заполните поле",
    },
    {
      error: notLongEnoughError,
      message: "Минимальное число слов - 10",
    },
    {
      error: limitSymbolReached,
      message: "Максимальная длина - 200 символов",
    },
  ];

  errors.every((error) => {
    if (!error.error(descriptionValidateArray)) {
      currentError = error.message;
      return false;
    }
    return true;
  });

  return currentError;
};
