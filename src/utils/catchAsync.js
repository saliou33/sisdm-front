/* eslint-disable no-undef */
import { showAlert } from './alert';

export default (fn) => {
  return (data) => {
    fn(data)
      .then((result) => console.log(result))
      .catch(showAlert);
  };
};
