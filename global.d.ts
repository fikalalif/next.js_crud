export type AppPageProps<P extends Record<string, string> = Record<string, string>> = {
  params: P;
  searchParams?: { [key: string]: string | string[] | undefined };
};
