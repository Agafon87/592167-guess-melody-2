import React from 'react';
import PropTypes from 'prop-types';

const GameGenre = (props) => {
  const {onAnswer} = props;
  return <section className="game game--genre">
    <header className="game__header">
      <a className="game__back" href="#">
        <span className="visually-hidden">Сыграть ещё раз</span>
        <img className="game__logo" src="img/melody-logo-ginger.png" alt="Угадай мелодию" />
      </a>

      <svg className="timer" viewBox="0 0 780 780">
        <circle className="timer__line" cx="390" cy="390" r="370" />
      </svg>

      <div className="timer__value" xmlns="http://www.w3.org/1999/xhtml">
        <span className="timer__mins">05</span>
        <span className="timer__dots">:</span>
        <span className="timer__secs">00</span>
      </div>

      <div className="game__mistakes">
        <div className="wrong"></div>
        <div className="wrong"></div>
        <div className="wrong"></div>
      </div>
    </header>

    <section className="game__screen">
      <h2 className="game__title">Выберите инди-рок треки</h2>
      <form className="game__tracks" onSubmit={ (evt) => {
        evt.preventDefault();
        onAnswer();
      }}>
        <div className="track">
          <button className="track__button track__button--play" type="button"></button>
          <div className="track__status">
            <audio></audio>
          </div>
          <div className="game__answer">
            <input className="game__input visually-hidden" type="checkbox" name="answer" value="answer-1" id="answer-1" />
            <label className="game__check" htmlFor="answer-1">Отметить</label>
          </div>
        </div>

        <div className="track">
          <button className="track__button track__button--play" type="button"></button>
          <div className="track__status">
            <audio></audio>
          </div>
          <div className="game__answer">
            <input className="game__input visually-hidden" type="checkbox" name="answer" value="answer-1" id="answer-2" />
            <label className="game__check" htmlFor="answer-2">Отметить</label>
          </div>
        </div>

        <div className="track">
          <button className="track__button track__button--pause" type="button"></button>
          <div className="track__status">
            <audio></audio>
          </div>
          <div className="game__answer">
            <input className="game__input visually-hidden" type="checkbox" name="answer" value="answer-1" id="answer-3" />
            <label className="game__check" htmlFor="answer-3">Отметить</label>
          </div>
        </div>

        <div className="track">
          <button className="track__button track__button--play" type="button"></button>
          <div className="track__status">
            <audio></audio>
          </div>
          <div className="game__answer">
            <input className="game__input visually-hidden" type="checkbox" name="answer" value="answer-1" id="answer-4" />
            <label className="game__check" htmlFor="answer-4">Отметить</label>
          </div>
        </div>

        <button className="game__submit button" type="submit">Ответить</button>
      </form>
    </section>
  </section>;
};

GameGenre.propTypes = {
  onAnswer: PropTypes.func
};

export default GameGenre;
