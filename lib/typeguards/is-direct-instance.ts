import { Class } from "./types/class";

export const isDirectInstanceOf = <T>(
  data: unknown,
  cls: Class<T>
): data is Class<T> => Object.getPrototypeOf(data) === cls.prototype;
