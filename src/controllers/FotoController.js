// import Aluno from '../models/Aluno';

class FotoController {
  async store(req, res) {
    return res.json(req.file);
  }
}

export default new FotoController();
