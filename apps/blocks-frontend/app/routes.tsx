import { type RouteConfig, index, route } from '@react-router/dev/routes';

export default [
  index('./app.tsx'),
  route('automations', './routes/automations.tsx'),
  route('automations/:id', './routes/automation.tsx'),
] satisfies RouteConfig;
