import React from "react";
import "./drawer.css";

export const Drawer = ({ open, setOpen, children }) => {
  return open ? (
    <div className="drawer-container" onClick={() => setOpen(false)}>
      <div className="drawer" onClick={(e) => e.stopPropagation()}>{children}</div>
    </div>
  ) : null;
};
