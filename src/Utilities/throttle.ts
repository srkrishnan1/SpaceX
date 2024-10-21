export function throttle(func: Function, limit: number) {
  let flag: boolean = true;

  return function (this: any, ...arg: any[]) {
    let context: any = this;
    if (flag) {
      const result = func.apply(context, arg);
      flag = false;
      setTimeout((): void => {
        flag = true;
      }, limit);
      return result;
    }
  };
}
