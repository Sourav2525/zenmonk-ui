import { CopyBlock, dracula, hopscotch, irBlack, obsidian } from "react-code-blocks";

interface CopyCodeBlockProps {
  code: any;
  language: string;
  showLineNumbers?: boolean;
}

export default function MyCoolCodeBlock(props: CopyCodeBlockProps) {
  const { code, language, showLineNumbers } = props;

  return (
    <CopyBlock
      text={code}
      language={language}
      showLineNumbers={showLineNumbers}
      theme={obsidian}
      codeBlock
    />
  );
}
