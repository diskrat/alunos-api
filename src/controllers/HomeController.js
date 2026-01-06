import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'je',
      sobrenome: 'gue',
      email: 'thie@email.com',
      idade: 29,
      peso: 70,
      altura: 1.8,
    });
    res.json(novoAluno);
  }
}
export default new HomeController();
