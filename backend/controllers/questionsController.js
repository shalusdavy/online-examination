const questions = require("../dataBase/questionSchema");

exports.find = async (req, res) => {
  try {
    const data = await questions.find();
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
  }
};

exports.create = async (req, res) => {
    try {
      const {question,options  } = req.body;
      console.log(question,options);
      const data = await questions.create({
        question,
        options
      });
      console.log(data);
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json(error);
    }
  };