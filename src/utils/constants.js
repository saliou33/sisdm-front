import PatientLoginImage from '../assets/images/login_p.jpg';
import MedecinLoginImage from '../assets/images/login_m.jpg';
import AdminLoginImage from '../assets/images/login_a.jpg';

const SIGNUP_ROUTES = [
  {
    path: '/p/signup',
    s: 'patient',
  },
  {
    path: '/m/signup',
    s: 'medecin',
  },
];

const LOGIN_ROUTES = [
  {
    path: '/p/login',
    Image: PatientLoginImage,
    s: 'patient',
  },
  {
    path: '/m/login',
    Image: MedecinLoginImage,
    s: 'medecin',
  },
  {
    path: '/a/login',
    Image: AdminLoginImage,
    s: 'admin',
  },
];

const PATIENT_LINKS = [
  {
    url: '/p/home',
    name: 'Accueil',
  },
  {
    url: '/p/dm',
    name: 'Mon DM',
  },
  {
    url: '/p/rv',
    name: 'Mes RV',
  },
];

const ADMIN_LINKS = [
  {
    url: '/a/dashboard',
    name: 'Accueil',
  },
  {
    url: '/a/users',
    name: 'Utilisateurs',
  },
  {
    url: '/a/dms',
    name: 'DMs',
  },
  {
    url: '/a/rv',
    name: 'RV',
  },
];

const MEDECIN_LINKS = [
  {
    url: '/home',
    name: 'Accueil',
  },
  {
    url: '/p/all',
    name: 'Mes patients',
  },
  {
    url: '/rv',
    home: 'RV',
  },
];

export default {
  LOGIN_ROUTES,
  SIGNUP_ROUTES,
  PATIENT_LINKS,
  MEDECIN_LINKS,
  ADMIN_LINKS,
};
