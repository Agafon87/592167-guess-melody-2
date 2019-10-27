import React from 'react';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import GameGenre from '../game-genre/game-genre.jsx';

configure({adapter: new Adapter()});

it(`GameGenre e2e test is done`, () => {
  const clickHandler = jest.fn();
  const fakeEvent = {preventDefault: () => window.console.log(`preventDefault`)};
  const gameGenre = shallow(<GameGenre
    onAnswer={clickHandler}
  />);

  const gameGenreForm = gameGenre.find(`.game__tracks`);
  gameGenreForm.simulate(`submit`, fakeEvent);

  expect(clickHandler).toHaveBeenCalledTimes(1);
});
