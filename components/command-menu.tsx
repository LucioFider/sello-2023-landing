const commandOptions = [
  {
    label: "Assign to...",
    icon: () => {},
    subOptions: [
      {
        label: "Jori",
        icon: () => {},
      },
      {
        label: "Karri",
        icon: () => {},
      },
      {
        label: "Thomas",
        icon: () => {},
      },
    ],
  },
  {
    label: "Change status...",
    icon: () => {},
    subOptions: [
      { label: "Backlog", icon: () => {} },
      { label: "Todo", icon: () => {} },
      { label: "In Progress", icon: () => {} },
      { label: "Done", icon: () => {} },
    ],
  },
  {
    label: "Change priority...",
    icon: () => {},
    subOptions: [
      { label: "No priority", icon: () => {} },
      { label: "Urgent", icon: () => {} },
      { label: "High", icon: () => {} },
      { label: "Medium", icon: () => {} },
      { label: "Low", icon: () => {} },
    ],
  },
  {
    label: "Add labels...",
    icon: () => {},
    subOptions: [
      { label: "Bug", icon: () => {} },
      { label: "Feature", icon: () => {} },
      { label: "Improvement", icon: () => {} },
    ],
  },
];

export const CommandMenu = () => {
  return (
    <div className="flex flex-col items-start rounded-lg bg-transparent-white border-transparent-white w-[90vw] max-w-[64rem] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
      <span className="ml-4 mt-2 bg-white/[0.05] text-xs px-2 leading-10 text-white/50">
        SELLO-101-Walkaway-lightning
      </span>
      <input
        type="text"
        className="text-lg bg-transparent w-full p-5 outline-none"
        placeholder="Type a command or search"
      />
      <div className="flex flex-col text-sm text-off-white">
        <button className="p-5 ">Assign to...</button>
      </div>
    </div>
  );
};
