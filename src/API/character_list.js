import RumiImg from '../components/images/characters/1.jpg'


const characters = [
    {
        id: 0,
        name: 'Rumi Tsurumi',
        health: 300,
        mana: 300,
        strength: 5,
        agility: 10,
        wisdom: 0,
        charImg: RumiImg,
    },
    {
        id: 1,
        name: 'Nene',
        health: 300,
        mana: 300,
        strength: 5,
        agility: 10,
        wisdom: 0,
        charImg: RumiImg,
    },
    {
        id: 2,
        name: 'Kuruha',
        health: 300,
        mana: 300,
        strength: 5,
        agility: 10,
        wisdom: 0,
        charImg: RumiImg,
    },
]

export function fetchAll() {
    return characters
}