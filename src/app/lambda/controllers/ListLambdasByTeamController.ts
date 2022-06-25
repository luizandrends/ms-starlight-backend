import { Request, Response } from 'express';

import { listByTeam } from '../utils';

class ListLambdasByTeamController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { teamName } = request.params;

    const lambdas = await listByTeam(teamName);

    return response.json(lambdas);
  }
}

export default new ListLambdasByTeamController();
