import React from 'react'
import ButtonBack from '../components/ButtonBack'
import Brand from '../components/Brand'

const Login = () => {
  return (
    <section className="flex w-screen min-h-screen bg-neutral3">
      <div className="basis-1/2 hero-login sm:hidden lg:block">
        <div className="relative flex flex-col items-center justify-center h-full gap-12">
          <ButtonBack/>
          <Brand scale="2"></Brand>

          <p className="text-neutral2 font-bold opacity-80 text-3xl max-w-[450px] text-center">
            Une plateforme qui regroupe tout ce dont vous avez besoin en assistance médicale
          </p>
        </div>

      </div>
      <div className="flex flex-col items-center justify-center gap-10 sm:grow">
        <h1 className="text-3xl font-bold text-gray-700 mt-8">Se Connecter</h1>
        <form className="p-10 rounded-[10px] shadow-lg bg-neutral1 opacity-90 max-w-[450px] w-full flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-gray-600 ">Email ou Tel</label>
            <input type="text" name="email" className="px-2 py-3 rounded-[5px] outline-none bg-neutral4" required/>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="password" className="text-gray-600">Mot de passe</label>
            <input type="password" name="password" className="px-2 py-3 rounded-[5px] outline-none bg-neutral4" required/>
            <button className="text-xs text-neutral7 hover:text-primary5">Mot de Passe Oublié?  </button>
          </div>

          <button type="submit" className="text-neutral3 w-full py-3 text-center rounded-[5px] bg-neutral7 mt-4">Valider</button>
        </form>
        <div className="flex flex-col gap-1 text-sm text-center text-neutral7">
          <p className="font-bold">ou</p>
          <p>Vous n'avez pas de compte?</p>
          <button className="font-bold text-secondary5 hover:text-primary5" routerLink="/signup">S'inscrire</button>
        </div>
      </div>
    </section>

  )
}

export default Login