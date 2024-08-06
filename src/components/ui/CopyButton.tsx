"use client";
import React, { useState } from 'react';

import { CopyAll, Done } from '@mui/icons-material';
import { Box, ClickAwayListener, Tooltip, Zoom } from '@mui/material';

interface CopyButtonProps {
    value: string;
    children?: React.ReactNode;
    hideIcon?: boolean;
    className?: string;
}

export const CopyButton = (props: CopyButtonProps) => {
    const { value, children, hideIcon = false, className } = props;
    const [copied, setCopied] = useState(false);

    return (
        <ClickAwayListener onClickAway={() => setCopied(false)}>
            <Tooltip title={copied ? "Copied" : "Copy"} placement="top" TransitionComponent={Zoom}>
                <Box
                    onClick={() => {
                        navigator.clipboard.writeText(value);
                        setCopied(true);
                    }}
                    className={`flex justify-between items-center cursor-pointer ${className}`} gap={1}
                >
                    {children}
                    {!hideIcon && (
                        <>
                            {copied ? <Done /> : <CopyAll />}
                        </>
                    )}
                </Box>
            </Tooltip>
        </ClickAwayListener>
    );
}
