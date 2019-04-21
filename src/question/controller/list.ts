import {Request, Response} from "express";

const list = () => async (req: Request, res: Response) => {
  let questions = [
    {_id: '1', title: 'Question Title #1', 'author': 'John Galt'},
    {_id: '2', title: 'Question Title #2', 'author': 'Obi One Kenobi'},
    {_id: '3', title: 'Question Title #3', 'author': 'Jack Miller'},
    {_id: '4', title: 'Question Title #4', 'author': 'Bob Allen'},
  ];

  res.status(200).send({ questions });
};

export default list;