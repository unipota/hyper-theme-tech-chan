const path = require("path");
const color = require("color");

const bg_dir = path.resolve(__dirname, "background");
const imagePath = path.join(bg_dir, "tech.png");

exports.decorateConfig = config => {
  const primary = "#1598FF";
  const secondary = "#1b4c80";
  const tertiary = "#061c30";
  const unibody = "#1598FF";
  const background = unibody;
  const transparent = color(secondary)
    .alpha(0)
    .string();
  const selection = color(primary)
    .alpha(0.3)
    .string();
  const highlight = "#FFFFFF";
  const secondHighlight = "#9bd679";
  const cursorColor = "#9bd679";

  const syntax = {
    backgroundColor: transparent,
    borderColor: background,
    cursorColor: cursorColor,
    foregroundColor: secondary,
    selectionColor: selection,
    colors: {
      black: tertiary,
      red: secondary,
      green: tertiary,
      yellow: secondary,
      blue: secondary,
      magenta: secondary,
      cyan: secondary,
      white: secondHighlight,
      lightBlack: tertiary,
      lightRed: secondary,
      lightGreen: secondary,
      lightYellow: secondary,
      lightBlue: secondary,
      lightMagenta: secondary,
      lightCyan: secondary,
      lightWhite: highlight
    }
  };

  return Object.assign({}, config, syntax, {
    termCSS: config.termCSS || "",
    css: `
    ${config.css || ""}
    .terms_terms {
      background: url("file://${imagePath}") center;
      background-size: cover;
    }
    .header_header, .header_windowHeader {
      background-color: ${background} !important;
    }
    .hyper_main {
      background-color: ${background};
    }
    .tabs_nav .tabs_list {
      border-bottom: 0;
    }
    .tabs_nav .tabs_title,
    .tabs_nav .tabs_list .tab_tab {
      color: ${secondary};
      border: 0;
    }
    .tab_icon {
      color: ${background};
      width: 15px;
      height: 15px;
    }
    .tab_icon:hover {
      background-color: ${background};
    }
    .tab_shape {
      color: ${secondary};
      width: 7px;
      height: 7px;
    }
    .tab_shape:hover {
      color: ${secondary};
    }
    .tabs_nav .tabs_list {
      color: ${background};
    }
    .tab_tab::before {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 4px;
      background-color: ${secondary};
      transform: scaleX(0);
      transition: none;
    }
    .tab_tab.tab_active::before {
      transform: scaleX(1);
      transition: all 400ms cubic-bezier(0.0, 0.0, 0.2, 1)
    }
    .terms_terms .terms_termGroup .splitpane_panes .splitpane_divider {
      background-color: ${secondary} !important;
    }
    `
  });
};
