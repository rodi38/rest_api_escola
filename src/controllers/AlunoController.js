import Aluno from '../models/Aluno';

class AlunoController {
  async create(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'ronaldinho',
      sobrenome: 'Rocha',
      email: 'cabuncro@email.com',
      idade: 22,
      peso: 85,
      altura: 1.88,
    });
    res.status(200).json(novoAluno);
  }
}

export default new AlunoController();
