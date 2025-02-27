const { calcularMedia, verificaAprovacao, adicionarNota } = require('./src/notas');

describe('Sistema de Notas Escolares', () => {
  let notas;

  beforeEach(() => {
    notas = [7, 8, 9];
  });

  test('Calcula a média corretamente', () => {
    expect(calcularMedia(notas)).toBe(8);
  });

  test('Verifica aprovação', () => {
    expect(verificaAprovacao(calcularMedia(notas))).toBe('Aprovado');
  });

  test('Verifica reprovação', () => {
    expect(verificaAprovacao(5)).toBe('Reprovado');
  });

  test('Adiciona uma nota válida', () => {
    const novasNotas = adicionarNota(notas, 10);
    expect(novasNotas).toEqual([7, 8, 9, 10]);
  });

  test('Lança erro para nota inválida', () => {
    expect(() => adicionarNota(notas, 11)).toThrow('Nota inválida');
    expect(() => adicionarNota(notas, -1)).toThrow('Nota inválida');
  });

    test('Lança erro para lista de notas vazia', () => {
        expect(() => calcularMedia([])).toThrow('Lista de notas vazia');
    });
});