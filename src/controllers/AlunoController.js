import Aluno from '../models/Aluno';

class AlunoController {
  async index(req, res) {
    try {
      const alunos = await Aluno.findAll();
      return res.json(alunos);
    } catch (e) {
      return res.json(null);
    }
  }

  async store(req, res) {
    try {
      const aluno = await Aluno.create(req.body);
      return res.json(aluno);
    } catch (e) {
      return res.status(401).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async show(req, res) {
    try {
      if (!req.params.id) {
        return res.json('parametro não enviado');
      }
      const aluno = await Aluno.findByPk(req.params.id);
      if (!aluno) {
        return res.json('Aluno inexistente.');
      }
      return res.status(200).json(aluno);
    } catch (e) {
      return res.status(401).json({
        errors: ['Aluno não encontrado'],
      });
    }
  }

  async update(req, res) {
    try {
      if (!req.params) {
        return res.status(401).json('undefined params');
      }
      const aluno = await Aluno.findByPk(req.params.id);
      if (!aluno) {
        return res.status(401).json('aluno inexistente');
      }
      const updatedAluno = await aluno.update(req.body);
      return res.json({
        msg: 'Aluno atualizado com sucesso.',
        updatedAluno,
      });
    } catch (e) {
      return res.status(401).json({
        errors: ['erro'],
      });
    }
  }

  async delete(req, res) {
    try {
      const aluno = await Aluno.findByPk(req.params.id);
      if (!aluno) {
        return res.status(401).json({
          errors: ['Aluno não encontrado'],
        });
      }
      await aluno.destroy();
      return res.json({
        msg: 'Aluno deletado com sucesso',
        aluno,
      });
    } catch (e) {
      return res.status(401).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

export default new AlunoController();
