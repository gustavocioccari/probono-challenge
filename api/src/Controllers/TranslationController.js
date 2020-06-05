const Translation = require('../Models/Translation');

module.exports = {
  async create(req, res){
    const { rule, traduction } = req.body;

    try{
    if (await Translation.findOne({ rule }))
      return res.status(400).send({ error:'Translation already exists' });

    const translation = await Translation.create(req.body);

    return res.send({ translation });
    } catch (err){
        return res.status(400).send({ error: 'Translation has failed' });
    }
  }
}