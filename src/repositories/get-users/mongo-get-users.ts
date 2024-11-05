import { IGetUsersRepository } from "../../controllers/get-users/protocols";
import { User } from "../../models/user";

export class MongoGetUsersRepository implements IGetUsersRepository {
  async getUsers(): Promise<User[]> {
    return [
      {
        firstName: "Bruno",
        lastName: "Fernandes",
        email: "bruno@email.com",
        password: "123",
      },
    ];
  }
}
