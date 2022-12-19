import { Content } from './content';

test('it should be able to create a notification content', () => {
  const content = new Content('Voce recebeu uma solicitacao de amizade');

  expect(content).toBeTruthy();
});

test('it should be not able to create a notification content with less then 5 characters', () => {
  expect(() => new Content('aaa')).toThrow();
});
