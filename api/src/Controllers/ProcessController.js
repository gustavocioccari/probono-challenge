const Process = require('../Models/Process');

module.exports = {
  async create(req, res){
    const { number, lawyer, client, description } = req.body;

    try{
      if (await Process.findOne({ number }))
        return res.status(400).send({ error:'Process already exists' });

      const process = await Process.create(req.body);

      return res.json({ process });
    } catch (err){
        return res.status(400).send({ error: 'Process registration failed' });
    }
  },

  async lawyerlist(req, res){
    const { lawyer } = req.body;
    try{
      
      const processes = await Process.find({ lawyer }).populate(['lawyer', 'client', 'progresses']);

      if(!processes)
        return res.status(400).send({ error:'This lawyer has no processes associated to him' });

      return res.json({ processes });
    } catch (err){
        return res.status(400).send({ error: 'Search has failed' });
    }
  },

  async clientlist(req, res){
    const { client } = req.body;
    try{
      
      const processes = await Process.find({ client }).populate(['lawyer', 'client', 'progresses']);

      if(!processes)
        return res.status(400).send({ error: 'This client has no processes associated to him' });

      return res.json({ processes });
    } catch (err){
        return res.status(400).send({ error: 'Search has failed' });
    }
  },

  async listprocess(req, res){
    try{
      
      const process = await Process.findById(req.params.processId).populate(['lawyer', 'client', 'progresses']);

      if(!process)
        return res.status(400).send({ error: 'There is no process with this id' });

      return res.json({ process });
    } catch (err){
        return res.status(400).send({ error: 'Search has failed' });
    }
  },

  async deleteprocess(req, res){
    try{
      
      const process = await Process.findByIdAndDelete(req.params.processId);

      if(!process)
        return res.status(400).send({ error: 'There is no process with this id' });

      return res.send('Process removed');
    } catch (err){
        return res.status(400).send({ error: 'Delete has failed' });
    }
  },
}