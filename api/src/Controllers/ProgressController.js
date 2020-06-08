const Progress = require('../Models/Progress');
const Process = require('../Models/Process');

module.exports = {
    
    async create(req,res){
      const { description } = req.body;
      
      const progress = await Progress.create({ description });

      const process = await Process.findById(req.params.processId)
      
      process.progresses.push(progress);
      process.save();
      
      return res.json({ process });        
    }
}