import { plainToInstance } from 'class-transformer';
import { validate, ValidationError } from 'class-validator';
import { FastifyReply, FastifyRequest } from 'fastify';

export function validateDto(dtoClass: any) {
  return async (
    request: FastifyRequest,
    reply: FastifyReply,
    next: () => void
  ) => {
    const dtoInstance = plainToInstance(dtoClass, request.body) as object;
    const errors: ValidationError[] = await validate(dtoInstance);

    if (errors.length > 0) {
      const errorMessages = errors
        .map((error) => Object.values(error.constraints || {}))
        .flat();
      return reply.status(400).send({ errors: errorMessages });
    }

    request.body = dtoInstance;
    next();
  };
}
