import axios from 'axios'

export const fetchAuth = async (URL, filtred, setFieldError, setSubmitting) => {
    try {
        const response = await axios.post(URL, filtred);
        if (response.status === 200) {
          alert(response.data.message);
        }
      } catch (err) {
        setFieldError('email', 'Пользователь с таким email уже зарегистрирован');
      } finally {
        setSubmitting(false);
      }
}