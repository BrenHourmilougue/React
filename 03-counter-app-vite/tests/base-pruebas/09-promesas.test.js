import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";

describe('Test 09-Promesas', () => {
    test('Debe retornar un heroe', (done) => {
        const id=1;
        getHeroeByIdAsync(id).then(hero => {

            expect(hero).toEqual({
                id: 1,
                name: 'Batman',
                owner: 'DC'
            })

            done();
        })
    })

    test('Debe obtener un error si heroe no existe', (done) =>{
        const id = 345;
        getHeroeByIdAsync(id).catch(error => {
            expect(error).toBe(`No se pudo encontrar el héroe ${id}`);
            done();
        })
    })
})