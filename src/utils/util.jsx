import { v3 as uuid } from 'uuid';

const MY_NAMESPACE = '6ec0bd7f-11c0-43da-975e-2a8ad9ebae0b';

export const generateSeededUUID = (seedString) => {
  return uuid(seedString, MY_NAMESPACE);
};