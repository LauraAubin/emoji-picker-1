import React from 'react';
import { Tag, Stack } from '@shopify/polaris';

export default function TagList(props) {
  return(
    <Stack spacing="tight">
      {props.tags.map((tag, index) => {
        return(
          <Tag
            key={index}
            onRemove={() => props.onRemove(index)}
          >
            {tag}
          </Tag>
        );
      })}
    </Stack>
  );
}
