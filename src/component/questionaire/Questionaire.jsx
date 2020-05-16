/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
import { Button } from 'reactstrap';
import data from '../../staticData/questionaire';
import Footer from '../../container/footer/Footer2';
import deineMeinung from '../../assets/img/btnMeinung.svg';

const style = {
  bottom: '-10%',
};


function Questionaire() {
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
      <input
        type="checkbox"
        className="custom-control-input"
        name={name}
        id={name}
        onChange={(e) => handleChange(name, e.target.checked)}
        checked={checked}
      />
      <label className="custom-control-label" htmlFor={name}>{label}</label>
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
        <div className="questionaire__logo">
          <img src={deineMeinung} alt="deineMeinung" />
        </div>
        <div className="questionaire__textBlock">
          <p>
            Мы хотим работать с пользой для тех, кому интересны идеи и проекты в социальной сфере,
            кто хотел бы адаптировать существующие проекты под себя и реализовать свой социальный проект.
            Поэтому нам важно узнать ваше мнение!
          </p>
          <p>Мы не сохраняем ваши персональные данные и все запросы поступают к нам на анонимной основе.</p>
          <div className="questionaire__form">
            <p>Вы:</p>
            <div className="form-group">
              <div className="custom-control custom-checkbox">
                {returnCheckBox('companyType', setCompanyType, companyType, 'частное лицо')}
              </div>
            </div>
            <div className="form-group">
              <div className="custom-control custom-checkbox">
                {returnCheckBox('isSocialOranization', setIsSocialOranization, isSocialOranization, 'общественная организация')}
              </div>
            </div>
            <div className="form-group">
              <div className="custom-control custom-checkbox">
                {returnCheckBox('isSocialEnterprenuer', setIsSocialEnterprenuer, isSocialEnterprenuer, 'социальная предпренимательница/ социальный предпрениматель')}
              </div>
            </div>
          </div>

          <div className="questionaire__form">
            <p>
              интересно ли вам узнавать о социальных проектах и общественных инициативах
            </p>
            <div className="form-group2">
              <div className="custom-control custom-checkbox">
                {returnCheckBox('isInterestedToKnowYes', setIsInterestedToKnowYes, isInterestedToKnowYes, 'да')}
              </div>
              <div className="custom-control custom-checkbox">
                {returnCheckBox('isInterestedToKnowNo', setIsInterestedToKnowNo, isInterestedToKnowNo, 'нет')}
              </div>
            </div>
          </div>

          <div className="questionaire__form">
            <p>
              Хотелось бы вам получать информацию из разных социальных сфер
              (например: люди с особенностями развития, дети с различными заболеваниями, пожилые люди, бездомные люди и т.д.)
            </p>
            <div className="form-group2">
              <div className="custom-control custom-checkbox">
                {returnCheckBox('isInterestedToBeInformed', setIsInterestedToBeInformed, isInterestedToBeInformed, 'да')}
              </div>
              <div className="custom-control custom-checkbox">
                {returnCheckBox('isInterestedToBeInformedNo', setIsInterestedToBeInformedNo, isInterestedToBeInformedNo, 'нет')}
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
              <div className="custom-control custom-checkbox">
                {returnCheckBox('isInterestedToShare', setIsInterestedToShare, isInterestedToShare, 'да')}
              </div>
              <div className="custom-control custom-checkbox">
                {returnCheckBox('isInterestedToShareNo', setIsInterestedToShareNo, isInterestedToShareNo, 'нет')}
              </div>
            </div>
          </div>

          <div className="questionaire__message">
            <p id="message-name">{data.yourMessage}</p>
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
      <Footer style={style} />
    </>
  );
}
export default Questionaire;
