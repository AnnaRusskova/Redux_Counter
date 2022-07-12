export const inc = () => ({ type: 'INCREMENT' }); // action creator  
export const dec = () => ({ type: 'DECREMENT' });
export const rnd = () => ({ type: 'RANDOM', payload: Math.floor(Math.random()*10) }); 
export const rst = () => ({ type: 'RESET' });  