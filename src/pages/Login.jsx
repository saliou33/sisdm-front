import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import { loginUser } from '../redux/reducers/auth';
import { showAlert } from './../utils/alert';

const Login = ({ s, Image }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const auth = useSelector((state) => state.auth);
  useEffect(() => {}, [dispatch, auth]);

  function cap(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      role: cap(s) || '',
    },
    onSubmit: (values) => {
      dispatch(loginUser(values))
        .unwrap()
        .then((result) => {
          showAlert('Vous êtes connecté avec succés', 'success');
        })
        .catch((err) => {
          showAlert(err?.message, err?.status);
        });
    },
  });

  return (
    <div className="h-screen flex justify-center">
      <div className="md:basis-1/2 hidden sm:block rounded-tr-3xl rounded-br-3xl overflow-hidden bg-white">
        <img
          src={Image}
          alt="Image de la page Login"
          className="object-cover h-full w-full"
        />
      </div>

      <div className="md:basis-1/2 flex flex-col gap-6 items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl text-sky-600">Se Connecter </h1>
          {s && <p className="text-[10px] text-gray-600">{s}</p>}
        </div>
        <form
          className="flex flex-col items-center gap-3 bg-white p-6 rounded-md min-w-[400px] opacity-80"
          onSubmit={formik.handleSubmit}
        >
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="emai">Email</label>
            <input
              type="email"
              name="email"
              className="border border-gray-200 outline-none rounded-sm px-1 py-2 bg-gray-50"
              value={formik.values.email}
              onChange={formik.handleChange}
              required
            />
          </div>

          <div className="w-full">
            <div className="flex flex-col gap-2">
              <label htmlFor="password">Mot de Passe</label>
              <input
                type="password"
                name="password"
                required
                className="border border-gray-200 outline-none rounded-sm px-1 py-2 bg-gray-50"
                value={formik.values.password}
                onChange={formik.handleChange}
              />
            </div>
            <p className="text-xs text-center m-1 ">Mot de passe oublié?</p>
          </div>
          <input
            type="hidden"
            name="role"
            value={formik.values.role}
            onChange={formik.handleChange}
          />
          <button
            className="bg-sky-500  text-white px-1 py-2 w-full rounded-sm"
            type="submit"
          >
            Login
          </button>
        </form>

        <div className="flex flex-col text-center text-xs">
          <p className="">Vous n'avez pas de compte?</p>
          <a className="text-sky-600">S'inscrire</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
