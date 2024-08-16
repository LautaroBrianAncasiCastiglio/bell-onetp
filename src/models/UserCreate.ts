import User from "@/models/User";
import MockUserCreate from "@/services/MockUserCreate";

interface UserCreate {
    getById(username: User["username"]): Promise<User | null>;
    create(user: User): Promise<User>;
    update(newUser: User): Promise<User | null>;
    delete(username: User["username"]): Promise<void>;
}

export default UserCreate;
