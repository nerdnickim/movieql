export const people = [
    {
        id: 1,
        age: 28,
        genter: "Male",
        name: "Kim"
    },
    {
        id: 2,
        age: 22,
        genter: "Female",
        name: "Eui"
    },
    {
        id: 3,
        age: 13,
        genter: "Male",
        name: "Kyo"
    },
    {
        id: 4,
        age: 30,
        genter: "Female",
        name: "Kim Eui"
    },
    {
        id: 5,
        age: 25,
        genter: "Male",
        name: "Eui Kyo"
    }
]

export const getById = id => {
    const filteredPeople = people.filter(person => id === person.id);
    return filteredPeople[0]
}