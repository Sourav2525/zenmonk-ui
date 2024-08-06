"use client";

import { FC, ReactElement, ReactNode, SyntheticEvent, useEffect, useState } from 'react';

import { Tabs as MuiTabs, Tab, Box } from '@mui/material';

interface TabData {
  label: string;
  value: string;
}

interface TabsProps {
  defaultValue?: string;
  children: ReactElement<TabData | { value: string; children: ReactNode }>[];
}

const Tabs: FC<TabsProps> = ({ defaultValue = '', children }) => {
  const [value, setValue] = useState(defaultValue);
  const [tabTriggers, setTabTriggers] = useState<ReactElement[]>([]);
  const [tabContents, setTabContents] = useState<ReactElement[]>([]);

  const handleChange = (_: SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  useEffect(() => {
    const triggers = children.filter((child) => child.type === TabsTrigger);
    const contents = children.filter((child) => child.type === TabsContent);

    setTabTriggers(triggers as ReactElement[]);
    setTabContents(contents as ReactElement[]);
  }, [children]);

  return (
    <>
      <MuiTabs value={value} onChange={handleChange} className="border-bottom">
        {tabTriggers.map((trigger) => (
          <Tab
            key={trigger.props.value}
            label={trigger.props.label}
            value={trigger.props.value}
          />
        ))}
      </MuiTabs>
      {
        tabContents.map((content) => (
          <TabPanel
            key={content.props.value}
            value={content.props.value}
            currentValue={value}
          >
            {content.props.children}
          </TabPanel>
        ))
      }
    </>
  );
};

interface TabsTriggerProps {
  label: string;
  value: string;
}

const TabsTrigger: FC<TabsTriggerProps> = ({ label, value }) => {
  return <Tab label={label} value={value} />;
};

interface TabsContentProps {
  value: string;
  children: ReactNode;
}

const TabsContent: FC<TabsContentProps> = ({ value, children }) => {
  return <Box>{children}</Box>;
};

interface TabPanelProps {
  children?: ReactNode;
  value: string;
  currentValue: string;
}

const TabPanel: FC<TabPanelProps> = ({ children, value, currentValue }) => {
  return (
    <Box py={3} role="tabpanel" hidden={value !== currentValue}>
      {children}
    </Box>
  );
};

export { Tabs, TabsTrigger, TabsContent };