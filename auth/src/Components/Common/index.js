export * from './Button';
export * from './Card';
export * from './CardSection';
export * from './Header';


//export * from './button' is equal to both of the following steps:
//import  Button from './Button';
//export default Button

//another note: if using export * strategy, then in the original files of them
//like in Button.js file for example, can not export default Button;
//but we should have export { Button: Button } or export { Button }


