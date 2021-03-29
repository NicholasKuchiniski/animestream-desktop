import { HStack, Input, Tag, TagCloseButton, TagLabel } from "@chakra-ui/react";
import React, { ChangeEvent, KeyboardEvent, useEffect, useRef, useState } from "react";

import { InputArrayProps } from "#/core/components/input-array/types";
import { openToast } from "#/core/components/toast/toast";
import { capitalize } from "#/core/utils/capitalize";

export function InputArray({ placeholder, onChange }: InputArrayProps) {
  const isFirstUpdate = useRef(true);

  const [items, setItems] = useState<string[]>([]);
  const [item, setItem] = useState("");

  useEffect(() => {
    if (!isFirstUpdate.current) {
      onChange(items);
    } else {
      isFirstUpdate.current = false;
    }
  }, [items, isFirstUpdate]);

  function internalOnChange(event: ChangeEvent<HTMLInputElement>) {
    setItem(capitalize(event.target.value));
  }

  function isItemEmpty(itemInList: string) {
    return itemInList === "";
  }

  function isItemOnList(itemInList: string) {
    const itemInState = items.find((itemInStateList) => itemInStateList === itemInList);

    return !!itemInState;
  }

  function onKeyPress(event: KeyboardEvent<HTMLInputElement>) {
    switch (event.key) {
      case "Enter":
        if (isItemEmpty(item)) {
          return;
        }

        if (isItemOnList(item)) {
          openToast({
            status: "error",
            description: `There is already an item called ${item}`,
          });

          return;
        }

        setItems([...items, item]);
        setItem("");
        break;
    }
  }

  function onRemove(itemInList: string) {
    const newItems = items.filter((itemInStateList) => itemInStateList !== itemInList);

    setItems(newItems);
  }

  function renderItem(itemInList: string) {
    return (
      <Tag key={itemInList} borderRadius="md" variant="solid" bgColor="gray.300">
        <TagLabel color="blackAlpha.800">{itemInList}</TagLabel>
        <TagCloseButton onClick={() => onRemove(itemInList)} color="blackAlpha.800" />
      </Tag>
    );
  }

  function renderItems() {
    if (items.length === 0) {
      return null;
    }

    return (
      <HStack spacing="3" mb="3" overflowX="auto">
        {items.map(renderItem)}
      </HStack>
    );
  }
  return (
    <>
      {renderItems()}
      <Input
        name="genres"
        type="text"
        placeholder={placeholder}
        variant="filled"
        focusBorderColor="animestream.500"
        size="lg"
        value={item}
        onChange={internalOnChange}
        onKeyPress={onKeyPress}
      />
    </>
  );
}
