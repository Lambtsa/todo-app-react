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

const findHighestId = arrayOfTasks => {
  if (arrayOfTasks.length === 0) {
    return 0;
  }
  return arrayOfTasks
    .map(e => parseInt(e.id, 10))
    .reduce((a, b) => Math.max(a, b));
};

export { createTaskItem, taskColorGenerator, findHighestId };
