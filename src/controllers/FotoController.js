// import Aluno from '../models/Aluno';
import multer from 'multer';
import multerConfig from '../config/multerConfig';
// import imageUtil from '../util/imageUtil';

const upload = multer(multerConfig).single('foto');

class FotoController {
  store(req, res) {
    return upload(req, res, async (err) => {
      if (err) {
        return res.status(400).json({
          errors: [err.code],
        });
      }
      // console.log(await imageUtil.imageToBin(req.file.filename));
      return res.status(200).json(req.file);
    });
  }
}

export default new FotoController();
