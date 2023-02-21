"use client";

import classNames from "classnames";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  AssignToIcon,
  BacklogIcon,
  NoPriorityIcon,
  ChangePriorityIcon,
  ChangeStatusIcon,
  DoneIcon,
  InProgressIcon,
  LabelIcon,
  PersonIcon,
  TodoIcon,
  UrgentIcon,
  HighIcon,
  MediumIcon,
  LowIcon,
  AddLabels,
} from "./icons/command-bar";

const commandOptions = [
  {
    label: "Assign to..",
    icon: AssignToIcon,
    subOptions: [
      { label: "Jori", icon: PersonIcon },
      { label: "Karri", icon: PersonIcon },
      { label: "Tuomas", icon: PersonIcon },
    ],
  },
  {
    label: "Change status...",
    icon: ChangeStatusIcon,
    subOptions: [
      { label: "Backlog", icon: BacklogIcon },
      { label: "Todo", icon: TodoIcon },
      { label: "In Progress", icon: InProgressIcon },
      { label: "Done", icon: DoneIcon },
    ],
  },
  {
    label: "Change priority...",
    icon: ChangePriorityIcon,
    subOptions: [
      { label: "No priority", icon: NoPriorityIcon },
      { label: "Urgent", icon: UrgentIcon },
      { label: "High", icon: HighIcon },
      { label: "Medium", icon: MediumIcon },
      { label: "Low", icon: LowIcon },
    ],
  },
  {
    label: "Add labels...",
    icon: AddLabels,
    subOptions: [
      { label: "Bug", icon: () => <LabelIcon type="bug" /> },
      { label: "Feature", icon: () => <LabelIcon type="feature" /> },
      { label: "Improvement", icon: () => <LabelIcon type="improvement" /> },
    ],
  },
] as const;

export const CommandMenu = () => {
  const [opened, setOpened] = useState(false);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const commandMenuRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const toggleCommandMenu = (e: MouseEvent) => {
      if (!commandMenuRef.current) return;
      const isMenuButton =
        e.target instanceof Element &&
        e.target.classList.contains("command-menu-button");
      const clickedOutside =
        !isMenuButton && !commandMenuRef.current?.contains(e.target as Node);
      console.log(clickedOutside, e.target);

      setOpened(clickedOutside ? false : true);
    };
    window.addEventListener("click", toggleCommandMenu);

    return () => {
      window.removeEventListener("click", toggleCommandMenu);
    };
  }, []);

  const currentOptions = useMemo(() => {
    const options =
      selectedOption === null
        ? commandOptions
        : commandOptions[selectedOption].subOptions;

    return options;
  }, [selectedOption]);

  useEffect(() => {
    if (!commandMenuRef.current) return;
    commandMenuRef.current.classList.remove("animate-bounce");
    commandMenuRef.current.clientWidth;
    commandMenuRef.current.classList.add("animate-bounce");
  }, [selectedOption]);

  return (
    <div className={classNames(opened && "opened")} ref={commandMenuRef}>
      <div
        className={classNames(
          "flex flex-col items-start rounded-lg bg-transparent-white border-transparent-white w-[90vw] max-w-[64rem] absolute left-[calc(50%+7.5rem)] md:left-1/2 -translate-x-1/2 transition-[transform,opacity] shadow-[rgb(0_0_0_/_35%)_0px_7px_32px]",
          opened && "translate-y-[12.8rem] md:translate-y-[2.4rem] opacity-100",
          !opened && "translate-y-[12.8rem] opacity-60"
        )}
      >
        <span className="ml-4 mt-2 bg-white/[0.05] text-xs px-2 py-1 leading-10 text-white/50">
          SELLO-101 Walkaway-lightning
        </span>
        <input
          type="text"
          className="text-lg bg-transparent w-full p-5 outline-none"
          placeholder="Type a command or search"
        />
        <div className="flex flex-col text-sm text-off-white w-full">
          {currentOptions.map(({ label, icon: Icon, ...menuItem }, index) => (
            <button
              onClick={(ev) => {
                const clickedRootItem = "subOptions" in menuItem;
                setSelectedOption(clickedRootItem ? index : null);
                if (!clickedRootItem) {
                  setOpened(false);
                  ev.stopPropagation();
                }
              }}
              className="command-menu-button first:bg-white/[0.15] px-5 flex h-[4.6rem] items-center gap-3 hover:bg-white/[0.05] w-full"
              key={label}
            >
              <Icon />
              {label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
