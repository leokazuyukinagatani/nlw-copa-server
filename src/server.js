"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const jwt_1 = __importDefault(require("@fastify/jwt"));
const cors_1 = __importDefault(require("@fastify/cors"));
const auth_1 = require("./routes/auth");
const users_routes_1 = require("./routes/users.routes");
const pools_routes_1 = require("./routes/pools.routes");
const guesses_routes_1 = require("./routes/guesses.routes");
const games_routes_1 = require("./routes/games.routes");
async function bootstrap() {
    const fastify = (0, fastify_1.default)({
        logger: true,
    });
    await fastify.register(cors_1.default, {
        origin: true,
    });
    await fastify.register(jwt_1.default, {
        secret: 'nlwcopa'
    });
    await fastify.register(auth_1.authRoutes);
    await fastify.register(users_routes_1.userRoutes);
    await fastify.register(pools_routes_1.poolRoutes);
    await fastify.register(guesses_routes_1.guessesRoutes);
    await fastify.register(games_routes_1.gameRoutes);
    await fastify.listen({ port: 3333, host: '0.0.0.0' });
}
bootstrap();
