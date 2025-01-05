"use client";
import React from "react";
import SmallBt from "./components/smallButtons";

import { motion } from "framer-motion";

import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "../components/ui/menu";
import { Button } from "../components/ui/button";

import { Download, Upload, Copy, Plus } from "lucide-react";
import { Image, Link, Text, SquareMinus, Code, Quote } from "lucide-react";
import { Toaster, toaster } from "../components/ui/toaster";

import Editor from "./components/editor/editor";

import "./menu.css";

import "./card.css";
import MenuItemChild from "./components/menuItem";
import ImageMenu from "./components/cards/image";
import LinkMenu from "./components/cards/link";
import SectionMenu from "./components/cards/section";
import CodeMenu from "./components/cards/code";
import QuoteMenu from "./components/cards/quote";
import BadgeMenu from "./components/cards/badge";

function Page() {
  const [mdText, setMDText] = React.useState("");
  const [typing, setTyping] = React.useState(false);

  const [modalData, setModalData] = React.useState("");

  const [currentModal, setCurrentModal] = React.useState("");
  const [showModal, setShowModal] = React.useState(false);
  console.log(currentModal);

  React.useEffect(() => {
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
    }, 500);
  }, [mdText]);

  // 3 fns

  const downloadMarkdown = React.useCallback(() => {
    const blob = new Blob([mdText], { type: "text/markdown" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "README.md";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }, [mdText]);

  const copyMarkdown = () => {
    try {
      navigator.clipboard.writeText(mdText);
      toaster.create({
        description: "Copied to Clipboard.",
        type: "success",
      });
    } catch (err) {
      console.error("Failed to copy markdown:", err);
    }
  };

  const handleFileUpload = React.useCallback((e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const content = e.target?.result;
        if (typeof content === "string") {
          setMDText(content);
        }
      };
      reader.readAsText(file);
    }
  }, []);

  return (
    <>
      <Toaster />
      <div className="bg"></div>
      <div className="container">
        <div className="top">
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              gap: "50px",
            }}
          >
            <img src="logoRW.svg"></img>
            <div className="smallButtonContainer">
              <SmallBt clickEvent={downloadMarkdown}>
                <Download strokeWidth={3} size={30} />
              </SmallBt>
              <SmallBt clickEvent={handleFileUpload}>
                <input
                  type="file"
                  onChange={handleFileUpload}
                  className="inset-1 w-full h-full opacity-0"
                  accept=".md,.mdx,.txt"
                />
                <Upload strokeWidth={3} size={30} className="absolute" />
              </SmallBt>
              <SmallBt clickEvent={copyMarkdown}>
                <Copy strokeWidth={3} size={30} />
              </SmallBt>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              gap: "50px",
            }}
          >
            <p className="instruction">
              Use ⌘/ctrl + B, I, U for Bold, Italic, Underline Respectively.
            </p>
            <AddMenu
              showModal={showModal}
              setShowModal={setShowModal}
              setCurrentModal={setCurrentModal}
            />
          </div>
        </div>

        <div className="main">
          <Editor mdText={mdText} setMDText={setMDText} />
        </div>

        <div className="foot">
          <p className="instruction">
            {mdText.split(" ").length - 1} words, {mdText.length} characters
          </p>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              gap: "20px",
            }}
            className="instruction"
          >
            {mdText.split("\n").length}{" "}
            {mdText.split("\n").length != 1 ? "Lines" : "Line"}{" "}
            <div
              style={{
                backgroundColor: typing ? "#D78DFF" : "#646464",
                boxShadow: typing
                  ? "0 0 20px 1px #D78DFF, inset 0 0 5px 1px #00000039"
                  : "inset 0 0 5px 1px #000000bd",
              }}
              className="onBulb"
            ></div>
          </div>
        </div>
      </div>
      {showModal && (
        <Card
          setShowModal={setShowModal}
          currentModal={currentModal}
          mdText={mdText}
          setMDText={setMDText}
          modalData={modalData}
          setModalData={setModalData}
        />
      )}
    </>
  );
}

