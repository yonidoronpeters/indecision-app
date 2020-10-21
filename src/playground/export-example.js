console.log('utils.js is running');

export const square = (x) => x * x;
export const add = (a, b) => a + b;


// default export directly
export default (a, b) => a - b;
// or
// const subtract = (a, b) => a - b;
// export default subtract;

// exporting: option 2
// export { square, add, subtract as default }
