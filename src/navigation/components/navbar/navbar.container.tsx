import React from "react";
import { useDispatch } from "react-redux";

import { Navbar } from "#/navigation/components/navbar/navbar";
import { search } from "#/search/store/actions";

export function NavbarContainer() {
  const dispatch = useDispatch();

  function onSearch(name: string) {
    dispatch(search({ name }));
  }

  return <Navbar onSearch={onSearch} />;
}
