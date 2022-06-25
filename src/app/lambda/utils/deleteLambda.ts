import { prisma } from '../../../database';

const deleteLambda = async (lambdaName: string): Promise<void> => {
  await prisma.lambda.delete({
    where: { name: lambdaName },
  });
};

export { deleteLambda };
