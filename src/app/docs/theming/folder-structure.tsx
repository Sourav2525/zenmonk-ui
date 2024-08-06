"use client";
import React from "react";

import MyCoolCodeBlock from "@/components/ui/copy-code-block";

const FolderStructure = () => {
  return (
    <MyCoolCodeBlock
      language="js"
      showLineNumbers={false}
      code={`
          .
          ├── src
          |   ├── app
          |   └── ...
          |   ├── theme
          │   |   |── base.ts
          |   |   |── theme.ts
          |   |   └── theme-provider.tsx
          |   └── ...
          |   ├── next.config.js
          |   ├── package.json
          |   ├── postcss.config.js
          |   ├── tailwind.config.js
          |   └── tsconfig.json
          .
        `}
    />
  );
};

export default FolderStructure;
