// import React from 'react';
// import timelineData from '../../staticData/timeLineData';
// import TimelineItem from '../../component/time-line-item/TimeLineItem';


// const Timeline = () => timelineData.length > 0 && (
// <div className="timeline-container2">
//   {timelineData.map((data, idx) => (
//     <TimelineItem data={data} key={idx} />
//   ))}
// </div>
// );

// export default Timeline;
import React from 'react';
import { Timeline } from 'react-material-timeline';
import { Avatar, Icon } from '@material-ui/core';
import timelineData from '../../staticData/timeLineData';

// const icon =

// const events = [
//   {
//     title: 'Event 1',
//     subheader: new Date().toDateString(),
//     description: [ 'Some description for event 1' ],
//     icon: <Avatar><Icon>work</Icon></Avatar>,
//   },
//   {
//     title: 'Event 2',
//     subheader: new Date().toDateString(),
//     description: [ 'Some description for event 2' ],
//     icon: <Avatar><Icon>home</Icon></Avatar>,
//   }
// ];

const events = [
  {
    // id:0,
    title: 'Что мы делаем',
    description: [
      'Мы находим социальные проекты, которые оказывают поддержку в социализации, интеграции и инклюзии социально-уязвимых слоев населения.',
      'Мы делимся только теми проектами, которые за время их существования доказали свою эффективность, и с которыми мы познакомились лично.',
      'Мы помогаем вам связаться с этими  проектами и получить необходимую информацию для их адаптации под ваши условия.',
    ],
  icon: <Avatar><Icon>{' '}</Icon></Avatar>,
  },
  {
    // id:1,
    title: 'Для кого мы это делаем',
    description: [
      'Для некоммерческих организаций.',
      'Для социальных предпринимателей.',
      'Для частных лиц, которые хотели бы запустить свой  собственный социальный проект.'],
      icon: <Avatar><Icon>{' '}</Icon></Avatar>,
  },
  {
    // id:2,
    title: 'Наша миссия',
    description: ['Вдохновлять людей на инициирование полезных для общества проектов.',
      'Поддерживать новые инициативы в налаживании контакта и сотрудничества с организаторами действующих проектов для обмена опытом.'],
      icon: <Avatar><Icon>{' '}</Icon></Avatar>,
  },
];

export default class AwesomeTimeline extends React.Component {
  render() {
    return <Timeline events={events} />;
  }
}
