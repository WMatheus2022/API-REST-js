import { Request, Response } from "express";
import CarModel from "../databases/CarModel";

const CarController = {
  async index(req: Request, res: Response): Promise<Response> {
    let cars = await CarModel.find();
    return res.json(cars);
  },
  async findById(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    let car = await CarModel.findById(id);
    return res.json(car);
  },
  async create(req: Request, res: Response): Promise<Response> {
    const {
      marca,
      modelo,
      versao,
      tipocambio,
      quilometragem,
      ano,
      precovenda,
    } = req.body;
    let car = await CarModel.create(req.body);
    return res.json(car);
  },
  async update(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const {
      marca,
      modelo,
      versao,
      tipocambio,
      quilometragem,
      ano,
      precovenda,
    } = req.body;

    let car = await CarModel.findByIdAndUpdate(id, {
      marca: marca,
      modelo: modelo,
      versao: versao,
      tipocambio: tipocambio,
      quilometragem: quilometragem,
      ano: ano,
      precovenda: precovenda,
    });
    return res.json(car);
  },
  async delete(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    let car = await CarModel.findByIdAndDelete(id);
    return res.json(car);
  },
};

export default CarController;
