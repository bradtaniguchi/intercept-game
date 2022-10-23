import { getFactionFromSquadron, PlaneSquadron, UnknownSquadronError } from '.';

describe('getFactionFromSquadron', () => {
  test('returns north for "foo" and "bar" squadrons', () => {
    expect(getFactionFromSquadron('foo')).toEqual('north');
    expect(getFactionFromSquadron('bar')).toEqual('north');
  });
  test('returns south for "alpha" and "beta" squadrons', () => {
    expect(getFactionFromSquadron('alpha')).toEqual('south');
    expect(getFactionFromSquadron('beta')).toEqual('south');
  });
  test('throws if given invalid squadron', () => {
    expect(() =>
      getFactionFromSquadron('random' as unknown as PlaneSquadron)
    ).toThrowError(UnknownSquadronError);
  });
});
