import React from 'react';
import { Timeline } from 'react-material-timeline';
import { Avatar, Icon, colors } from '@material-ui/core';
import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import PeopleIcon from '@material-ui/icons/People';
import GolfCourseIcon from '@material-ui/icons/GolfCourse';

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

const theme = createMuiTheme({
  overrides: {
    MuiPaper: {
      root: {
        background: 'inherit !important',
        boxShadow: 'none !important'
      },
    },
    MuiAvatar: {
      root: {
        // width: '10px !important',
        // height: '10px !important',
        backgroundColor: '#F86C59 !important'
      }
    },
    MuiCardHeader: {
      root: {
        padding: '16px 16px 0 16px'
      }
    },
    MuiCardContent: {
      root: {
        padding: '0 16px'
      }
    }, // #f3f3f3
    MuiSvgIcon: {
      root: {
        color: '#f3f3f3'
      }
    }


  }
});

const events = [
  {
    // id:0,
    title: 'Что мы делаем',
    description: [
      'Мы находим социальные проекты, которые оказывают поддержку в социализации, интеграции и инклюзии социально-уязвимых слоев населения. ',
      'Мы делимся только теми проектами, которые за время их существования доказали свою эффективность, и с которыми мы познакомились лично. ',
      'Мы помогаем вам связаться с этими  проектами и получить необходимую информацию для их адаптации под ваши условия.',
    ],
    icon: <Avatar><BusinessCenterIcon color='inherit' /></Avatar>,
  },
  {
    // id:1,
    title: 'Для кого мы это делаем',
    description: [
      'Для некоммерческих организаций.',
      'Для социальных предпринимателей.',
      'Для частных лиц, которые хотели бы запустить свой  собственный социальный проект.'],
    icon: <Avatar><PeopleIcon color='inherit' /></Avatar>,
  },
  {
    // id:2,
    title: 'Наша миссия',
    description: ['Вдохновлять людей на инициирование полезных для общества проектов.',
      'Поддерживать новые инициативы в налаживании контакта и сотрудничества с организаторами действующих проектов для обмена опытом.'],
    icon: <Avatar> <GolfCourseIcon color='inherit' /> </Avatar>,
  },
];

export default class AwesomeTimeline extends React.Component {
  render() {
    return <ThemeProvider theme={theme}>
      <Timeline styles={{ rightCard: { textAlign: 'left' }, leftCard: { textAlign: 'right', cardDecoratorLeft: 'red' } }} events={events} />
    </ThemeProvider>

  }
}
