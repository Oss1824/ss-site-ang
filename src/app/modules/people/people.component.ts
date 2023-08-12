import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss'],
})
export class PeopleComponent implements OnInit {
  constructor() {}

  cards: card[];

  ngOnInit() {
    this.cards = [
      {
        image: './assets/img/people/Vijay.png',
        name: 'Vijay Kumar',
        title: 'Director',
        desciption:
          'Civil Engineer with more than 30 years of experience in planning, executing and spearheading construction projects involving Method engineering with a flair for adopting modern construction methodologies in compliance to high quality standard. \n\n Previously has also worked as an active member of Era Group whose turnover has increased from 25 crore to 4000 crore within a span of 18 years wherein he was awarded employee of the year four times. Well known for fast track construction without any compromise with quality and safety within Cost.',
        linkedIn: '',
      },
      {
        image: './assets/img/people/Ramesh.jpg',
        name: 'Ramesh Singh',
        title: 'Director',
        desciption:
          'Civil Engineer with more than 30 years of experience. Talented, proactive, technically oriented construction management professional with sound technical and managerial skills. Has led several large-scale construction project while working as Business Head in ERA Infra Engineering Ltd. since 2011 including two national highway projects on Design, Build, Finance, Operate and Transfer (DBFOT) Basis Expertise lies in Planning, organizing, managing and control direct manpower and other resources in the execution with effective manpower productivity .',
        linkedIn: '',
      },
      {
        image: './assets/img/people/Yogesh.jpg',
        name: 'Yogesh Shrivastava',
        title: 'Director',
        desciption:
          "With over 20 years of experience in architectural design, project planning and execution, his vast experience includes all aspects of Design to Management. Prior to OSS, He has worked in Synergy Property Development Services Pvt. Ltd. for more than 11 years and was responsible for establishing and successfully running Synergy's design division in North India Has exceptional skills and experience in steering planning and coordinating projects of various natures and is well known for excellent public relations, problem solving, astute analysis of project and leadership skills.",
        linkedIn: 'https://www.linkedin.com/in/yogesh-shrivastava-3539351b/',
      },
    ];
  }
}

class card {
  image: string;
  name: string;
  title: string;
  desciption: string;
  linkedIn: string;
}
