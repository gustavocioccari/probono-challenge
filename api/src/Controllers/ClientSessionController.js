const bcrypt = require('bcryptjs');

const Client = require('../Models/Client');

module.exports = {
  async create(req, res){
    const { cpf, password } = req.body;

    const client = await Client.findOne({ cpf }).select('password');

    if (!client)
      return res.status(400).send({ error: 'Client not found' });

    if (!await bcrypt.compare(password, client.password))
      return res.status(400).send({ error: 'Invalid password' });
  
    client.password = undefined;

    res.json({ client });
  }
}