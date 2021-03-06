const taskColorGenerator = id => {
  const number = id.toString();
  const lastDigitOfNumber = parseInt(number[number.length - 1], 10);
  const hue = lastDigitOfNumber * 36;
  return `hsl(${hue}, 60%, 70%)`;
};

const createTaskItem = (key, title, description) => {
  const newTask = {
    id: key,
    color: taskColorGenerator(key),
    content: {
      title,
      description,
    },
  };
  return newTask;
};

export default createTaskItem;
