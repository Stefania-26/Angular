import { Skill } from '../components/services/data.model';
import { Category } from '../components/services/data.model';

export const SKILL_CATEGORIES: Category[] = [
  {
    name: 'Frontend',
    tools: ['Yeoman', 'NPM', 'Meteor'],
    skills: [
      { name: 'Javascript', percentage: 75 },
      { name: 'HTML/CSS', percentage: 80 },
      { name: 'Angular', percentage: 65 },
      { name: 'Material Design', percentage: 80 },
      { name: 'Bootstrap', percentage: 80 }
    ]
  },
  {
    name: 'Backend',
    tools: ['ANT', 'Maven'],
    skills: [
      { name: 'Java', percentage: 90 },
      { name: 'Unity', percentage: 75 },
      { name: 'Cisco Packet Tracer', percentage: 70 },
      { name: 'Ruby', percentage: 50 },
      { name: 'Objective-C', percentage: 50 }
    ]
  },
  {
    name: 'Base de données',
    tools: [],
    skills: [
      { name: 'PostgreSQL', percentage: 80 },
      { name: 'MySQL', percentage: 70 },
      { name: 'MongoDB', percentage: 50 }
    ]
  },
  {
    name: 'Version Control Systems',
    tools: ['CVS', 'SVN'],
    skills: [
      { name: 'GIT', percentage: 75 }
    ]
  },
  {
    name: 'Developpement Software',
    tools: ['IntelliJ', 'Eclipse', 'WebStorm', 'VirtualBox', 'Xcoder'],
    skills: []
  },
];
