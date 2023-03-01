import React from 'react';

const Signup = ({ s }) => {
  return (
    <div className="h-screen flex justify-center">
      <div className="flex flex-col gap-4 items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl text-sky-600">Créer un compte</h1>
          {s && <p className="text-[10px] text-gray-600">{s}</p>}
        </div>
        <form className="flex flex-col items-center gap-5 bg-white p-6 rounded-md max-w-[450px] opacity-80">
          <div className="flex gap-4">
            <div className="flex flex-col gap-1">
              <label htmlFor="nom">Nom </label>
              <input
                type="text"
                name="nom"
                required
                className="border border-gray-200 outline-none rounded-sm px-1 py-2 bg-gray-50 w-full"
              />
            </div>

            <div className="flex flex-col gap-1 ">
              <label htmlFor="password">Prenom</label>
              <input
                type="text"
                name="prenom"
                required
                className="border border-gray-200 outline-none rounded-sm px-1 py-2 bg-gray-50 w-full"
              />
            </div>
          </div>

          {s === 'medecin' && (
            <div className="flex flex-col gap-1 w-full">
              <label htmlFor="specialite">Specialite</label>
              <input
                type="specialite"
                name="specialite"
                className="border border-gray-200 outline-none rounded-sm px-1 py-2 bg-gray-50"
                required
              />
            </div>
          )}

          <div className="flex flex-col gap-1 w-full">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              className="border border-gray-200 outline-none rounded-sm px-1 py-2 bg-gray-50"
              required
            />
          </div>

          <div className="flex flex-col gap-1 w-full">
            <label htmlFor="password">Mot de Passe</label>
            <input
              type="password"
              name="password"
              required
              className="border border-gray-200 outline-none rounded-sm px-1 py-2 bg-gray-50"
            />
          </div>

          <div className="flex flex-col gap-1 w-full">
            <label htmlFor="password">Confirmer Mot de Passe</label>
            <input
              type="password"
              name="password"
              required
              className="border border-gray-200 outline-none rounded-sm px-1 py-2 bg-gray-50"
            />
          </div>

          <button className="bg-sky-500 text-white px-1 py-2  w-full rounded-sm">
            Valider
          </button>
        </form>

        <div className="flex flex-col text-center text-xs">
          <p className="">Vous avez un compte?</p>
          <a className="text-sky-600">Se Connecter</a>
        </div>
      </div>
    </div>
  );
};

export default Signup;
