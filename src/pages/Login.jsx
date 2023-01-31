import React from 'react'

const Login = () => {
  return (
    <section class="flex w-screen min-h-screen bg-neutral3">
      <div class="basis-1/2 hero-login sm:hidden lg:block">
        <div class="relative flex flex-col items-center justify-center h-full gap-12">
          <back></back>

          <brand class="scale-[2]"></brand>
          <p class="text-neutral2 font-bold opacity-80 text-3xl max-w-[450px] text-center">
            Une  plateforme qui regroupe tout ce dont vous avez besoin en assistance médicale
          </p>
        </div>

      </div>
      <div class="flex flex-col items-center justify-center gap-10 sm:grow ">
        <h1 class="text-5xl font-bold text-primary7">Se Connecter</h1>
        <form class="py-16 px-10 rounded-[10px] shadow-lg bg-neutral1 opacity-90 max-w-[500px] w-full flex flex-col gap-4">
          <div class="flex flex-col gap-2">
            <label for="email" class="text-lg font-bold text-primary">Email ou Tel</label>
            <input type="text" name="email" class="px-2 py-3 rounded-[5px] outline-none bg-neutral4" required/>
          </div>

          <div class="flex flex-col gap-2">
            <label for="password" class="text-lg font-bold text-primary">Mot de passe</label>
            <input type="password" name="password" class="px-2 py-3 rounded-[5px] outline-none bg-neutral4" required/>
            <button class="text-xs text-neutral7 hover:text-primary5">Mot de Passe Oublié?  </button>
          </div>

          <button type="submit" class="text-neutral3 w-full py-3 text-center rounded-[5px] bg-neutral7 mt-4">Valider</button>
        </form>
        <div class="flex flex-col gap-1 text-sm text-center text-neutral7">
          <p class="font-bold">ou</p>
          <p>Vous n'avez pas de compte?</p>
          <button class="font-bold text-secondary5 hover:text-primary5" routerLink="/signup">S'inscrire</button>
        </div>
      </div>
    </section>

  )
}

export default Login