type PagesMap = {
  homepage: string;
  about: string;
  contact: string;
};

type PagesAccess = {
  [K in keyof PagesMap]: true;
};

export function checkAccess(map: PagesMap): PagesAccess {
  const access = {} as PagesAccess;

  for (const key in map) {
    access[key as keyof PagesMap] = true;
  }

  return access;
}
