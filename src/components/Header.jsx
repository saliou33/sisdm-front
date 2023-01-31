import React from 'react';
import Button from './Button';
import Brand from './Brand';
import ChevronDown from '../assets/images/chevron-down.svg';

const Header = () => {
  return (
    <div class="bg-primary6">
			<div class="px-5 h-[70px] flex items-center justify-between in-content">
					<ul class="flex gap-6 text-xl list-none text-neutral2">
						<Brand />
						<li><a>Accueil</a></li>
						<li>
							<a class="flex gap-2">
							<img src={ChevronDown} salt="chervron down"/>
							<span>Docteurs</span>
							</a>
						</li>
						<li><a>Centre d'aide</a></li>
					</ul>

					<div class="flex gap-2">
						<Button text="S'inscrire" color="text-neutral10" bg="bg-yellow3" hover="text-primary5" />
						<Button text="Se Connecter" color="text-neutral2" bg="" hover="text-yellow3" />
					</div>
			</div>
		</div>

  )
}

export default Header