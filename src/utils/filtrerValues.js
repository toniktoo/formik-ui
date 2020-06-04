import { omitBy } from 'lodash';

//фильтруем values.skills на пустые поля
const filtredEmptySkiils = (values) => {
  const filtredSkiils = values.skills.filter((skill) => skill !== undefined && skill !== '');

  let filtredValues = {
    ...values,
    skills: filtredSkiils,
  };
  return filtredValues;
};
//фильтруем values на пустые поля
export const filtredEmptyFields = (values) => {
  const filtredSkiils = filtredEmptySkiils(values);
  const filtredFields = omitBy(filtredSkiils, (key, value) => key === '');
  return filtredFields;
};
