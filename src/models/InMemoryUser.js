const bcrypt = require('bcryptjs');

class InMemoryUser {
  constructor() {
    this.users = [];
    this.nextId = 1;
  }

  async create(userData) {
    const hashedPassword = await bcrypt.hash(userData.password, 12);
    const user = {
      _id: this.nextId.toString(),
      email: userData.email,
      password: hashedPassword,
      firstName: userData.firstName,
      lastName: userData.lastName,
      dateOfBirth: userData.dateOfBirth,
      address: userData.address,
      image: userData.image,
      file: userData.file,
      role: userData.role || 'user',
      createdAt: new Date()
    };
    this.users.push(user);
    this.nextId++;
    return user;
  }

  async findOne(query) {
    return this.users.find(user => {
      if (query.email) return user.email === query.email;
      if (query._id) return user._id === query._id;
      return false;
    });
  }

  async findById(id) {
    return this.users.find(user => user._id === id);
  }

  async find() {
    return this.users;
  }

  async findByIdAndDelete(id) {
    const index = this.users.findIndex(user => user._id === id);
    if (index > -1) {
      return this.users.splice(index, 1)[0];
    }
    return null;
  }

  async comparePassword(inputPassword, hashedPassword) {
    return await bcrypt.compare(inputPassword, hashedPassword);
  }
}

module.exports = new InMemoryUser();