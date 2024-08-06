import React from 'react'

import { SxProps, Table, TableBody, TableCell, TableHead, TableRow, Theme } from '@mui/material'

interface columnType {
    header?: string
    key: string
    size?: number
    sx?: SxProps<Theme>
}

interface TableProps {
    columns: columnType[]
    data: any[]
    className?: string
    sx?: SxProps<Theme>
    density?: 'compact' | 'normal' | 'comfortable'
}

const PlainTable = (props: TableProps) => {
    const { columns, data, className, sx, density = "normal" } = props;

    const tablePadding = density === 'compact' ? 1 : density === 'normal' ? 1.5 : 2;

    return (
        <Table sx={sx} className={`border ${className}`}>
            <TableHead>
                <TableRow>
                    {
                        columns.map((column, index) => (
                            <TableCell sx={{ p: tablePadding, fontWeight: "fontWeightBold" }} width={column?.size} key={index}>{column.header || column.key}</TableCell>
                        ))
                    }
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    data.map((row, index) => (
                        <TableRow key={index}>
                            {
                                columns.map((column, index) => (
                                    <TableCell sx={{ p: tablePadding,...column.sx }} width={column?.size} key={index}>{row?.[column.key]}</TableCell>
                                ))
                            }
                        </TableRow>
                    ))
                }
            </TableBody>
        </Table>
    )
}

export default PlainTable