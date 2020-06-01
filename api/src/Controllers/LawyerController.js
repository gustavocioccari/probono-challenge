const Lawyer = require('../Models/Lawyer');

module.exports = {
  async create(req, res){
    const { email } = req.body;

    try{
      if (await Lawyer.findOne({ email }))
        return res.status(400).send({ error:'Lawyer already exists' });

      const lawyer = await Lawyer.create(req.body);

      lawyer.password = undefined;

      return res.send({ lawyer });
    } catch (err){
        return res.status(400).send({ error: 'Registration failed' });
    }
  }
}