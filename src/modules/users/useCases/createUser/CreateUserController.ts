import { Request, Response } from "express";

import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  handle(request: Request, response: Response): Response {
    try {
      const { name, email } = request.body;

      const createUser = this.createUserUseCase.execute({
        name,
        email,
      });

      return response.status(201).json(createUser);
    } catch (err) {
      return response.status(400).json({ error: err.message || err });
    }
  }
}

export { CreateUserController };
