/* eslint-disable class-methods-use-this */

class HomeController {
  async index(req, res) {
    res.json('Index');
  }
}
export default new HomeController();
