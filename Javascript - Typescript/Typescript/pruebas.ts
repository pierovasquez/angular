export class MenuItemUtil {
    static counter;
    static getNumberChildren(item: MenuItem): number {
      let result = 0;
      if (item.children) {
        for (const child of item.children) {
          result += MenuItemUtil.getNumberChildren(child);
          result++;
        }
      }
      return result;
    }