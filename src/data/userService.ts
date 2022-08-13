import { User } from '@prisma/client';
import prisma from '@src/prisma/client';

const getAllUsers = async (): Promise<User[]> => {
  return prisma.user.findMany();
};

export const createUser = async (email: string, password: string): Promise<User> => {
  return prisma.user.create({
    data: {
      email,
      password,
      role: 'USER',
    },
  });
};

export default getAllUsers;
