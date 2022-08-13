import * as fs from 'fs';
import * as schemaAstPlugin from '@graphql-codegen/schema-ast';
import { parse, printSchema } from 'graphql';
import { Types } from '@graphql-codegen/plugin-helpers';
import { codegen } from '@graphql-codegen/core';
import path from 'path';
import prisma from './prisma/client';
import schema from '@src/graphql/schema/schema';

async function performCodegen(options: Types.GenerateOptions): Promise<void> {
  const output = await codegen(options);
  fs.writeFile(path.join(__dirname, '/graphql/generated/', options.filename), output, () => {
    console.log('Outputs generated!');
  });
}

// eslint-disable-next-line import/prefer-default-export
export async function performAstCodegen(): Promise<void> {
  const options: Types.GenerateOptions = {
    config: {
      numericEnums: true,
      contextType: { prisma },
      useIndexSignature: true,
    },
    documents: [],
    filename: 'schema.graphql',
    schema: parse(printSchema(schema)),
    plugins: [{ 'schema-ast': {} }],
    pluginMap: {
      'schema-ast': schemaAstPlugin,
    },
  };
  performCodegen(options);
}
