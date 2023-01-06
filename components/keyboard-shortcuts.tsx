"use client";

import { Button, Highlight } from "./button";
import { KeyboardIllustration } from "./illustrations/keyboard";

export const KeyboardShortcuts = () => {
  return (
    <>
      <div className="mask-keyboard w-full h-full">
        <KeyboardIllustration />;
      </div>
      <div>
        <Button onClick={() => {}} variant="secondary">
          <Highlight>C</Highlight>
          Create new issue
        </Button>
      </div>
    </>
  );
};
