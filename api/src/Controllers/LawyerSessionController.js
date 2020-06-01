const bcrypt = require('bcryptjs');

const Lawyer = require('../Models/Lawyer');

module.exports = {
  async create(req, res){
    const { email, password } = req.body;

    const lawyer = await Lawyer.findOne({ email }).select('password');

    if (!lawyer)
      return res.status(400).send({ error: 'Lawyer not found' });

    if (!await bcrypt.compare(password, lawyer.password))
      return res.status(400).send({ error: 'Invalid password' });
  
    lawyer.password = undefined;

    res.send({ lawyer });
  }
}