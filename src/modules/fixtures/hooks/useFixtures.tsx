import { useEffect } from 'react';
import { useStateSelector, useThunkDispatch } from '../../../core/redux/hooks';
import { getFixturesAsync } from '../thunks';

export const useFixtures = () => {
  const fixturesLoading = useStateSelector(u => u.fixtures.fixturesLoading);
  const fixtures = useStateSelector(u => u.fixtures.fixtures);
  const dispatch = useThunkDispatch();

  useEffect(() => {
    // When the screen first loads,
    // we fetch all the fixtures from the API
    dispatch(getFixturesAsync());
  }, [dispatch]);

  return { fixturesLoading, fixtures };
};
