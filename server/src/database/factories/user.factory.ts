import Faker from 'faker';
import { define } from 'typeorm-seeding';
import { User } from 'src/users/entities/user.entity';

// define(User, (faker: typeof Faker, context: { roles: String[] }) => {
//     const username = faker.internet.userName()
//     const email= faker.internet.email()
//     const password= faker.internet.password()
// });
