export type taskPropType = {
  task: {
    id: number;
    title: string;
    status: "complete" | "incomplete";
  };
};

export type TaskComponentPropType={
    task:taskPropType["task"];
    changeStatus:(e:React.ChangeEvent<HTMLInputElement>)=>void;
}