import { Injectable } from '@nestjs/common';

export type User = any;

@Injectable()
export class UsersService {
    private readonly users = [{
            userId: 1,
            username: 'claudia.ibardia',
            password: 'assessment1*',
        },
        {
            userId: 2,
            username: 'jhon.triana',
            password: 'assessment1*',
        },
    ];

    async findOne(username: string): Promise<User | undefined> {
        return this.users.find((user) => user.username === username);
    }
}