export default Page;

function AddMenu({ showModal, setShowModal, setCurrentModal }) {
  function triggerModal(str) {
    setShowModal(true);
    setCurrentModal(str);
  }

  return (
    <MenuRoot>
      <MenuTrigger asChild>
        <Button className="addBt" variant="outline" size="md">
          <Plus className="addBtIcon" />
          ADD
        </Button>
      </MenuTrigger>
      <MenuContent className="menu">
        <MenuItem
          className="menuItem"
          value="image"
          onClick={() => {
            triggerModal("image");
          }}
        >
          <MenuItemChild text="Image">
            <Image className="MenuIcon" />
          </MenuItemChild>
        </MenuItem>

        <MenuItem
          className="menuItem"
          value="link"
          onClick={() => {
            triggerModal("link");
          }}
        >
          <MenuItemChild text="Link">
            <Link className="MenuIcon" />
          </MenuItemChild>
        </MenuItem>

        <MenuItem
          className="menuItem"
          value="text"
          onClick={() => {
            triggerModal("section");
          }}
        >
          <MenuItemChild text="Section">
            <Text className="MenuIcon" />
          </MenuItemChild>
        </MenuItem>

        <MenuItem
          className="menuItem"
          value="badge"
          onClick={() => {
            triggerModal("badge");
          }}
        >
          <MenuItemChild text="Badge">
            <SquareMinus className="MenuIcon" />
          </MenuItemChild>
        </MenuItem>

        <MenuItem
          className="menuItem"
          value="code"
          onClick={() => {
            triggerModal("code");
          }}
        >
          <MenuItemChild text="Code">
            <Code className="MenuIcon" />
          </MenuItemChild>
        </MenuItem>

        <MenuItem
          className="menuItem"
          value="quote"
          onClick={() => {
            triggerModal("quote");
          }}
        >
          <MenuItemChild text="Quote">
            <Quote className="MenuIcon" />
          </MenuItemChild>
        </MenuItem>
      </MenuContent>
    </MenuRoot>
  );
}

/*
- Image
- Link
- Section
- Badge
- Code
- Quote

CARD!!
InputBox, NumberInput, Combobox, 
*/

function Card({
  setShowModal,
  currentModal,
  mdText,
  setMDText,
  modalData,
  setModalData,
}) {
  function addModalData() {
    setMDText(mdText + modalData);
  }

  function renderModal() {
    switch (currentModal) {
      case "image":
        return <ImageMenu setModalData={setModalData} modalData={modalData} />;
      case "link":
        return <LinkMenu setModalData={setModalData} modalData={modalData} />;
      case "section":
        return (
          <SectionMenu setModalData={setModalData} modalData={modalData} />
        );
      case "code":
        return <CodeMenu setModalData={setModalData} modalData={modalData} />;
      case "quote":
        return <QuoteMenu setModalData={setModalData} modalData={modalData} />;
      case "badge":
        return <BadgeMenu setModalData={setModalData} modalData={modalData} />;
      default:
        return null;
    }
  }
  return (
    <div className="card-cont">
        <motion.div
          initial={{ opacity: "0", translateY: "50px" }}
          animate={{ opacity: "1", translateY: "0px" }}
          exit={{opacity: "0", translateY: "-50px"}}
          className="CardBox"
        >
          <div className="CardBody">
            <>{renderModal()}</>
          </div>
          <div className="CardFooter">
            <button
              style={{ backgroundColor: "#FF3751", color: "#f0f0f0" }}
              className="CardBt"
              onClick={() => {
                setShowModal(false);
              }}
            >
              Cancel
            </button>
            <button
              style={{ backgroundColor: "#f0f0f0", color: "#0b0b0b" }}
              className="CardBt"
              onClick={() => {
                addModalData();
                setShowModal(false);
              }}
            >
              OK
            </button>
          </div>
        </motion.div>
    </div>
  );
}
