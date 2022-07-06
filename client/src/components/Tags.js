import { FormControl, MenuItem, Select, Typography } from "@mui/material";
import React, { useState } from "react";
import { BiNoEntry } from "react-icons/bi";
import HorizontalStack from "./util/HorizontalStack";

const TagsBySelect = ({ onTagsBy, tagsBy, tags }) => {
  return (
    <HorizontalStack spacing={1}>
      <Typography color="text.secondary" variant="subtitle2">
        Filter and tags:
      </Typography>
      <Select
        size="small"
        value={tags[tagsBy]}
        sx={{ minWidth: 150 }}
        onChange={onTagsBy}
      >
        {Object.keys(tags).map((tagsName, i) => (
          <MenuItem value={tags[tagsName]} key={i}>
            {tags[tagsName]}
          </MenuItem>
        ))}
      </Select>
    </HorizontalStack>
  );
};

export default TagsBySelect;