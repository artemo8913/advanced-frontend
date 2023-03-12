

export const MainPageAsync = React.lazy(
  () =>
    new Promise((res) => {
      setTimeout(() => {
        //@ts-ignore
        res(import("./MainPage"));
      }, 1000);
    })
);
