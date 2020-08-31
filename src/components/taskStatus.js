const TODO = 'todo';
const DOING = 'doing';
const DONE = 'done';

const toggle = {
  [TODO]: DOING,
  [DOING]: DONE,
  [DONE]: TODO,
};

const getDefaultStatus = () => TODO;

const toggleCurrentStatus = (status) => toggle[status];

export { getDefaultStatus, toggleCurrentStatus };
