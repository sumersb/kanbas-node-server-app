export let movies = [
    { _id: '123', title: 'Avatar' },
    { _id: '234', title: 'Terminator' },
    { _id: '345', title: 'Aliens' },
    { _id: '456', title: 'Titanic' },
]
export default function Hello(app) {
    app.get('/hello', (req, res) => {
        res.send('Life is good!')
    });
    app.get('/', (req, res) => {
        res.send('Welcome to Full Stack Development!')
    })   
}
