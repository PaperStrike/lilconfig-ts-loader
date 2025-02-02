import { Loader } from 'lilconfig';
import get from 'lodash.get';

import TypeScriptCompileError from './Errors/TypeScriptCompileError';

export const TypeScriptLoader: Loader = (filePath: string) => {
  try {
    require('ts-node').register({
      compilerOptions: {
        module: 'commonjs',
      },
    });
    const result = require(filePath);

    return get(result, 'default', result);
  } catch (error) {
    // Replace with logger class OR throw a more specific error
    throw TypeScriptCompileError.fromError(error);
  }
};

export default TypeScriptLoader;
