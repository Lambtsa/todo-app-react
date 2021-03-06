let key = 0;

const taskColorGenerator = id => {
  const number = id.toString();
  const lastDigitOfNumber = parseInt(number[number.length - 1], 10);
  const hue = lastDigitOfNumber * 36;
  return `hsl(${hue}, 60%, 70%)`;
};

const createTaskItem = (title, description) => {
  key += 1;
  const newTask = {
    id: key,
    status: 'pending',
    color: taskColorGenerator(key),
    content: {
      title,
      description,
    },
  };
  return newTask;
};

export default createTaskItem;
