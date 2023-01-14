import {getSaludo} from '../../src/base-pruebas/02-template-string'

describe('Pruebas en 02-template-string.js', () => {
    test('getSaludo deber retornar "Hola Brenda"', () => {

        const name = 'Brenda';
        const message = getSaludo( name );

        expect(message).toBe(`Hola ${ name }`);
    })
})