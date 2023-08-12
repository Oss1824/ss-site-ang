import { project } from '../projects';

export const currentProjects: project[] = [
  {
    Id: 1,
    client: 'NHAI',
    title: 'Jodpur Ring Road',
    description:
      'Four Lanning of Karwar (Km 281.980 of NH 62 Nagaurroad) to Dangiyavassection –Package-II (design length 30.093 km) of Jodhpur ring road under NHDP Phase-VII',
    scope: 'EPC contract for 4 laning of existing 2 lane Road.',
    images: [
      'https://img.freepik.com/free-photo/yellow-bulldozer-machine-remove-sand-from-desert-dunes_462054-736.jpg?w=2000',
      './assets/img/projects/jodhpur/layout-1.jpg',
      './assets/img/projects/jodhpur/layout-2.jpg',
    ],
    status: 'Ongoing',
  },
  {
    Id: 2,
    client: 'NHAI',
    title: 'Rampur Bypass',
    description:
      '2-lane existing bypass of Rampur to be developed to 4-lane Rampur, Uttar Pradesh. Design length: 10.19km',
    scope: 'EPC contract for 4 laningof existing 2 lane Road.',
    images: [
      './assets/img/projects/rampur/layout-1.png',
      './assets/img/projects/rampur/map.jpg',
    ],
    status: 'Awarded',
  },
  {
    Id: 3,
    client: 'NBCC',
    title: 'IIT-BHU Hostel',
    description:
      'Faculty Apartments (S+10) (Two blocks)  at IIT BHU, Varanasi, Uttar Pradesh',
    scope: 'Civil, MEP and External development works on EPC Mode.',
    images: [
      './assets/img/projects/iit-bhu/model-1.jpg',
      './assets/img/projects/iit-bhu/photo-1.jpg',
      './assets/img/projects/iit-bhu/photo-2.jpg',
    ],
    status: 'Ongoing',
  },
  {
    Id: 4,
    client: 'Hindustan Steelworks',
    title: 'JNV School, Palamu',
    description: 'Phase-A works at JNV Palamau-II Palamu, Jharkhand',
    scope: 'MEP and External development works.',
    images: [
      './assets/img/projects/palamu/layout-1.jpg',
      './assets/img/projects/palamu/photo-1.jpg',
      './assets/img/projects/palamu/photo-2.jpg',
    ],
    status: 'Ongoing',
  },
];
