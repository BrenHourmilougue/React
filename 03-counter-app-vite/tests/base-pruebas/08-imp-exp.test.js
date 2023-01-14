import { getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp"

describe ('Test 08', () => {
    test('Debe retornar un arreglo con los heroes de DC', () =>{
        const heroesDC = getHeroesByOwner('DC');

        const testHeroesDc = [
            {
                id: 1,
                name: 'Batman',
                owner: 'DC'
            },
            {
                id: 3,
                name: 'Superman',
                owner: 'DC'
            },
            {
                id: 4,
                name: 'Flash',
                owner: 'DC'
            },
        ]

        expect(heroesDC).toEqual(testHeroesDc);
        expect(heroesDC.length).toBe(testHeroesDc.length);
    })

    test('Debe retornar un arreglo con los heroes de Marvel', () => {
        const heroesMarvel = getHeroesByOwner('Marvel');
        const testHeroesMarvel = [
            {
                id: 2,
                name: 'Spiderman',
                owner: 'Marvel'
            },
            {
                id: 5,
                name: 'Wolverine',
                owner: 'Marvel'
            },
        ]

        expect(heroesMarvel).toEqual(testHeroesMarvel);
        expect(heroesMarvel.length).toBe(testHeroesMarvel.length);
    })
})