import React from "react";
import { Input } from "@chakra-ui/react";
import { Field } from "../../../components/ui/field";

import myData from "./Slugs.json"

function BadgeMenu() {
  const [badgeProps, setBadgeProps] = React.useState({
    badgeContent: "React",
    style: "flat",
    logo: "react",
    color: "494949",
    labelColor: "1b1b1b",
  });

  console.log(badgeProps.color);

  return (
    <div className="cardStack">
      <Field className="cardField" label="Preview">
        <img
          alt="Static Badge"
          src={`https://img.shields.io/badge/${badgeProps.badgeContent}-${badgeProps.color}?style=${badgeProps.style}&logo=${badgeProps.logo}&labelColor=%23${badgeProps.labelColor}`}
        />
      </Field>
      <Field
        className="cardField"
        label="Label"
        required
        helperText="The Label to be displayed on the right."
      >
        <Input
          value={badgeProps.badgeContent}
          onChange={(e) =>
            setBadgeProps({ ...badgeProps, badgeContent: e.target.value })
          }
          className="cardInput"
          placeholder="bhailang"
        />
      </Field>

      <div style={{ display: "flex", flexDirection: "row", gap: "20px" }}>
        <Field
          className="cardField"
          label="Style"
          helperText="Select a Shields.io style"
        >
          <select
            value={badgeProps.style}
            onChange={(e) =>
              setBadgeProps({ ...badgeProps, style: e.target.value })
            }
            name="styles"
            className="cardInput"
          >
            {["flat", "flat-square", "plastic", "for-the-badge", "social"].map(
              (item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              )
            )}
          </select>
        </Field>
        <Field
          className="cardField"
          label="Logo"
          helperText="Select a Logo."
        >
          <select
            value={badgeProps.logo}
            onChange={(e) =>
              setBadgeProps({ ...badgeProps, logo: e.target.value })
            }
            name="styles"
            className="cardInput"
          >
            {myData.map(
              (item) => (
                <option key={item.slug} value={item.slug}>
                  {item.name}
                </option>
              )
            )}
          </select>
        </Field>
      </div>

      <div style={{ display: "flex", flexDirection: "row", gap: "20px" }}>
        <Field
          className="cardField"
          label="Color (right)"
          helperText="Select a badge color (right)."
        >
          <input
            style={{ padding: "0", borderRadius: "20px", border: "none" }}
            className="cardInput"
            type="color"
            id="favcolor"
            name="favcolor"
            value={"#" + badgeProps.labelColor}
            onChange={(e) =>
              setBadgeProps({
                ...badgeProps,
                labelColor: e.target.value.replace("#", ""),
              })
            }
          />
        </Field>

        <Field
          className="cardField"
          label="Color (left)"
          helperText="Select a badge color (right)."
        >
          <input
            style={{ padding: "0", borderRadius: "20px", border: "none" }}
            className="cardInput"
            type="color"
            id="favcolor"
            name="favcolor"
            value={"#" + badgeProps.color}
            onChange={(e) =>
              setBadgeProps({
                ...badgeProps,
                color: e.target.value.replace("#", ""),
              })
            }
          />
        </Field>
      </div>
    </div>
  );
}

export default BadgeMenu;
