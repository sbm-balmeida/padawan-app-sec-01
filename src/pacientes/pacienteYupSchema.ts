import * as Yup from 'yup';

export let pacienteSchema = Yup.object().shape({
    email: Yup.string().required('O e-mail é obrigatório').matches(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/g, 'Insira um e-mail válido!')
})