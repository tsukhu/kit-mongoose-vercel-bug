import dbConnect from '../../dbConnect';
import demoModel from '../../demoModel';
import type { RequestHandlerOutput } from '@sveltejs/kit';

export const get = async (): Promise<RequestHandlerOutput> => {
  try {
    await dbConnect();
    const model = await demoModel;

    const result = await model.findOne({ name: 'demo' });

    return {
      status: 200,
      body: {
        ...(result.get('data') ?? {}),
      },
    };
  } catch (e: any) {
    return {
      status: 500,
      body: {
        error: e.message,
      },
    };
  }
};
