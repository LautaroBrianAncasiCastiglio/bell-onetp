import User from "@/models/User";
import UserCreate from "@/models/UserCreate";

const users: User[] = [
    {
        username:'usuasdkas',
        email: 'user1@example.com',
        password: 'password1',
        CP:'12'
    }
];

class MockUserCreate implements UserCreate {
    async create(user: User): Promise<User> {
        return user;
    }

    async update(newUser: User): Promise<User> {
        return newUser;
    }

    async delete(username: User["username"]) {}

    
    async getById(username: string): Promise<User | null> {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        return users.find((user) => user.username == username) || null;
    }

}

export default MockUserCreate;