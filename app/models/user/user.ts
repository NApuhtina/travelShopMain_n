export interface IUser {
    name: string,
    cardNumber: string,
    birthDate: Date,
}
const user: IUser = {
    name: 'John Doe',
    cardNumber: '1234567890123456',
    birthDate: new Date('1990-01-01')
};

console.log(user.name);
