/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState, useEffect } from 'react';
import data from '../../staticData/questionaire';
import deineMeinung from '../../assets/img/btnMeinung.png';
import CheckBox from '../ui/Checkbox';


export default function Questionaire(props) {
  const [companyType, setCompanyType] = useState(false);
  const [isSocialOranization, setIsSocialOranization] = useState(false);
  const [isSocialEnterprenuer, setIsSocialEnterprenuer] = useState(false);
  const [isInterestedToKnowYes, setIsInterestedToKnowYes] = useState(false);
  const [isInterestedToKnowNo, setIsInterestedToKnowNo] = useState(false);
  const [isInterestedToBeInformed, setIsInterestedToBeInformed] = useState(false);
  const [isInterestedToBeInformedNo, setIsInterestedToBeInformedNo] = useState(false);
  const [isInterestedToShare, setIsInterestedToShare] = useState(false);
  const [isInterestedToShareNo, setIsInterestedToShareNo] = useState(false);
  const [message, setMessage] = useState('');
  const [messageBody, setMessageBody] = useState({
    companyType: '',
    isSocialOranization: '',
    isSocialEnterprenuer: '',
    isInterestedToKnowNo: '',
    isInterestedToKnowYes: '',
    setIsInterestedToBeInformed: '',
    setIsInterestedToBeInformedNo: '',
    isInterestedToShare: '',
    isInterestedToShareNo: '',
  });

  useEffect(() => {
    document.getElementById("main").className = 'container-fluid'
  }, [])

  const handleChange = (name, value) => {
    const body = messageBody;
    if (name === 'companyType') {
      if (value) body[name] = 'Я частное лицо';
      if (!value) body[name] = '';
      setCompanyType(value);
    }
    if (name === 'isSocialOranization') {
      if (value) body[name] = 'Мы общественная организация';
      if (!value) body[name] = '';
      setIsSocialOranization(value);
    }
    if (name === 'isSocialEnterprenuer') {
      if (value) body[name] = 'Я социальный предпрениматель';
      if (!value) body[name] = '';
      setIsSocialEnterprenuer(value);
    }
    if (name === 'isInterestedToKnowYes') {
      if (value) {
        body[name] = 'Мне интересно узнавать о социальных проектах и общественных инициативах.';
        setIsInterestedToKnowNo(false);
      }
      if (!value) body[name] = '';
      setIsInterestedToKnowYes(value);
    }
    if (name === 'isInterestedToKnowNo') {
      setIsInterestedToKnowNo(value);
      if (value) {
        body.isInterestedToKnowYes = '';
        setIsInterestedToKnowYes(false);
      }
    }

    if (name === 'isInterestedToBeInformed') {
      if (value) {
        body[name] = 'Мне хотелось бы получать информацию из разных социальных сфер.';
        setIsInterestedToBeInformedNo(false);
      }
      if (!value) body[name] = '';
      setIsInterestedToBeInformed(value);
    }

    if (name === 'isInterestedToBeInformedNo') {
      setIsInterestedToBeInformedNo(value);
      if (value) {
        body.isInterestedToBeInformed = '';
        setIsInterestedToBeInformed(false);
      }
    }

    if (name === 'isInterestedToShare') {
      if (value) {
        body[name] = 'Я готов поделиться опытом адаптации проектов и идей из других стран в своем городе, регионе или стране.';
        setIsInterestedToShareNo(false);
      }
      if (!value) body[name] = '';
      setIsInterestedToShare(value);
    }
    if (name === 'isInterestedToShareNo') {
      if (value) {
        body.isInterestedToShare = '';
        setIsInterestedToShare(false);
      }
      setIsInterestedToShareNo(value);
    }
    setMessageBody({ ...messageBody, ...body });
  };


  const returnCheckBox = (name, cb, checked, label) => (
    <>
      <div>
        <CheckBox
          label={label}
          onChange={(e) => handleChange(name, e.target.checked)}
          checked={checked}
        />
      </div>
    </>
  );

  const onClick = () => {
    setTimeout(() => {
      setMessageBody({
        companyType: '',
        isSocialOranization: '',
        isSocialEnterprenuer: '',
        isInterestedToKnowNo: '',
        isInterestedToKnowYes: '',
        setIsInterestedToBeInformed: '',
        setIsInterestedToBeInformedNo: '',
        isInterestedToShare: '',
        isInterestedToShareNo: '',
      });
      setCompanyType('');
      setIsSocialEnterprenuer('');
      setIsSocialOranization('');
      setIsInterestedToKnowYes(false);
      setIsInterestedToKnowNo(false);
      setIsInterestedToBeInformed(false);
      setIsInterestedToBeInformedNo(false);
      setIsInterestedToShare(false);
      setIsInterestedToShareNo(false);
      setMessage('');
    }, 2000);
  };


  return (
    <>
      <div className="questionaire">
        <div>
          {/* <div className="questionaire__logo">
            <img src={deineMeinung} alt="deineMeinung" id='importantToKnow' />
          </div> */}
          <div className="questionaire__textBlock">
            <p>
              Мы хотим работать с пользой для тех, кому интересны идеи и проекты в социальной сфере,
              кто хотел бы адаптировать существующие проекты под себя и реализовать свой социальный проект.
              Поэтому нам <span className='emphasized'>важно узнать</span> ваше мнение!
            </p>
            <p>Мы не сохраняем ваши персональные данные и все запросы поступают к нам на анонимной основе.</p>
            <div className="questionaire__form">
              <p>Вы:</p>
              <div className="form-group">
                <div className="custom-control custom-checkbox pl-1">
                  {returnCheckBox('companyType', setCompanyType, companyType, <span style={{ color: companyType && '#f86c59' }}>{'частное лицо'}</span>)}
                </div>
              </div>
              <div className="form-group">
                <div className="custom-control custom-checkbox pl-1">
                  {returnCheckBox('isSocialOranization', setIsSocialOranization, isSocialOranization, <span style={{ color: isSocialOranization && '#f86c59' }}>{'общественная организация'}</span>)}
                </div>
              </div>
              <div className="form-group">
                <div className="custom-control custom-checkbox pl-1">
                  {returnCheckBox('isSocialEnterprenuer', setIsSocialEnterprenuer, isSocialEnterprenuer, <span style={{ color: isSocialEnterprenuer && '#f86c59' }}>{'социальная предпренимательница/ социальный предпрениматель'}</span>)}
                </div>
              </div>
            </div>

            <div className="questionaire__form">
              <p>
                интересно ли вам узнавать о социальных проектах и общественных инициативах
            </p>
              <div className="form-group2">
                <div className="custom-control custom-checkbox pl-1">
                  {returnCheckBox('isInterestedToKnowYes', setIsInterestedToKnowYes, isInterestedToKnowYes, <span style={{ color: isInterestedToKnowYes && '#f86c59' }}>{'да'}</span>)}
                </div>
                <div className="custom-control custom-checkbox pl-1">
                  {returnCheckBox('isInterestedToKnowNo', setIsInterestedToKnowNo, isInterestedToKnowNo, <span style={{ color: isInterestedToKnowNo && '#f86c59' }}>{'нет'}</span>)}
                </div>
              </div>
            </div>

            <div className="questionaire__form">
              <p>
                Хотелось бы вам получать информацию из разных социальных сфер
                (например: люди с особенностями развития, дети с различными заболеваниями, пожилые люди, бездомные люди и т.д.)
            </p>
              <div className="form-group2">
                <div className="custom-control custom-checkbox pl-1">
                  {returnCheckBox('isInterestedToBeInformed', setIsInterestedToBeInformed, isInterestedToBeInformed, <span style={{ color: isInterestedToBeInformed && '#f86c59' }}>{'да'}</span>)}
                </div>
                <div className="custom-control custom-checkbox pl-1">
                  {returnCheckBox('isInterestedToBeInformedNo', setIsInterestedToBeInformedNo, isInterestedToBeInformedNo, <span style={{ color: isInterestedToBeInformedNo && '#f86c59' }}>{'да'}</span>)}
                </div>
              </div>
            </div>

            <div className="questionaire__form">
              <p>
                Если у вас уже был опыт адаптации проектов и идей
                из других стран в своем городе, регионе или стране,
                поделитесь с чем вам пришлось столкнуться.
            </p>
              <div className="form-group2">
                <div className="custom-control custom-checkbox pl-1">
                  {returnCheckBox('isInterestedToShare', setIsInterestedToShare, isInterestedToShare, <span style={{ color: isInterestedToShare && '#f86c59' }}>{'да'}</span>)}
                </div>
                <div className="custom-control custom-checkbox pl-1">
                  {returnCheckBox('isInterestedToShareNo', setIsInterestedToShareNo, isInterestedToShareNo, <span style={{ color: isInterestedToShareNo && '#f86c59' }}>{'да'}</span>)}
                </div>
              </div>
            </div>

            <div className="questionaire__message">
              <p id="message-body">{data.yourMessage}</p>
              <textarea
                id="message-field"
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <div className="questionaire__link">
              <div
                className="nextButton"
                onClick={() => onClick()}
              >
                <a
                  className="fill"
                  href={`mailto:contact@ressup.org?subject=Для ressup - важно знать&body=${message}%0D%0A${messageBody.companyType}%0D%0A${messageBody.isSocialOranization}%0D%0A${messageBody.isSocialEnterprenuer}%0D%0A${messageBody.isInterestedToKnowYes}%0D%0A${messageBody.isInterestedToBeInformed}%0D%0A${messageBody.isInterestedToShare}`}
                >
                  отправить
              </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

