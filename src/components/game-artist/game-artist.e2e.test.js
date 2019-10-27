import React from 'react';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import GameArtist from "../game-artist/game-artist.jsx";

configure({adapter: new Adapter()});

it(`GameArtist e2e test is done`, () => {
  const chageHandler = jest.fn();
  const fakeEvent = {preventDefault: () => window.console.log(`preventDefault`)};
  const gameArtist = shallow(<GameArtist
    onAnswer={chageHandler}
  />);

  const changeForm = gameArtist.find(`.game__artist`);
  changeForm.simulate(`change`, fakeEvent);

  expect(chageHandler).toHaveBeenCalledTimes(1);
});
