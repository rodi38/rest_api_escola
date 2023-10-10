import User from '../models/User';

class UserController {
  async store(req, res) {
    const novoUser = await User.create({
      nome: 'jojo',
      email: 'cabouse@email.com',
      password: '123456',
    });
    res.status(200).json(novoUser);
  }
}

export default new UserController();
