import React from 'react';

function Impressum() {
    return (
        <div className="impressum">
            <h4>Импрессум</h4>
            <p className='mb-3' style={{ width: '610px' }}>Международная общественная организация
            по исследованию и поддержке социальных проектов
            International Union for Research and Support of Social Projects (RESSUP)</p>

            <p className='mb-3' style={{ width: '610px' }}>Регистрационный номер:
            ZVR-Zahl 852567611. Город Вена, Австрия.</p>

            <p className='mb-3' style={{ width: '610px' }}>Уполномоченный управленческий состав организации ressup:
            Аима Саматова, Ирина Штагль и Нургуль Кереева</p>

            <p className='mb-3' style={{ width: '610px' }}>Уполномоченный управленческий состав организации  ответственен за содержание сайта www.ressup.org</p>
            <p className='mb-3' style={{ width: '610px' }}>Деятельность общественной организации ressup не направлена на извлечение прибыли. Организация занимается исследованиями и продвижением социальных проектов, направленных на поддержку социально уязвимых групп населения.</p>
            <p className='mb-3' style={{ width: '610px' }}>Тексты и информация с этого сайта могут быть использованы только со ссылкой на источник. Фотографии защищены авторским правом и также не являются свободно доступными для частных целей. Если вы хотите использовать фотографии с сайта ressup, пожалуйста, свяжитесь с нами по адресу
            <span id="email-to-contact">
                    <a href="mailto:contact@ressup.org">{' contact@ressup.org'}</a>
                </span>
            </p>
        </div>
    );
}

export default Impressum;
