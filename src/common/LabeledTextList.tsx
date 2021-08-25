import { Box } from '@material-ui/core';
import React from 'react';
import LabeledText, { LabeledTextProps } from './LabeledText';

const spacing = 1.25;

interface LabeledTextListProps {
  data: Array<LabeledTextProps>;
}

function LabeledTextList({ data }: LabeledTextListProps) {
  return (
    <Box margin={-spacing} display="flex" flexWrap="wrap">
      {data.map((item) => {
        return (
          <Box key={item.label} padding={spacing}>
            <LabeledText {...item} />
          </Box>
        );
      })}
    </Box>
  );
}

export default LabeledTextList;
