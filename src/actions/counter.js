export const increment = type => { 
  return { type: 'INCREMENT' }; 
};

export const decrement = type => { 
  return { type: 'DECREMENT' }; 
};

export const incrementAsync = type => { 
  return { type: 'INCREMENT_ASYNC' }; 
};