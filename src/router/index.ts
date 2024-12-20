import { FastifyInstance, FastifyRequest } from 'fastify';

import * as cities from '@/controllers/cities';
import * as countries from '@/controllers/countries';
import * as upload from '@/controllers/upload';

export function registerRouter(fastify: FastifyInstance) {
  fastify.route({
    method: 'GET',
    url: '/city',
    handler: () => cities.index(fastify),
  });
  fastify.route({
    method: 'GET',
    url: '/city/:id',
    handler: (req: FastifyRequest<{ Params: { id: string } }>) => cities.show(fastify, req),
  });
  fastify.route({
    method: 'GET',
    url: '/country',
    handler: () => countries.index(fastify),
  });
  fastify.route({
    method: 'POST',
    url: '/upload',
    handler: (req: FastifyRequest) => upload.index(fastify, req),
  });
}
