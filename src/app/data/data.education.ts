import { Education } from '../components/services/data.model';

export const EDUCATIONS: Education[] = [
  {
    startDate: '2013',
    endDate: '2018',
    school: 'Vasyl Stefanyk National University',
    schoolUrl: 'http://www.pu.if.ua/en/pnu-in-scopus',
    cursus: 'Computer Science',
    projects: [
      { type: 'Project', title: 'Unity , Sudoku game with algorithm implementing', url: '' },
      { type: '', title: '', url: '' }
    ]
  },
  {
    startDate: '2016',
    endDate: '2018',
    school: 'Profi Center English School',
    schoolUrl: 'http://www.profi-center.com.ua/',
    cursus: 'Intermediate Strong Level',
    projects: []
  },
];
