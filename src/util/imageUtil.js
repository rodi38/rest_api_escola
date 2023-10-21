import fs from 'fs';
import { resolve } from 'path';

export default class imageUtil {
  static async imageToBin(fileName) {
    const bin = await fs.readFileSync(resolve(__dirname, '../', '..', 'uploads', fileName));
    return Buffer.from(bin).toString('base64');
  }

  static binToImage(base64str, fileName) {
    const bitmap = Buffer.from(base64str, 'base64');

    fs.writeFileSync(resolve(__dirname, '../', '..', 'uploads', fileName), bitmap, 'binary', (err) => {
      if (err) {
        throw err.message;
      }
    });
  }
}
