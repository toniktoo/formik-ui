import React from 'react';
import { Formik } from 'formik';
import { Typography } from 'antd';
import { Form } from 'formik-antd';
import styles from './Form.module.css';

import { schemaValidate } from './shema';
import FieldName from './form/FieldName';
import FieldPassword from './form/FieldPassword';
import FieldAccept from './form/FieldAccept';
import FieldAge from './form/FieldAge';
import FieldEmail from './form/FieldEmail';
import FieldWebsite from './form/FieldWebsite';
import FieldSkills from './form/FieldSkills';
import { filtredEmptyFields } from '../utils/filtrerValues';
import { fetchAuth } from './api/fetchAuth';

const { Title } = Typography;

const FormAuth = () => {
  const URL = 'http://localhost:9000/sign-up';

  const initialValues = {
    name: '',
    password: '',
    confirmPassword: '',
    email: '',
    website: '',
    age: '',
    skills: [''],
    acceptTerms: false,
  };

  const handleSubmit = async (values, { setFieldError, setSubmitting }) => {
    const filtred = filtredEmptyFields(values);
    fetchAuth(URL, filtred, setFieldError, setSubmitting);
  };

  return (
    <Formik initialValues={initialValues} validationSchema={schemaValidate} onSubmit={handleSubmit}>
      {() => (
        <Form>
          <div className={styles.formWrap}>
            <div className={styles.form}>
              <Title level={3}>Регистрация:</Title>
              <hr />
              <FieldName />
              <FieldPassword />
              <FieldEmail />
              <FieldWebsite error />
              <FieldAge />
              <FieldSkills />
              <FieldAccept />
              <hr />
              <button type="submit" className='btnSubmit'>
                Submit
              </button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default FormAuth;
