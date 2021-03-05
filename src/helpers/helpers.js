const addItemToState = () => {
  const newTask = {
    id: newState.key,
    status: 'pending',
    style: `style="background-color: ${taskColorGenerator(newState.key)}"`,
    content: {
      title: inputTitle.value,
      description: inputDescription.value,
    },
  };
};

const taskColorGenerator = (num) => {
  const number = num.toString();
  const lastDigitOfNumber = parseInt(number[number.length - 1], 10) + 1;
  const hue = lastDigitOfNumber * 36;
  return `hsl(${hue}, 60%, 70%)`;
};