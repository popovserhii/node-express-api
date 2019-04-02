const list = () => async (req, res, next) => {
  let questions = [
    {_id: '1', title: 'Question Title #1', 'author': 'John Galt'},
    {_id: '2', title: 'Question Title #2', 'author': 'Obi One Kenobi'},
    {_id: '3', title: 'Question Title #3', 'author': 'Jack Miller'},
  ];

  res.status(200).send({ questions });
};

module.exports= { list };