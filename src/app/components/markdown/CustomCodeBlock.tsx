"use client";

import React, { useEffect, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { Badge, Button, ScrollArea } from "@radix-ui/themes";
import { useTheme } from "next-themes";
import { jetbrains_mono } from "@/app/fonts/font";
import theme from "./theme/CustomTheme";
import fallbackTheme from "./theme/FallbackTheme";
import styles from "@/app/styles/CustomCodeBlock.module.css";
import { clsx } from "clsx";
import { motion } from "framer-motion";
import { CheckIcon, CopyIcon } from "@radix-ui/react-icons";

interface CodeBlockProps {
  language: string;
  value: string;
}

const CustomCodeBlock: React.FC<CodeBlockProps> = ({ language, value }) => {
  const [copied, setCopied] = useState(false);
  const { resolvedTheme } = useTheme();
  const [currentTheme, setCurrentTheme] = useState<{
    [key: string]: React.CSSProperties;
  }>(fallbackTheme);
  const [bgClass, setBgClass] = useState("");
  const [lineNumberBg, setLineNumberBg] = useState("transparent");

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  useEffect(() => {
    setCurrentTheme(
      resolvedTheme === "dark"
        ? theme.customSolarizedDarkAtom
        : theme.customSolarizedLightAtom
    );
    setBgClass(resolvedTheme === "dark" ? styles.darkBg : styles.lightBg);
    setLineNumberBg(resolvedTheme === "dark" ? "#242424" : "#f1f1f1");
    document.documentElement.style.setProperty(
      "--scrollbar-color",
      resolvedTheme === "dark" ? "#2f2f2f transparent" : "#cacaca transparent"
    );
    return () => {
      setCurrentTheme(fallbackTheme);
      setBgClass("");
      setLineNumberBg("transparent");
      document.documentElement.style.removeProperty("--scrollbar-color");
    };
  }, [resolvedTheme]);

  return (
    <ScrollArea radius={"full"} asChild>
      <div
        className={clsx(styles.codeBlock, jetbrains_mono.className, bgClass)}
      >
        <div
          className="quick-action"
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            display: "flex",
            alignItems: "center",
            gap: 8,
            padding: 8,
          }}
        >
          <Badge
            style={{
              backgroundColor: "var(--colors-background)",
              color: "var(--colors-text)",
              fontSize: 12,
            }}
          >
            {language.toUpperCase()}
          </Badge>
          <CopyToClipboard text={value} onCopy={handleCopy}>
            <Button variant={"soft"}>
              <motion.div
                initial={{ scale: 1 }}
                animate={{ scale: copied ? 1.2 : 1 }}
                transition={{ duration: 0.2 }}
              >
                {copied ? <CheckIcon /> : <CopyIcon />}
              </motion.div>
            </Button>
          </CopyToClipboard>
        </div>
        <SyntaxHighlighter
          language={language}
          style={currentTheme}
          customStyle={{
            fontFamily: "JetBrains Mono, monospace",
            fontSize: "14px",
            padding: "0.5em",
            transition: "color 0.5s, background-color 0.5s",
            marginRight: "5em", // 防止代码块被遮挡
          }}
          showLineNumbers
          lineNumberStyle={{
            position: "sticky",
            left: 0,
            background: lineNumberBg,
            paddingRight: "10px",
            marginRight: "10px",
            userSelect: "none",
            minWidth: "2em",
            transition: "background-color 0.5s",
          }}
        >
          {value}
        </SyntaxHighlighter>
      </div>
    </ScrollArea>
  );
};

export default CustomCodeBlock;
