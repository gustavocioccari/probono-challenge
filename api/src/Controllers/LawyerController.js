const Lawyer = require('../Models/Lawyer');

module.exports = {
  async create(req, res){
    const { email } = req.body;

    try{
      if (await Lawyer.findOne({ email }))
        return res.status(400).send({ error:'Lawyer already exists' });

      const lawyer = await Lawyer.create(req.body);

      lawyer.password = undefined;

      return res.json({ lawyer });
    } catch (err){
        return res.status(400).send({ error: 'Registration failed' });
    }
  },

  async delete(req, res){
    try{
      
      const lawyer = await Lawyer.findByIdAndDelete(req.params.lawyerId);

      if(!lawyer)
        return res.status(400).send({ error: 'There is no lawyer with this id' });

      return res.send('Lawyer removed');
    } catch (err){
        return res.status(400).send({ error: 'Delete has failed' });
    }
  },
}