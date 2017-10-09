import { Profile } from '../components/services/data.model';
import { SocialLink } from '../components/services/data.model';
import { Language } from '../components/services/data.model';

export const PROFILE: Profile = {
  firstname: 'Stefania',
  lastname: 'Taran',
  title: 'Web Developer',
  birthdate: '26/03/1997',
  address: 'Ivano-Frankivsk,Ukraine',
  mail: 'stefanijaaa26@gmail.com',
  descriptionLines: [
    '',
    '\n',

  ]
};

export const SOCIAL_LINKS: SocialLink[] = [
  { name: 'Github', url: 'https://github.com/Stefania-26/', icon: 'fa-github' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/stefanija-taran-a4530a125/', icon: 'fa-linkedin' },
  { name: 'Google+', url: 'https://plus.google.com/', icon: 'fa-google-plus' }
];

export const LANGUAGES: Language[] = [
  { name: 'Germany', percentage: 90, comment: 'DSD' },
  { name: 'English', percentage: 85, comment: 'Callan Method' },
  { name: 'Polish', percentage: 65, comment: 'School' }
];
