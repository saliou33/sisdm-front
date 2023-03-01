import React from 'react';

const Signup = () => {
  return (
    <section className="flex w-screen min-h-screen bg-neutral3">
      <div className="basis-1/2 hero-signup sm:hidden lg:block">
        <div className="relative flex flex-col items-center justify-center h-full gap-12">
          <ButtonBack/>
          <Brand scale="2"></Brand>

          <p className="text-neutral2 font-bold opacity-80 text-3xl max-w-[450px] text-center">
            La santé plus proche de vous
          </p>
        </div>
    
      </div>
      <div className="flex flex-col items-center justify-center gap-10 sm:grow ">
        <h1 className="text-5xl font-bold text-primary7">S'inscrire</h1>
        <form className="py-16 px-10 rounded-[10px] shadow-lg bg-neutral1 opacity-90 max-w-[500px] w-full flex flex-col gap-2">
          <div className="flex justify-between gap-2">
            <div className="flex flex-col w-full gap-2">
              <label for="prenom" className="font-bold text-primary">Prénom</label>
              <input type="text" name="prenom" className="px-2 py-3 rounded-[5px] outline-none bg-neutral4" required/>
            </div>
            <div className="flex flex-col w-full gap-2">
              <label for="nom" className="font-bold text-primary">Nom</label>
              <input type="text" name="nom" className="px-2 py-3 rounded-[5px] outline-none bg-neutral4" required/>
            </div>
          </div>
    
          <div className="flex flex-col gap-2">
            <label for="email" className="font-bold text-primary">Email</label>
            <input type="text" name="email" className="px-2 py-3 rounded-[5px] outline-none bg-neutral4" required/>
          </div>
    
          <div className="flex flex-col gap-2">
            <label for="tel" className="font-bold text-primary">Téléphone</label>
            <input type="text" name="tel" className="px-2 py-3 rounded-[5px] outline-none bg-neutral4" required/>
          </div>
    
          <div className="flex flex-col gap-2">
            <label for="password" className="font-bold text-primary">Mot de passe</label>
            <input type="password" name="password" className="px-2 py-3 rounded-[5px] outline-none bg-neutral4" required/>
          </div>
    
          <div className="flex flex-col gap-2">
            <label for="confirm_password" className="font-bold text-primary">Confirmer Mot de passe</label>
            <input type="password" name="confirm_password" className="px-2 py-3 rounded-[5px] outline-none bg-neutral4" required/>
          </div>
    
          <button type="submit" className="text-neutral3 w-full py-3 text-center rounded-[5px] bg-neutral7 mt-4">Valider</button>
        </form>
        <div className="flex flex-col gap-1 text-sm text-center text-neutral7">
          <p className="font-bold">ou</p>
          <p>Vous avez un compte?</p>
          <button className="font-bold text-secondary5 hover:text-primary5">Se Connecter</button>
        </div>
      </div>
    </section>
  
  )
}

export default Signup