

export class UserController {

  static async index ( req, res, next){

    this.test('hello')

    res.json( { msg: 'helloll' })
  }

  static async create ( req, res, next){

      res.json( { msg: 'hello'} )
  }
}
