const Client = require('../Models/Client');
const validarCpf = require('validar-cpf');

module.exports = {
  async create(req, res){
    const { cpf } = req.body;

    try{
      if (await Client.findOne({ cpf }))
        return res.status(400).send({ error:'Client already exists' });

      if (!validarCpf(cpf))
        return res.status(400).send({ error:'Invalid CPF' });

      const client = await Client.create(req.body);

      client.password = undefined;

      return res.send({ client });
    } catch (err){
        return res.status(400).send({ error: 'Registration failed' });
    }
  }
}