export const h1 = (props: any) => <h1 className="text-3xl" {...props} />;
export const h2 = (props: any) => <h2 className="text-2xl mb-2 pb-1 pt-4 border-b border-slate-300 dark:border-slate-500 w-6/12 font-semibold" {...props} />;
export const h3 = (props: any) => <h3 className="text-xl mt-4 font-semibold" {...props} />;
export const p = (props: any) => {
  const isImage = (props.children as unknown as any)?.type?.toString().includes('img')
  if (isImage) return <div className="my-6" {...props} />
  return <p className="mt-2 mb-4" {...props} />
};
export const ul = (props: any) => <ul className="list-disc list-inside ml-4 pb-1" {...props} />;
export const li = (props: any) => <li className="pb-1" {...props} />;
export const img = (props: any) => <div className="max-w-[80%] mx-auto">
  <img className="mx-auto border-4 rounded-md border-slate-200 dark:brightness-75" {...props} />
  <div className="flex justify-center text-sm text-slate-500">{props.alt}</div>
</div>;
export const a = (props: any) => <a className="underline" {...props} />;
export const pre = (props: any) => <div className="flex justify-center">
  <pre className="p-2 grow-0 [&>code]:bg-inherit rounded-md" {...props} />
</div>
export const code = (props: any) => <code className="bg-slate-200 p-1 rounded-sm dark:bg-slate-800" {...props} />