import React from 'react'

const Signup = () => {
  return (
    <section class="flex w-screen min-h-screen bg-neutral3">
      <div class="basis-1/2 hero-signup sm:hidden lg:block">
        <div class="relative flex flex-col items-center justify-center h-full gap-12">
          <back></back>
    
          <brand class="scale-[2]"></brand>
          <p class="text-neutral2 font-bold opacity-80 text-3xl max-w-[450px] text-center">
            La santé plus proche de vous
          </p>
        </div>
    
      </div>
      <div class="flex flex-col items-center justify-center gap-10 sm:grow ">
        <h1 class="text-5xl font-bold text-primary7">S'inscrire</h1>
        <form class="py-16 px-10 rounded-[10px] shadow-lg bg-neutral1 opacity-90 max-w-[500px] w-full flex flex-col gap-2">
          <div class="flex justify-between gap-2">
            <div class="flex flex-col w-full gap-2">
              <label for="prenom" class="font-bold text-primary">Prénom</label>
              <input type="text" name="prenom" class="px-2 py-3 rounded-[5px] outline-none bg-neutral4" required/>
            </div>
            <div class="flex flex-col w-full gap-2">
              <label for="nom" class="font-bold text-primary">Nom</label>
              <input type="text" name="nom" class="px-2 py-3 rounded-[5px] outline-none bg-neutral4" required/>
            </div>
          </div>
    
          <div class="flex flex-col gap-2">
            <label for="email" class="font-bold text-primary">Email</label>
            <input type="text" name="email" class="px-2 py-3 rounded-[5px] outline-none bg-neutral4" required/>
          </div>
    
          <div class="flex flex-col gap-2">
            <label for="tel" class="font-bold text-primary">Téléphone</label>
            <input type="text" name="tel" class="px-2 py-3 rounded-[5px] outline-none bg-neutral4" required/>
          </div>
    
          <div class="flex flex-col gap-2">
            <label for="password" class="font-bold text-primary">Mot de passe</label>
            <input type="password" name="password" class="px-2 py-3 rounded-[5px] outline-none bg-neutral4" required/>
          </div>
    
          <div class="flex flex-col gap-2">
            <label for="confirm_password" class="font-bold text-primary">Confirmer Mot de passe</label>
            <input type="password" name="confirm_password" class="px-2 py-3 rounded-[5px] outline-none bg-neutral4" required/>
          </div>
    
          <button type="submit" class="text-neutral3 w-full py-3 text-center rounded-[5px] bg-neutral7 mt-4">Valider</button>
        </form>
        <div class="flex flex-col gap-1 text-sm text-center text-neutral7">
          <p class="font-bold">ou</p>
          <p>Vous avez un compte?</p>
          <button class="font-bold text-secondary5 hover:text-primary5">Se Connecter</button>
        </div>
      </div>
    </section>
  
  )
}

export default Signup